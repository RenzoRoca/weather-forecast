'use client'
import React, { useEffect, useState } from 'react'
import { getComponent } from '../services/componentService'
import { WeatherData } from '../types/weatherTypes';
import { getEmojiForDescription } from '../utils/weatherUtils';
import { getThreeLetterDay } from '../utils/dateUtils';
import { replacePlaceholders } from '../utils/renderComponentUtils';
import RenderForecastItems from './renderForecastItems';

interface ComponentProps {
    component: string;
    props: {
        className?: string;
        children?: React.ReactNode;
        [key: string]: any;
    };
}

function renderComponentFunc(component: ComponentProps, index: number, data: WeatherData): JSX.Element {
    const { component: Component, props } = component;
    let children = props.children as ComponentProps[];

    if (Array.isArray(children)) {
      return (
        <div key={index} className={props.className}>
          {children.map((child, idx) => renderComponentFunc(child, idx, data))}
        </div>
      );
    }

    if (props.children === '$$$FORECAST_DAY$$$') {
        // Handle forecast day placeholder by mapping through all forecast entries
        return <RenderForecastItems data={data} getValue={(item) => getThreeLetterDay(item.date)} props={props.className} />
    } else if (props.children === '$$$FORECAST_ICON$$$') {
        // Handle forecast icon placeholder
        return <RenderForecastItems data={data} getValue={(item) => getEmojiForDescription(item.description)} props={props.className} />
    } else if (props.children === '$$$FORECAST_TEMPERATURE$$$') {
        // Handle forecast temperature placeholder
        return <RenderForecastItems data={data} getValue={(item) => `${item.temperature}°`} props={props.className} />;
    }


    if (typeof children === 'object' && children !== null) {
        // Recursively process nested children
        return <div key={index} className={props.className}>{renderComponentFunc(children, 0, data)}</div>;
    }
  
    const renderedChildren = replacePlaceholders(children, data);
  
    return (
      <div key={index} className={props.className}>
        {renderedChildren}
      </div>
    );
}

const RenderComponent: React.FC<{ data: WeatherData }> = ({ data }) => {
    const [jsonData, setJsonData] = useState<ComponentProps | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const componentData = await getComponent();
          setJsonData(componentData);
        } catch (error) {
          console.error('Error fetching component data:', error);
        }
      };
  
      fetchData();
    }, [data]); // Add data as a dependency to re-run effect when data changes
  
    if (!jsonData) {
      return <div>Loading...</div>;
    }
  
    return renderComponentFunc(jsonData, 0, data);
}

export default RenderComponent
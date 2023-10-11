import { WeatherData } from "../types/weatherTypes";

const RenderForecastItems: React.FC<{ data: WeatherData; getValue: (item: any) => string, props: string | undefined }> = ({ data, getValue, props }) => (
    <div className="flex justify-between space-x-4 dark:text-gray-400">
        {data?.forecast?.map((item, forecastIndex) => (
            <span key={forecastIndex} className={props}>
                {getValue(item)}
            </span>
        ))}
    </div>
);

export default RenderForecastItems
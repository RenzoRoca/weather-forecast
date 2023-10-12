'use client'
import React, { useEffect, useState } from 'react'
import RenderComponent from './components/renderComponent'
import { getWeather } from './services/weatherService'
import { WeatherData } from './types/weatherTypes'


export default function Home() {

  const [weatherData, setWeatherData] = useState<WeatherData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeather()
        setWeatherData(data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchData()
  }, [])

  if (!weatherData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1 className='m-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white' >Weather Forecast</h1>
      {/* {weatherData.map((cityWeather) => ( }
         <WeatherComponent key={cityWeather.city} weatherData={cityWeather} />
      
      ))
      */}
        {
        weatherData.map((cityWeather) => ( 
          <RenderComponent data={cityWeather} />
        ))
        }
    </div>
  )
}
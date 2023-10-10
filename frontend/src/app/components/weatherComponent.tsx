
'use client'
import { WeatherData } from '../types/weatherTypes'
import { getThreeLetterDay } from '../utils/dateUtils'
import { getEmojiForDescription } from '../utils/weatherUtils'

interface WeatherComponentProps {
  weatherData: WeatherData
}

const WeatherComponent: React.FC<WeatherComponentProps> = ({ weatherData }) => {
  return (
    <div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between space-x-8">
        <div className="flex flex-col items-center">
          <span className="font-bold text-8xl">{getEmojiForDescription(weatherData?.current_weather?.description)}</span>
          <h1 className="text-xl font-semibold mt-3">{weatherData?.city}</h1>
        </div>
        <span className="font-bold text-8xl">{weatherData?.current_weather?.temperature}°</span>
      </div>
      <div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
      {weatherData?.forecast?.map((day) => ( 
        <div className="flex flex-col items-center space-y-1">
          <span className="uppercase">{getThreeLetterDay(day.date)}</span>
          <span className='font-bold text-2xl'>{getEmojiForDescription(day.description)}</span>
          <span>{day.temperature}°</span>
        </div>
      ))}
      </div>
    </div>
  )
}

export default WeatherComponent
import { WeatherEntry } from '../types'
import weatherData from './weather.json'

const citiesWeather: Array<WeatherEntry> = weatherData as Array<WeatherEntry>

const calculateWeatherAvg = (weatherEntry: WeatherEntry): string => {
    const currentTemperature = weatherEntry.current_weather.temperature
    const forecastTemperatures = weatherEntry.forecast.map(day => day.temperature)
    const totalTemperatures = [currentTemperature, ...forecastTemperatures]    
    const sum = totalTemperatures.reduce((acc, temperature) => acc + temperature, 0)
    return `weather average: ${Math.round(sum / totalTemperatures.length)}º`
}
  
const updateWeatherAvg = (weatherEntries: Array<WeatherEntry>): Array<WeatherEntry> => {
  return weatherEntries.map(entry => {
    const weatherAvg = calculateWeatherAvg(entry)
    return { ...entry, weatherAvg }
  })
}
  
export const getCitiesWeather = () => {
  const weatherEntriesWithAvg = updateWeatherAvg(citiesWeather)
  return weatherEntriesWithAvg
}
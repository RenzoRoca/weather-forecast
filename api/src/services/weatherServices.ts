import { WeatherEntry } from '../types'
import weatherData from './weather.json'

const citiesWeather: Array<WeatherEntry> = weatherData as Array<WeatherEntry>

export const getCitiesWeather = () => citiesWeather
export type WeatherDescription = 'Sunny' | 'Cloudy' | 'Rainy' | 'Thunderstorm'
export type CityName = 'Madrid' | 'Stockholm' | 'Tokyo'

export interface CurrentWeather {
    temperature: number
    description: WeatherDescription
}

export interface WeatherForecast {
    date: string
    temperature: number
    description: WeatherDescription
}

export interface WeatherData {
    city: CityName
    current_weather: CurrentWeather
    forecast: WeatherForecast[]
    weatherAvg: string
}

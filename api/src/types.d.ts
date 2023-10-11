export type WeatherDescription = 'Sunny' | 'Cloudy' | 'Rainy' | 'Thunderstorm'
export type CityName = 'Madrid' | 'Stockholm' | 'Tokyo'

export interface WeatherEntry {
    city: CityName,
    current_weather: {
        temperature: number
        description: WeatherDescription
    }
    forecast: {
        date: string
        temperature: number
        description: WeatherDescription
    }[],
    weatherAvg: string
}
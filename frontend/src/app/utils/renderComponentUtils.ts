import { WeatherData } from "../types/weatherTypes"
import { getEmojiForDescription } from "./weatherUtils"

export const replacePlaceholders = (node: any, data: WeatherData): string => {
    if (typeof node === 'string') {
        switch (node) {
            case '$$$CITY$$$':
                return data?.city || 'Unknown City'
            case '$$$CURRENT_TEMPERATURE$$$':
                return `${data?.current_weather?.temperature}°` || 'N/A'
            case '$$$CURRENT_WEATHER_ICON$$$':
                return getEmojiForDescription(data?.current_weather?.description) || 'N/A'
            case '$$$WEATHER_AVG$$$':
                return `${data?.weatherAvg}` || 'N/A'
            default:
                return 'N/A'
        }
    }
    // If node is not a string, array, or object, return it as is
    return node
}
export const getEmojiForDescription = (description: string): string => {
    switch (description) {
      case 'Sunny':
        return '☀️'
      case 'Cloudy':
        return '☁️'
      case 'Rainy':
        return '🌧️'    
      case 'Thunderstorm':
        return '⛈️'
      default:
        return ''
    }
  }
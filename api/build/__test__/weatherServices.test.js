"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weatherServices_1 = require("../src/services/weatherServices");
describe('getCitiesWeather', () => {
    let citiesWeather;
    beforeEach(() => {
        citiesWeather = (0, weatherServices_1.getCitiesWeather)();
    });
    test('return an array of WeatherEntry', () => {
        expect(Array.isArray(citiesWeather)).toBe(true);
        citiesWeather.forEach(entry => {
            expect(entry).toHaveProperty('city');
            expect(entry).toHaveProperty('current_weather');
            expect(entry).toHaveProperty('forecast');
            expect(entry.current_weather).toHaveProperty('temperature');
            expect(entry.current_weather).toHaveProperty('description');
            expect(entry.forecast).toBeDefined();
            expect(Array.isArray(entry.forecast)).toBe(true);
        });
    });
    test('validate WeahterEntry properties', () => {
        citiesWeather.forEach(entry => {
            expect(['Madrid', 'Stockholm', 'Tokyo']).toContain(entry.city);
            expect(typeof entry.current_weather.temperature).toBe('number');
            expect(['Sunny', 'Cloudy', 'Rainy', 'Thunderstorm']).toContain(entry.current_weather.description);
        });
    });
    test('validate forecast properties', () => {
        citiesWeather.forEach(entry => {
            entry.forecast.forEach(forecastEntry => {
                expect(forecastEntry).toHaveProperty('date');
                expect(forecastEntry).toHaveProperty('temperature');
                expect(forecastEntry).toHaveProperty('description');
                expect(typeof forecastEntry.date).toBe('string');
                expect(typeof forecastEntry.temperature).toBe('number');
                expect(['Sunny', 'Cloudy', 'Rainy', 'Thunderstorm']).toContain(forecastEntry.description);
            });
        });
    });
});

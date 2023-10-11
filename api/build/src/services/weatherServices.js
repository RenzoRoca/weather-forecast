"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCitiesWeather = void 0;
const weather_json_1 = __importDefault(require("./weather.json"));
const citiesWeather = weather_json_1.default;
const calculateWeatherAvg = (weatherEntry) => {
    const currentTemperature = weatherEntry.current_weather.temperature;
    const forecastTemperatures = weatherEntry.forecast.map(day => day.temperature);
    const totalTemperatures = [currentTemperature, ...forecastTemperatures];
    const sum = totalTemperatures.reduce((acc, temperature) => acc + temperature, 0);
    return `weather average: ${Math.round(sum / totalTemperatures.length)}º`;
};
const updateWeatherAvg = (weatherEntries) => {
    return weatherEntries.map(entry => {
        const weatherAvg = calculateWeatherAvg(entry);
        return Object.assign(Object.assign({}, entry), { weatherAvg });
    });
};
const getCitiesWeather = () => {
    const weatherEntriesWithAvg = updateWeatherAvg(citiesWeather);
    return weatherEntriesWithAvg;
};
exports.getCitiesWeather = getCitiesWeather;

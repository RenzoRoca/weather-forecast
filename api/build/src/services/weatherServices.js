"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCitiesWeather = void 0;
const weather_json_1 = __importDefault(require("./weather.json"));
const citiesWeather = weather_json_1.default;
const getCitiesWeather = () => citiesWeather;
exports.getCitiesWeather = getCitiesWeather;

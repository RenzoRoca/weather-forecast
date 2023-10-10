"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherComponent = void 0;
const weatherComponent_json_1 = __importDefault(require("./weatherComponent.json"));
const component = weatherComponent_json_1.default;
const getWeatherComponent = () => component;
exports.getWeatherComponent = getWeatherComponent;

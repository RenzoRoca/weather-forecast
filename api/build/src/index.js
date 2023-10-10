"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const weather_1 = __importDefault(require("./routes/weather"));
const component_1 = __importDefault(require("./routes/component"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // transform req.body to JSON
// Enable CORS for all routes
app.use((0, cors_1.default)());
const PORT = 1337;
app.use('/api/component', component_1.default);
app.use('/api/weather', weather_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

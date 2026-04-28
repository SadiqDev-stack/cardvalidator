"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_js_1 = __importDefault(require("./middlewares/error.js"));
const logger_js_1 = require("./middlewares/logger.js");
const cardValidator_js_1 = __importDefault(require("./routers/cardValidator.js"));
const app = (0, express_1.default)();
const { PORT = 8080 } = process.env;
app.use(express_1.default.json());
app.use(logger_js_1.logger);
// Health check endpoint
app.get("/", (req, res) => {
    res.status(200).json({ message: "Card Validator API is running" });
});
// for routers 
app.use("/api/card", cardValidator_js_1.default);
// Error handling middleware (must be last)
app.use(error_js_1.default);
app.use((err, req, res, next) => {
    return res.status(404).json({
        success: false,
        message: "route is not found on server"
    });
});
app.listen(PORT, () => {
    (0, logger_js_1.log)(`Server is running on port ${PORT}`);
});

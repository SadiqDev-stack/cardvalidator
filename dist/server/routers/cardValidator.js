"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardValidator_js_1 = require("../controllers/cardValidator.js");
const express_1 = require("express");
const app = (0, express_1.Router)();
app.post("/validate", cardValidator_js_1.cardValidatorHandler);
exports.default = app;

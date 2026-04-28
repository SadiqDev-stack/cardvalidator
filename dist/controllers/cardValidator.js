"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardValidatorHandler = void 0;
const node_console_1 = require("node:console");
const cardValidator_js_1 = require("../utilities/cardValidator.js");
const cardValidatorHandler = (req, res) => {
    try {
        const { cardNumber } = req.body;
        // Validate input
        if (!cardNumber || typeof cardNumber !== "string") {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid card number",
                data: {
                    isValid: false
                }
            });
        }
        const isValid = (0, cardValidator_js_1.validateCardNumber)(cardNumber);
        if (isValid) {
            return res.status(200).json({
                success: true,
                message: "Card number is valid",
                data: {
                    isValid: true
                }
            });
        }
        else {
            return res.status(200).json({
                success: true,
                message: "Card number is not valid",
                data: {
                    isValid: false
                }
            });
        }
    }
    catch (error) {
        (0, node_console_1.log)(`Error validating card number: ${error.message}`, "bad");
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: {
                isValid: false
            }
        });
    }
};
exports.cardValidatorHandler = cardValidatorHandler;

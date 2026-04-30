
import { log } from "../middlewares/logger.js";
import { validateCardNumber } from "../utilities/cardValidator.js";
import { Request, Response } from "express";

const cardValidatorHandler = (req: Request, res: Response) => {
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

        const isValid = validateCardNumber(cardNumber);

        if (isValid) {
            return res.status(200).json({
                success: true,
                message: "Card number is valid",
                data: {
                    isValid: true
                }
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Card number is not valid",
                data: {
                    isValid: false
                }
            });
        }
    } catch (error: any) {
        log(`Error validating card number: ${error.message}`, "bad");
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: {
                isValid: false
            }
        });
    }
};

export {
    cardValidatorHandler
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardValidator_js_1 = require("../server/utilities/cardValidator.js");
describe("Card Validator", () => {
    test("should return true for valid card number", () => {
        expect((0, cardValidator_js_1.validateCardNumber)("4532015112830366")).toBe(true);
    });
    test("should return false for invalid card number", () => {
        expect((0, cardValidator_js_1.validateCardNumber)("123456789")).toBe(false);
    });
    test("should reject non-numeric input", () => {
        expect((0, cardValidator_js_1.validateCardNumber)("abcd1234")).toBe(false);
    });
});

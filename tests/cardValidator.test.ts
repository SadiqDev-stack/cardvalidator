import { validateCardNumber } from "../server/utilities/cardValidator";

describe("Card Validator", () => {

test("should return true for valid card number", () => {
expect(validateCardNumber("4532015112830366")).toBe(true);
});

test("should return false for invalid card number", () => {
expect(validateCardNumber("123456789")).toBe(false);
});

test("should reject non-numeric input", () => {
expect(validateCardNumber("abcd1234")).toBe(false);
});

});

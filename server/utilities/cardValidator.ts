/**
 * Validates a card number using the Luhn Algorithm
 * @param cardNumber - The card number to validate
 * @returns boolean - True if the card number is valid, false otherwise
 */
const validateCardNumber = (cardNumber: string): boolean => {
    // Remove spaces and hyphens
    const sanitized = cardNumber.replace(/[\s-]/g, "");

    // Check if the card number contains only digits
    if (!/^\d+$/.test(sanitized)) {
        return false;
    }

    // Check if the card number has a valid length (13-19 digits)
    if (sanitized.length < 13 || sanitized.length > 19) {
        return false;
    }

    // Implement the Luhn Algorithm
    let sum = 0;
    let isSecondDigit = false;

    // Process digits from right to left
    for (let i = sanitized.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitized[i], 10);

        // Double every second digit from the right
        if (isSecondDigit) {
            digit *= 2;

            // Subtract 9 if the result is greater than 9
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        isSecondDigit = !isSecondDigit;
    }

    // Check if the total is divisible by 10
    return sum % 10 === 0;
};

export { validateCardNumber };

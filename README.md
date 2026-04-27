# Card Validator API

A simple REST API built with **Express.js and TypeScript** that validates card numbers using the **Luhn Algorithm**.

---

## Overview

This API provides a single endpoint to validate whether a card number is valid or not.

It ensures:

* Proper input validation
* Clear response structure
* Standard HTTP status codes
* Error handling for invalid or missing input

---

## Endpoint

### POST `/api/card/validate`

Validate a card number.

### Request Body

```json
{
  "cardNumber": "4532015112830366"
}
```

---

## Response Format

### Success (Valid or Invalid Card)

**Status: 200**

```json
{
  "success": true,
  "message": "Card number is valid",
  "data": {
    "isValid": true
  }
}
```

or

```json
{
  "success": true,
  "message": "Card number is not valid",
  "data": {
    "isValid": false
  }
}
```

---

### Bad Request (Missing or Invalid Input)

**Status: 400**

```json
{
  "success": false,
  "message": "Please provide a valid card number",
  "data": {
    "isValid": false
  }
}
```

---

### Server Error

**Status: 500**

```json
{
  "success": false,
  "message": "Internal server error",
  "data": {
    "isValid": false
  }
}
```

---

## Validation Logic

This API uses the **Luhn Algorithm**, which is the industry standard for validating card numbers.

It works by:

* Doubling every second digit from the right
* Subtracting 9 if the result is greater than 9
* Summing all digits
* Checking if the total is divisible by 10

---

## Setup and Installation

### 1. Clone the repository

```bash
git clone <https://github.com/sadiqDev-stack/cardvalidator>
cd card-validator
```

### 2. Install dependencies

```bash
npm install
```

### 3. navigate to server directory

```bash
cd server
```

### 4. Build and run app

```bash
npm start
```

---

## Project Structure

```text
server/
 ├── controllers/
 ├── routers/
 ├── services/
 ├── utilities/
 ├── app.ts
 └── server.ts
```

---

## Testing

You can test the endpoint using:

* Postman
* Thunder Client
* curl

---

## Notes

* Built with TypeScript (`strict: true`)
* Follows clean architecture (controller → service → utils)
* Designed for readability and maintainability

---

## Author

Sadiq Abubakar
GitHub: https://github.com/SadiqDev-stack

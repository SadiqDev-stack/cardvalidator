import {
    cardValidatorHandler
} from "../controllers/cardValidator.js";
import { Router } from "express";

const app = Router();

app.post("/validate", cardValidatorHandler);

export default app;
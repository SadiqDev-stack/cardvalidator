import express, { NextFunction, Request, Response } from "express";
import error from "./middlewares/error.js";
import { log, logger } from "./middlewares/logger.js";
import cardRouter from "./routers/cardValidator.js";


const app = express();

const { PORT = 8080 } = process.env;

app.use(express.json());
app.use(logger);

// Health check endpoint
app.get("/", (req, res) => {
  res.status(200).json({ message: "Card Validator API is running" });
});

// for routers 
app.use("/api/card", cardRouter);

// Error handling middleware (must be last)
app.use(error);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({
        success: false,
        message: "route is not found on server"
    })
})

app.listen(PORT, () => {
    log(`Server is running on port ${PORT}`);
});
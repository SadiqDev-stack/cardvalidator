"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.log = void 0;
const colors_1 = __importDefault(require("colors"));
const logger = (req, res, next) => {
    const { method, url } = req;
    const host = req.get('host');
    req.domain = host;
    console.log(colors_1.default.cyan(`\n\na host ${host}, Sent ${method} Request To ${url}\n\n`));
    next();
};
exports.logger = logger;
const log = (message, color = "good") => {
    switch (color) {
        case "good":
            console.log(`\n ${colors_1.default.green(message)} \n`);
            break;
        case "bad":
            console.log(`\n ${colors_1.default.red(message)} \n`);
            break;
        case "warning":
            console.log(`\n ${colors_1.default.yellow(message)} \n`);
            break;
        default:
            console.log(`\n ${message} \n`);
    }
};
exports.log = log;

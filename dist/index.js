"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const questions_1 = __importDefault(require("./questions"));
const responses_1 = __importDefault(require("./responses"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
var jsonParser = body_parser_1.default.json();
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
(0, questions_1.default)(app, jsonParser);
(0, responses_1.default)(app, jsonParser);

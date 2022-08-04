import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import questionsHandler from './questions';
import responsesHandler from './responses';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

var jsonParser = bodyParser.json();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

questionsHandler(app, jsonParser);
responsesHandler(app, jsonParser);

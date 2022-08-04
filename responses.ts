import { Express, Request, Response } from 'express';
import { Responses } from './types';

let questionnareResponses: Responses = {};

const responsesHandler = (app: Express, jsonParser: any) => {
  app.get('/responses', (req: Request, res: Response) => {
    res.json(questionnareResponses);
  });

  app.post(
    '/responses/:userName',
    jsonParser,
    (req: Request, res: Response) => {
      const { body, params } = req;
      const { userName } = params;
      console.log(body, userName);

      if (questionnareResponses[userName]) {
        questionnareResponses[userName].push(body);
      } else {
        questionnareResponses[userName] = [body];
      }

      res.json(body);
    }
  );

  app.delete(
    '/responses/:userName/:responseId',
    (req: Request, res: Response) => {
      const { body, params } = req;
      const { userName, responseId } = params;
      console.log(body, userName);
      const filtered = questionnareResponses[userName].filter(
        (r) => r.id !== responseId
      );
      questionnareResponses[userName] = filtered;

      res.status(204).json(null);
    }
  );

  app.delete('/responses/:userName', (req: Request, res: Response) => {
    const { body, params } = req;
    const { userName } = params;
    console.log(body, userName);

    delete questionnareResponses[userName];

    res.status(204).json(null);
  });
};

export default responsesHandler;

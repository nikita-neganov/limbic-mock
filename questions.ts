import { Express, Request, Response } from 'express';
import { QuestionType } from './types';
import { v4 } from 'uuid';

let newQuestions = [
  {
    id: v4(),
    title: 'Question 1',
    description: 'Description for question 1',
    type: QuestionType.FreeText,
    required: true,
  },
  {
    id: v4(),
    title: 'Question 2',
    description: 'Description for question 2',
    type: QuestionType.FreeText,
    required: true,
  },
  {
    id: v4(),
    title: 'Question 3',
    description: 'Description for question 2',
    type: QuestionType.Checkbox,
    required: true,
    options: [{ title: 'Option 1' }, { title: 'Option 2' }],
  },
  {
    id: v4(),
    title: 'Question 4',
    description: 'Description for question 2',
    type: QuestionType.Radiobutton,
    required: true,
    options: [
      { title: 'Option 1' },
      { title: 'Option 2' },
      { title: 'Option 3' },
    ],
  },
];

const questionsHandler = (app: Express, jsonParser: any) => {
  app.get('/questions', (req: Request, res: Response) => {
    res.json(newQuestions);
  });

  app.put('/questions', jsonParser, (req: Request, res: Response) => {
    const { body } = req;
    newQuestions = body;
    res.json(body);
  });
};

export default questionsHandler;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const uuid_1 = require("uuid");
let newQuestions = [
    {
        id: (0, uuid_1.v4)(),
        title: 'Question 1',
        description: 'Description for question 1',
        type: types_1.QuestionType.FreeText,
        required: true,
    },
    {
        id: (0, uuid_1.v4)(),
        title: 'Question 2',
        description: 'Description for question 2',
        type: types_1.QuestionType.FreeText,
        required: true,
    },
    {
        id: (0, uuid_1.v4)(),
        title: 'Question 3',
        description: 'Description for question 2',
        type: types_1.QuestionType.Checkbox,
        required: true,
        options: [{ title: 'Option 1' }, { title: 'Option 2' }],
    },
    {
        id: (0, uuid_1.v4)(),
        title: 'Question 4',
        description: 'Description for question 2',
        type: types_1.QuestionType.Radiobutton,
        required: true,
        options: [
            { title: 'Option 1' },
            { title: 'Option 2' },
            { title: 'Option 3' },
        ],
    },
];
const questionsHandler = (app, jsonParser) => {
    app.get('/questions', (req, res) => {
        res.json(newQuestions);
    });
    app.put('/questions', jsonParser, (req, res) => {
        const { body } = req;
        newQuestions = body;
        res.json(body);
    });
};
exports.default = questionsHandler;

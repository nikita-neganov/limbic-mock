"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const uuid_1 = require("uuid");
let questions = {
    list: [],
    entities: {},
};
let newQuestions = [
    {
        id: '1',
        title: 'Question 1',
        description: 'Description for question 1',
        type: types_1.QuestionType.FreeText,
    },
    {
        id: '2',
        title: 'Question 2',
        description: 'Description for question 2',
        type: types_1.QuestionType.FreeText,
    },
    {
        id: '3',
        title: 'Question 3',
        description: 'Description for question 2',
        type: types_1.QuestionType.Checkbox,
        options: [
            { title: 'Option 1', value: '1' },
            { title: 'Option 2', value: '2' },
        ],
    },
];
const questionsHandler = (app, jsonParser) => {
    app.get('/questions', (req, res) => {
        // const mappedQuestions = questions.list.map((id) => questions.entities[id]);
        // console.log('tries questions', req.get('origin'));
        // // res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        // res.json({ questions: mappedQuestions });
        res.json(newQuestions);
    });
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    app.post('/questions', (req, res) => {
        const { body } = req;
        const id = (0, uuid_1.v4)();
        questions.list.push(id);
        const question = Object.assign(Object.assign({}, body), { id });
        questions.entities[id] = question;
        res.json(question);
    });
    app.patch('/questions/:id', (req, res) => {
        const { body } = req;
        const { id } = req.params;
        questions.entities[id] = Object.assign(Object.assign({}, questions.entities[id]), body);
        res.json(questions.entities[id]);
    });
    app.delete('/questions/:id', (req, res) => {
        const { id } = req.params;
        const filtered = questions.list.filter((qId) => qId !== id);
        questions.list = filtered;
        delete questions.entities[id];
    });
    app.put('/questions', jsonParser, (req, res) => {
        const { body } = req;
        newQuestions = body;
        res.json(body);
    });
};
exports.default = questionsHandler;

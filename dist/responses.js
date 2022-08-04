"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let questionnareResponses = {};
const responsesHandler = (app, jsonParser) => {
    app.get('/responses', (req, res) => {
        res.json(questionnareResponses);
    });
    app.post('/responses/:userName', jsonParser, (req, res) => {
        const { body, params } = req;
        const { userName } = params;
        console.log(body, userName);
        if (questionnareResponses[userName]) {
            questionnareResponses[userName].push(body);
        }
        else {
            questionnareResponses[userName] = [body];
        }
        res.json(body);
    });
    app.delete('/responses/:userName/:responseId', (req, res) => {
        const { body, params } = req;
        const { userName, responseId } = params;
        console.log(body, userName);
        const filtered = questionnareResponses[userName].filter((r) => r.id !== responseId);
        questionnareResponses[userName] = filtered;
        res.status(204).json(null);
    });
    app.delete('/responses/:userName', (req, res) => {
        const { body, params } = req;
        const { userName } = params;
        console.log(body, userName);
        delete questionnareResponses[userName];
        res.status(204).json(null);
    });
};
exports.default = responsesHandler;

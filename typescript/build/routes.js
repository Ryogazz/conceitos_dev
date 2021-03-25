"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lol = exports.HelloWord = void 0;
function HelloWord(request, response) {
    return response.json({ message: 'Hello World' });
}
exports.HelloWord = HelloWord;
function lol(request, response) {
    return response.json({ message: 'ola teste' });
}
exports.lol = lol;

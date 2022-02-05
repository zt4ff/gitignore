"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectFromOptions = exports.alphabetPrompt = exports.promptForEditorConfig = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
function selectFromOptions(message, choices) {
    return __awaiter(this, void 0, void 0, function* () {
        const { answer } = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "answer",
                message,
                choices,
            },
        ]);
        return answer;
    });
}
exports.selectFromOptions = selectFromOptions;
function alphabetPrompt(editorType = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const { answer } = yield inquirer_1.default.prompt([
            {
                type: "input",
                name: "answer",
                message: "Enter the initial letter of the language, framework, tools e.t.c",
                validate: (input) => {
                    if (editorType) {
                        return /^[a-gA-Gi-pI-Pr-tR-Tv-xV-X]$/.test(input)
                            ? true
                            : `No list under the entry ${input} `;
                    }
                    return /^[a-zA-Z]$/.test(input)
                        ? true
                        : "Provide a character between a - z";
                },
            },
        ]);
        return answer.toLowerCase();
    });
}
exports.alphabetPrompt = alphabetPrompt;
function promptForEditorConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const { answer } = yield inquirer_1.default.prompt({
            type: "confirm",
            name: "answer",
            message: "Do you want to include configuration for you editor?",
        });
        return answer;
    });
}
exports.promptForEditorConfig = promptForEditorConfig;

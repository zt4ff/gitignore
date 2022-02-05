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
const mappings_1 = require("./mappings");
const cli_1 = require("./cli");
const generate_ignorefile_1 = __importDefault(require("./generate_ignorefile"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = yield (0, cli_1.alphabetPrompt)();
        const generalType = yield (0, cli_1.selectFromOptions)("Select the framework, project or tool type", mappings_1.cliOptions[filter]);
        const shouldIncludeEditorConfig = yield (0, cli_1.promptForEditorConfig)();
        if (!shouldIncludeEditorConfig) {
            return (0, generate_ignorefile_1.default)(generalType);
        }
        const editorFilter = yield (0, cli_1.alphabetPrompt)(true);
        const editorType = yield (0, cli_1.selectFromOptions)("Select the Editor type", mappings_1.editorOptions[editorFilter]);
        return (0, generate_ignorefile_1.default)(generalType, editorType);
    });
}
main();

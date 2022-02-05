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
const fs_1 = __importDefault(require("fs"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const generateIgnoreFile = (generalType, editorType) => {
    fs_1.default.open(path_1.default.resolve(process.cwd(), ".gitignore"), "w", (err, fd) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            throw new Error(err.message);
        const genConfig = yield promises_1.default.readFile(path_1.default.resolve(__dirname, "..", "general_type", `${generalType}.gitignore`));
        fs_1.default.write(fd, genConfig, (er1) => __awaiter(void 0, void 0, void 0, function* () {
            if (er1)
                throw new Error(er1.message);
            if (editorType) {
                const editorConfig = yield promises_1.default.readFile(path_1.default.resolve(__dirname, "..", "editor_type", `${editorType}.gitignore`));
                fs_1.default.writeFile(fd, editorConfig, (er2) => {
                    if (er2)
                        throw new Error(er2.message);
                });
            }
            fs_1.default.close(fd, (er) => {
                if (er)
                    throw new Error(er.message);
                console.log("Gitignore file created successfully");
            });
        }));
    }));
};
exports.default = generateIgnoreFile;

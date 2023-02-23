import { Interpreter } from "./Interpreter.js";
export declare class StandardInterpreter implements Interpreter {
    private log;
    private termRegexGlobal;
    private termRegexLocal;
    constructor();
    getType(): string;
    interpert(match: RegExpMatchArray): Map<string, string>;
    getGlobalTermRegex(): RegExp;
    getLocalTermRegex(): RegExp;
}

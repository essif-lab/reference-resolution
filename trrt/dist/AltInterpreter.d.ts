import { Interpreter } from "./Interpreter.js";
export declare class AltInterpreter implements Interpreter {
    private termRegexGlobal;
    private termRegexLocal;
    constructor();
    getType(): string;
    interpert(match: RegExpMatchArray): Map<string, string>;
    getGlobalTermRegex(): RegExp;
    getLocalTermRegex(): RegExp;
}

import { Converter } from "./Converter.js";
export declare class MarkdownConverter implements Converter {
    private log;
    constructor();
    getType(): string;
    convert(glossary: Map<string, string>, properties: Map<string, string>): string;
}

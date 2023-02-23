export class AltInterpreter {
    termRegexGlobal = /(?<=[^`\\])\[(?=[^@\]]+@[:a-z0-9_-]*\](?:\([#a-z0-9_-]+\))?)(?P<showtext>.+?)@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsntag>[a-z0-9_-]+?))?\](?P<ref>\((?P<id>[a-z0-9_-]*)(?:#(?P<trait>[a-z0-9_-]+?))?\))?/g;
    termRegexLocal = /(?<=[^`\\])\[(?=[^@\]]+@[:a-z0-9_-]*\](?:\([#a-z0-9_-]+\))?)(?P<showtext>.+?)@(?P<scopetag>[a-z0-9_-]*)(?::(?P<vsntag>[a-z0-9_-]+?))?\](?P<ref>\((?P<id>[a-z0-9_-]*)(?:#(?P<trait>[a-z0-9_-]+?))?\))?/;
    constructor() { }
    getType() {
        return "Alt";
    }
    interpert(match) {
        var termProperties = new Map();
        // todo
        return termProperties;
    }
    getGlobalTermRegex() {
        return this.termRegexGlobal;
    }
    getLocalTermRegex() {
        return this.termRegexLocal;
    }
}

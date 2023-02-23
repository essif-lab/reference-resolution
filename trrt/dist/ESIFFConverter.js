import { Logger } from "tslog";
export class ESSIFConverter {
    log = new Logger();
    constructor() { }
    getType() {
        return "ESIFF";
    }
    convert(glossary, properties) {
        var esiffOut = "";
        if (properties.get("scopetag") == "default") {
            if (properties.get("vsntag") == "latest") {
                esiffOut = `<Term popup="todo" reference="${properties.get("term")}">${properties.get("showtext")}</Term>`;
                this.log.info("The esiff term is: " + esiffOut);
            }
            else {
                this.log.error("No access for this version yet");
                return esiffOut;
                // TODO go back and get the correct glossary   
            }
        }
        else {
            this.log.error("No access for this scope yet");
            return esiffOut;
            // TODO go back and get the correct glossary
        }
        return esiffOut;
    }
}

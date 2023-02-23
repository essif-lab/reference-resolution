import { Logger } from "tslog";
export class HTTPConverter {
    log = new Logger();
    constructor() { }
    getType() {
        return "HTTP";
    }
    convert(glossary, properties) {
        var htmlOut = "";
        if (properties.get("scopetag") == "default") {
            if (properties.get("vsntag") == "latest") {
                var term = glossary.get(properties.get("term"));
                if (properties.get("trait") != "default") {
                    htmlOut = `<a href="${term}#${properties.get("trait")}"><span style="font-weight:bold>${properties.get("showtext")}</span></a>`;
                }
                else {
                    htmlOut = `<a href="${term}"><span style="font-weight:bold>${properties.get("showtext")}</span></a>`;
                }
                this.log.info("The html term is: " + htmlOut);
            }
            else {
                this.log.error("No access for this version yet");
                return htmlOut;
                // TODO go back and get the correct glossary   
            }
        }
        else {
            this.log.error("No access for this scope yet");
            return htmlOut;
            // TODO go back and get the correct glossary
        }
        return htmlOut;
    }
}

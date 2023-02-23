import { Logger } from "tslog";
export class MarkdownConverter {
    log = new Logger();
    constructor() { }
    getType() {
        return "Markdown";
    }
    convert(glossary, properties) {
        // trait (optional)
        // trait identifies a particular kind of descriptive text that is associated with the knowledge artifact. If specified, it must be one of the elements in the list of headingid's as specified in the headingids field of the MRG entry. If omitted, the preceding #-character should also be omitted
        var markdownOut = "";
        if (properties.get("scopetag") == "default") {
            if (properties.get("vsntag") == "latest") {
                var term = glossary.get(properties.get("term"));
                if (properties.get("trait") != "default") {
                    markdownOut = `[${properties.get("showtext")}](${term}#${properties.get("trait")})`;
                }
                else {
                    markdownOut = `[${properties.get("showtext")}](${term})`;
                }
                this.log.info("The converted markdown term is: " + markdownOut);
            }
            else {
                this.log.error("No access for this version yet");
                return markdownOut;
                // TODO go back and get the correct glossary   
            }
        }
        else {
            this.log.error("No access for this scope yet");
            return markdownOut;
            // TODO go back and get the correct glossary
        }
        return markdownOut;
    }
}

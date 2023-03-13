import { Logger } from "tslog";
import { Converter } from "./Converter.js";
import { GlossaryEntry } from './GlossaryEntry.js';
import { Glossary } from './Glossary.js';

export class HTTPConverter implements Converter {
      private log = new Logger();
      public constructor() { }
      getType(): string {
            return "HTTP";
      }

      convert(glossaries: Map<Glossary, GlossaryEntry[]>, properties: Map<string, string>): string {
            var htmlOut: string = "";
            var glossaryName: string = properties.get("scopetag")! + properties.get("vsntag");

            var term: string = glossaries.get(glossaryName).get(properties.get("term")!)!;
            if (properties.get("trait") != "default") {
                  htmlOut = `<a href="${term}#${properties.get("trait")}"><span style="font-weight:bold>${properties.get("showtext")}</span></a>`;
            } else {
                  htmlOut = `<a href="${term}"><span style="font-weight:bold>${properties.get("showtext")}</span></a>`;
            }
            this.log.info("The html term is: " + htmlOut);


            return htmlOut;
      }
}
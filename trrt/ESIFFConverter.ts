import { Logger } from "tslog";
import { Converter } from "./Converter.js";
import { GlossaryEntry } from './GlossaryEntry.js';
import { Glossary } from './Glossary.js';

export class ESSIFConverter implements Converter {
      private log = new Logger();
      
      public constructor() {}
      
      getType(): string {
            return "ESIFF";
      }

      convert(glossaries: Map<Glossary, GlossaryEntry[]>, properties: Map<string, string>): string {
            var esiffOut: string = "";
            if (properties.get("scopetag") == "default") {
                  if (properties.get("vsntag") == "latest") {
                        esiffOut = `<Term popup="todo" reference="${properties.get("term")}">${properties.get("showtext")}</Term>`;
                        this.log.info("The esiff term is: " + esiffOut)
                  } else {
                        this.log.error("No access for this version yet");
                        return esiffOut;
                        // TODO go back and get the correct glossary   
                  }
            } else {
                  this.log.error("No access for this scope yet");
                  return esiffOut;
                  // TODO go back and get the correct glossary
            }
            return esiffOut;
      }

}
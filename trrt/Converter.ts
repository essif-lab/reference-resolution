import { GlossaryEntry } from './GlossaryEntry.js';
import { Glossary } from './Glossary.js';

export interface Converter {
      convert(glossaries: Map<Glossary, GlossaryEntry[]>, properties: Map<string, string>): string;
      getType() : string;
}
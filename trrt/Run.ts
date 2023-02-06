#!/usr/bin/env node

import { Resolver } from './Resolver';
import { Logger } from "tslog";
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const Command = require('commander');
const program = new Command();

// const directoryPath: string = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\tests\\";
// const outputPath: string = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\tests_converted\\";
// const safPath = "C:\\Users\\degachic\\Documents\\workspace\\trrt\\framework-trrt\\docs\\tev2\\saf.yaml";

clear();

console.log(
      chalk.red(
            figlet.textSync('trrt-cli', { horizontalLayout: 'full' })
      )
);

program
      .version('0.0.0')
      .description("A CLI for the Term Reference Resolution Toolkit")
      .option('-o, --output <path>', 'Path to output converted files to (required)')
      .option('-s, --saf <path>', 'Path to read SAF file from (required)')
      .option('-c, --config <path>', 'Path to configuration .yaml file')
      .option('-d, --directory <path>', 'Path to directory where input files are located')
      .option('-V, --defaultversion <vsn>', 'Default version to use when no version is set in term')
      .option('-I, --interpreter <type>', 'Set interpreter to Standard or Alt syntax')
      .option('-C, --converter <type>', 'Set converter to Markdown HTTP or ESIFF output')
      .parse(process.argv);

async function main(): Promise<void> {
      const log = new Logger();
      if (!program.output || !program.saf) {
            program.outputHelp();
      } else {
            let resolver: Resolver = new Resolver({ outputPath: program.output, scopePath: program.saf, directoryPath: program.directory, vsn: program.defaultversion, configPath: program.config, interpreterType: program.interpreter, converterType: program.converter });
            if (await resolver.resolve()) {
                  log.info("Resolution complete...");
            } else {
                  log.error("Failed to resolve terms, see logs....");
            }
      }

}

main();
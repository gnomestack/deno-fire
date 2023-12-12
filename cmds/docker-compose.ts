import { Command } from "../deps.cli.ts";


export const docker = new Command()
    .description("Fire docker commands");

const compose = new Command()
    .description("Fire docker-compose commands");
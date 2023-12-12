import { ResourceTask } from "../fire-tasks.ts";

export class DockerComposeUpTask extends ResourceTask {
    files: string[];
    envFiles: string[]; 
    args: string[];

    constructor() {
        super();
        this.uses = "docker-compose-up";

    }
}
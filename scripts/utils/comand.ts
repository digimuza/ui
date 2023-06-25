import { ROOT_FOLDER } from "./constants.ts";
import { log, logEnd } from "./log.ts";

export async function execute(description: string, cmd: string) {
  const [command, ...rest] = cmd.split(" ");

  log(description);
  const process = new Deno.Command(command, {
    cwd: ROOT_FOLDER,
    args: rest,
    stderr: "inherit",
    stdout: "inherit",
  }).spawn();

  const output = await process.output();
  if (output.code === 1) {
    log("Failed");
    Deno.exit(1);
  }
  logEnd();
}

import { cyan, red } from "https://deno.land/std@0.192.0/fmt/colors.ts";

export function log(message: string) {
	console.log(cyan(`${message} `.padEnd(80, " ")));
}
export function logError(message: string) {
	console.log(red(`${message} `.padEnd(80, " ")));
}

export function logEnd() {
	//   console.log(green("Done ".padEnd(80, " ")));
}

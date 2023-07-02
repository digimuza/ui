import * as path from "https://deno.land/std@0.188.0/path/mod.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
export const ROOT_FOLDER = path.resolve(__dirname, "../../");
export const SOURCE_FOLDER = path.resolve(ROOT_FOLDER, "./src");

export function root(...pathParts: string[]) {
	return path.resolve(ROOT_FOLDER, ...pathParts);
}

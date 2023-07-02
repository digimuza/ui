import { root } from "./constants.ts";

export interface PackageJSON {
	name: string;
	private?: boolean;
	version: string;
	type?: string;
	main?: string;
	types: string;
	dependencies: Record<string, string>;
	license: string;
	devDependencies?: Record<string, string>;
}

export async function getPackageJson(): Promise<PackageJSON> {
	const packageJson = await Deno.readTextFile(root("package.json"));
	return JSON.parse(packageJson) as PackageJSON;
}

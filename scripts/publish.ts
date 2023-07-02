import { buildProject } from "./utils/build.ts";
import { execute } from "./utils/comand.ts";
import { root } from "./utils/constants.ts";
import { getPackageJson } from "./utils/package-json.ts";

await execute("Bump version", "yarn version --patch");
await buildProject();

const packageJson = await getPackageJson();
await execute(
	"Publish",
	`yarn publish --new-version ${packageJson.version}`,
	root("dist"),
);

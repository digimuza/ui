import { execute } from "./comand.ts";
import { root } from "./constants.ts";
import { log, logEnd } from "./log.ts";

export async function buildProject() {
  await execute("Installing deps", "yarn");
  await execute("Removing dist folder", "rm -rf ./dist");
  await execute(
    "Building typescript",
    "yarn tsc --project ./tsconfig.build.json"
  );

  log("Copying package.json");

  const pkg = await Deno.readTextFile(root("./package.json"));
  const pkgJson = JSON.parse(pkg);
  delete pkgJson.scripts;
  delete pkgJson.devDependencies;
  delete pkgJson.private;
  delete pkgJson.jest;
  delete pkgJson["lint-staged"];
  delete pkgJson["husky"];
  delete pkgJson["prettier"];
  delete pkgJson["eslintConfig"];
  delete pkgJson["browserslist"];
  delete pkgJson["jest"];
  delete pkgJson["jest-transform-stub"];
  delete pkgJson["ts-jest"];
  delete pkgJson["ts-node"];
  delete pkgJson["tsconfig.jest.json"];
  console.log(pkgJson);
  await Deno.writeFile(
    root("./dist/package.json"),
    new TextEncoder().encode(JSON.stringify(pkgJson, null, 2))
  );
  log("Copying README.md");
  await Deno.copyFile(root("./README.md"), root("./dist/README.md"));
  log("Copying css");
  await Deno.copyFile(root("./src/index.css"), root("./dist/index.css"));
  log("Copying tailwind config");
  await Deno.copyFile(
    root("./tailwind.config.js"),
    root("./dist/tailwind.config.js")
  );
  logEnd();
}

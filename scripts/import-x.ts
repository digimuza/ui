import * as path from "https://deno.land/std@0.188.0/path/mod.ts";
const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
const sourceFolder = path.resolve(__dirname, "../src");

async function ad(dirPath: string) {
  const dirName = path.dirname(dirPath);
  if (dirName === "_internal") return;
  const dir = await Deno.readDir(dirPath);
  const files: string[] = [];
  for await (const file of dir) {
    if (file.isDirectory) {
      await ad(path.join(dirPath, file.name));
      continue;
    }
    const allowedExtensions = [".ts", ".tsx"].some((ext) =>
      file.name.endsWith(ext)
    );
    if (!allowedExtensions) continue;
    files.push(file.name);
  }
  if (files.length === 0) return;

  const exports = files
    .map((file) => {
      const fileName = file.replace(path.extname(file), "");
      if (fileName.endsWith(".stories")) return;
      if (fileName.endsWith(".test")) return;
      if (fileName.endsWith("index")) return;
      if (fileName.endsWith(".spec")) return;
      if (fileName.endsWith(".d")) return;
      return `export * from "./${file.replace(path.extname(file), "")}";`;
    })
    .filter((x): x is string => !!x);

  // Deno.writeTextFile(dirPath,);
  console.log(exports.join("\n"));
  console.log();
  console.log();
  console.log();
}

export async function denoFile() {
  await ad(sourceFolder);
}

denoFile();

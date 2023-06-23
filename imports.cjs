const fs = require("fs");
const path = require("path");

function generateIndexFiles(folder) {
  const dirPath = path.resolve(__dirname, "src", folder);
  const info = fs.lstatSync(f);
  if (!info.isDirectory()) return;
  const dir = fs.readdirSync(dirPath);
  dir
    .map((c) => {
      const f = path.resolve(dirPath, c);
      console.log(c);
      const info = fs.lstatSync(f);
      info.isDirectory();
      return {
        isDirectory: info.isDirectory(),
        path: f,
      };
    })
    .filter((c) => false)
    .filter((c) => c.isDirectory)
    .map((folder) => {
      const files = fs.readdirSync(folder.path);

      const onlyFiles = files
        .map((file) => path.resolve(folder.path, file))
        .filter((pa) => {
          const info = fs.lstatSync(pa);
          return !info.isDirectory();
        });

      return {
        ...folder,
        index: onlyFiles
          .filter((f) => {
            const cond = [
              ["index.ts"].includes(path.basename(f)),
              [".css"].includes(path.extname(f)),
            ];

            for (const c of cond) {
              if (c) return false;
            }
            return true;
          })
          .map((file) => {
            return `export * from "./${path
              .relative(path.dirname(file), file)
              .replace(path.extname(file), "")}";`;
          })
          .join("\n"),
      };
    })
    .map((result) => {
      fs.writeFileSync(
        path.resolve(result.path, "index.ts"),
        `${result.index}\n`
      );
    });
}

const dirPath = path.resolve(__dirname, "src");
const dir = fs.readdirSync(dirPath);

dir.map(generateIndexFiles);

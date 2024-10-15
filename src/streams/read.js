import fs from "node:fs";
import path from "node:path";

const read = async () => {
  const readStream = fs.createReadStream(
    path.join(import.meta.dirname, "files", "fileToRead.txt"),
    "utf8"
  );

  // readStream.pipe(process.stdout);

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk + "\n");
  });
};

await read();

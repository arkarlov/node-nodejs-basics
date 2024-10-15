import fs from "node:fs";
import path from "node:path";
import stream from "node:stream";
import zlib from "node:zlib";

const compress = async () => {
  const readStream = fs.createReadStream(
    path.join(import.meta.dirname, "files", "fileToCompress.txt"),
    { encoding: "utf8" }
  );
  const writeStream = fs.createWriteStream(
    path.join(import.meta.dirname, "files", "archive.gz")
  );
  const gzip = zlib.createGzip();

  stream.pipeline(readStream, gzip, writeStream, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();

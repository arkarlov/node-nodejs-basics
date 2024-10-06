import fs from "node:fs";
import path from "node:path";
import stream from "node:stream";
import zlib from "node:zlib";

const decompress = async () => {
  const readStream = fs.createReadStream(
    path.join(import.meta.dirname, "files", "archive.gz")
  );
  const writeStream = fs.createWriteStream(
    path.join(import.meta.dirname, "files", "fileToCompress_unzip.txt") // NOTE: It's supposed to use "fileToCompress.txt", but "fileToCompress_unzip.txt" is used to compare result.
  );
  const gunzip = zlib.createGunzip();

  stream.pipeline(readStream, gunzip, writeStream, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await decompress();

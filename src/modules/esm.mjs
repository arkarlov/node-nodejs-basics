import fs from "fs";
import http from "http";
import os from "os";
import path from "path";

import "./files/c.js";

const PORT = 3000;

export const httpServer = http.createServer((_, res) => {
  res.end("Request accepted");
});

const unknownObjectName = Math.random() > 0.5 ? "a.json" : "b.json";

export const unknownObject = fs.readFileSync(
  path.join(import.meta.dirname, "files", unknownObjectName),
  "utf-8"
);

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);

console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

console.log(unknownObject);

httpServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

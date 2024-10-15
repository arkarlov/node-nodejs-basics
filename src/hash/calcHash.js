import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");

  const readStream = fs.createReadStream(
    path.join(import.meta.dirname, "files", "fileToCalculateHashFor.txt")
  );

  readStream.on("readable", () => {
    const data = readStream.read();

    if (data) {
      hash.update(data);
    } else {
      console.log(hash.digest("hex"));
    }
  });
};

await calculateHash();

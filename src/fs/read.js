import fs from "node:fs/promises";
import path from "node:path";

const read = async () => {
  const filePath = path.join(import.meta.dirname, "files", "fileToRead.txt");

  try {
    const data = await fs.readFile(filePath, { encoding: "utf8" });
    console.log(data);
  } catch (error) {
    // console.error(error);
    throw new Error("FS operation failed");
  }
};

await read();

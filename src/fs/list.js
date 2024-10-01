import fs from "node:fs/promises";
import path from "node:path";

const list = async () => {
  const folderPath = path.join(import.meta.dirname, "files0");

  try {
    const list = await fs.readdir(folderPath);
    console.log(list);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();

import fs from "node:fs/promises";
import path from "node:path";

const rename = async () => {
  const oldPath = path.join(import.meta.dirname, "files", "wrongFilename.txt");
  const newPath = path.join(import.meta.dirname, "files", "properFilename.md");

  try {
    await fs.rename(oldPath, newPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();

import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  const srcPath = path.join(import.meta.dirname, "files");
  const destPath = path.join(import.meta.dirname, "files_copy");

  try {
    await fs.cp(srcPath, destPath, {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();

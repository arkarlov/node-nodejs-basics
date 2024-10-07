import fs from "node:fs";
import path from "node:path";

const write = async () => {
  const writeStream = fs.createWriteStream(
    path.join(import.meta.dirname, "files", "fileToWrite.txt")
  );

  //   process.stdin.pipe(writeStream);

  process.stdout.write("Enter content (enter 'q' to exit):\n");
  process.stdout.write(" > ");

  process.stdin.on("data", (data) => {
    if (data && data == "q\n") {
      process.exit();
    } else {
      writeStream.write(data);
      process.stdout.write(" > ");
    }
  });
  process.stdin.setEncoding("utf8");
};

await write();

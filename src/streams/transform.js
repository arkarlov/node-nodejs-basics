import { Transform } from "node:stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();

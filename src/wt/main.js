import os from "node:os";
import path from "node:path";
import { Worker } from "node:worker_threads";

const CALCULATION_BASE = 10;

const performCalculations = async () => {
  const cpuIndexes = os.cpus().map((_, index) => index);

  const results = await Promise.all(
    cpuIndexes.map(
      (index) =>
        new Promise((resolve) => {
          const worker = new Worker(
            path.join(import.meta.dirname, "worker.js")
          );
          worker.postMessage(CALCULATION_BASE + index);

          worker.once("message", (message) => {
            resolve(message);
          });
        })
    )
  );

  console.log(results);
};

await performCalculations();

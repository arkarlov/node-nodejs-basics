import { parentPort } from "node:worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// This function sends result of nthFibonacci computations to main thread
const sendResult = () => {
  parentPort.once("message", (message) => {
    try {
      if (typeof message !== "number" || message < 0)
        throw new Error("Worker's message must be a positive number");

      const result = nthFibonacci(message);
      parentPort.postMessage({ status: "resolved", data: result });
    } catch (error) {
      parentPort.postMessage({ status: "error", data: null });
    }
  });
};

sendResult();

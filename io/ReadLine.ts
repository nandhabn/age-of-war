import process from "process";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const readNextLine = (message: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      resolve(answer);
    });
  });
};

export const closeReadline = () => {
  rl.close();
}
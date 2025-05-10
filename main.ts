import { parseLineIntoPlatoon } from "./io/ParseLine";
import { closeReadline, readNextLine } from "./io/ReadLine";
import { serialize } from "./io/Serialize";
import { getCombination, getWinningCombinations } from "./utils";

const main = async () => {
  const line = await readNextLine("Enter the first player platoon: ");
  const player1 = parseLineIntoPlatoon(line);

  const line2 = await readNextLine("Enter the second player platoon: ");
  const player2 = parseLineIntoPlatoon(line2);

  const battles: Array<Array<number>> = getCombination(player1, player2);
  const winningCombinations = getWinningCombinations(battles, player1);
  if (winningCombinations.length === 0) {
    console.error("There is no chance of winning");
    return;
  }
  const serialized = serialize(winningCombinations);
  console.log("Winning combinations:");
  console.log(serialized);
};

main()
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("\n\nExecution finished.");
    closeReadline();
  });

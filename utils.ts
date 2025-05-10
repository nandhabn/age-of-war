import { BasePlatoon } from "./platoon/BasePlatoon";

export const getCombination = (
  player1: BasePlatoon[],
  player2: BasePlatoon[]
) => {
  const battles: number[][] = [];
  for (let i = 0; i < player1.length; i++) {
    for (let j = 0; j < player2.length; j++) {
      const platoon1 = player1[i];
      const platoon2 = player2[j];
      battles[i] = battles[i] || [];
      battles[i][j] = battles[i][j] || 0;
      if (platoon1.attack(platoon2)) {
        battles[i][j] = 1;
      }
    }
  }
  return battles;
};

const getPermutation = (n: number, r: number): number[][] => {
  const result: number[][] = [];
  const used: boolean[] = Array(n).fill(false);
  const current: number[] = [];
  const backtrack = (depth: number) => {
    if (depth === r) {
      result.push([...current]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!used[i]) {
        used[i] = true;
        current.push(i);
        backtrack(depth + 1);
        current.pop();
        used[i] = false;
      }
    }
  };
  backtrack(0);
  return result;
};

export const getWinningCombinations = (
  battles: number[][],
  player1: BasePlatoon[]
): BasePlatoon[] => {
  const n = battles.length;
  const r = battles[0].length;
  const permutations = getPermutation(n, r);

  for (const perm of permutations) {
    let totalWinnings = 0;
    for (let i = 0; i < n; i++) {
      if (battles[i][perm[i]] === 1) {
        totalWinnings++;
      }
    }

    if (totalWinnings >= 3) {
      const res: BasePlatoon[] = [];
      for (let i = 0; i < n; i++) {
        res.push(player1[perm[i]]);
      }
      return res;
    }
  }
  return [];
};

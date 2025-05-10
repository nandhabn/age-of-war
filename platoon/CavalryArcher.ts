import { BasePlatoon, Platoons } from "./BasePlatoon";

export class CavalryArcher extends BasePlatoon {
  constructor(size: number, name: Platoons) {
    super(size, name);
  }
  hasAdvantage(over: BasePlatoon): boolean {
    return [Platoons.Spearmen, Platoons.HeavyCavalry].includes(over.name);
  }
}

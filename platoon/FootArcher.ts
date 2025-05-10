import { BasePlatoon, Platoons } from "./BasePlatoon";

export class FootArcher extends BasePlatoon {
  constructor(size: number, name: Platoons) {
    super(size, name);
  }
  hasAdvantage(over: BasePlatoon): boolean {
    return [Platoons.Militia, Platoons.CavalryArcher].includes(over.name);
  }
}
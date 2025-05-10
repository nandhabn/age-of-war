import { BasePlatoon, Platoons } from "./BasePlatoon";

export class Militia extends BasePlatoon {
  constructor(size: number, name: Platoons) {
    super(size, name);
  }
  hasAdvantage(over: BasePlatoon): boolean {
    return [Platoons.Spearmen, Platoons.LightCavalry].includes(over.name);
  }
}

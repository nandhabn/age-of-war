import { BasePlatoon, Platoons } from "./BasePlatoon";

export class Spearmen extends BasePlatoon {
  constructor(size: number, name: Platoons) {
    super(size, name);
  }
  hasAdvantage(over: BasePlatoon): boolean {
    return [Platoons.LightCavalry, Platoons.HeavyCavalry].includes(over.name);
  }
}

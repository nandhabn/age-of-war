import { BasePlatoon, Platoons } from "./BasePlatoon";

export class LightCavalry extends BasePlatoon {
  constructor(size: number, name: Platoons) {
    super(size, name);
  }
  hasAdvantage(over: BasePlatoon): boolean {
    return [Platoons.FootArcher, Platoons.CavalryArcher].includes(over.name);
  }
}

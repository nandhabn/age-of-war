import { BasePlatoon, Platoons } from "./BasePlatoon";

export class HeavyCavalry extends BasePlatoon {
  constructor(size: number, name: Platoons) {
    super(size, name);
  }
  hasAdvantage(over: BasePlatoon): boolean {
    return [
      Platoons.Militia,
      Platoons.FootArcher,
      Platoons.LightCavalry,
    ].includes(over.name);
  }
}

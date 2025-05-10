export abstract class BasePlatoon {
  constructor(public size: number, public name: Platoons) {}
  getSize(): number {
    return this.size;
  }
  setSize(size: number): void {
    this.size = size;
  }
  abstract hasAdvantage(over: BasePlatoon): boolean;

  canWin(strength: number, advantage: number): boolean {
    return this.size * advantage > strength;
  }

  attack(platoon: BasePlatoon) {
    if (this.hasAdvantage(platoon)) {
      return this.canWin(platoon.getSize(), 2);
    }
    return this.canWin(platoon.getSize(), 1);
  }
  toString(): string {
    return `${this.name}#${this.size}`;
  }
}

export enum Platoons {
  CavalryArcher = "CavalryArcher",
  Spearmen = "Spearmen",
  LightCavalry = "LightCavalry",
  FootArcher = "FootArcher",
  HeavyCavalry = "HeavyCavalry",
  Militia = "Militia",
}

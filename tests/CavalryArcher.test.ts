import { CavalryArcher } from "../platoon/CavalryArcher";
import { BasePlatoon, Platoons } from "../platoon/BasePlatoon";
import { Spearmen } from "../platoon/Spearmen";
import { HeavyCavalry } from "../platoon/HeavyCavalry";
import { FootArcher } from "../platoon/FootArcher";

describe("CavalryArcher", () => {
  it("should create a CavalryArcher instance with correct properties", () => {
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    expect(cavalryArcher.size).toBe(10);
    expect(cavalryArcher.name).toBe(Platoons.CavalryArcher);
  });

  it("should return true for hasAdvantage when facing Spearmen", () => {
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    const spearmen = new Spearmen(10, Platoons.Spearmen);
    expect(cavalryArcher.hasAdvantage(spearmen)).toBe(true);
  });

  it("should return true for hasAdvantage when facing HeavyCavalry", () => {
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    expect(cavalryArcher.hasAdvantage(heavyCavalry)).toBe(true);
  });

  it("should return false for hasAdvantage when facing other platoons", () => {
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    const footArcher = new FootArcher(10, Platoons.FootArcher);

    expect(cavalryArcher.hasAdvantage(footArcher)).toBe(false);
  });

  it("should return the correct string representation", () => {
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    expect(cavalryArcher.toString()).toBe("CavalryArcher#10");
  });

  it("should attack and win against Spearmen", () => {
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    const spearmen = new Spearmen(5, Platoons.Spearmen);
    expect(cavalryArcher.attack(spearmen)).toBe(true);
  });

  it("should attack and win against HeavyCavalry", () => {
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    const heavyCavalry = new HeavyCavalry(5, Platoons.HeavyCavalry);
    expect(cavalryArcher.attack(heavyCavalry)).toBe(true);
  });

  it("should attack and lose against a stronger Spearmen", () => {
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    const spearmen = new Spearmen(20, Platoons.Spearmen);
    expect(cavalryArcher.attack(spearmen)).toBe(false);
  });

  it("should attack and lose against a stronger HeavyCavalry", () => {
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    const heavyCavalry = new HeavyCavalry(20, Platoons.HeavyCavalry);
    expect(cavalryArcher.attack(heavyCavalry)).toBe(false);
  });
});

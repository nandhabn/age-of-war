import { LightCavalry } from "../platoon/LightCavalry";
import { BasePlatoon, Platoons } from "../platoon/BasePlatoon";
import { FootArcher } from "../platoon/FootArcher";
import { CavalryArcher } from "../platoon/CavalryArcher";
import { HeavyCavalry } from "../platoon/HeavyCavalry";
import { Spearmen } from "../platoon/Spearmen";

describe("LightCavalry", () => {
  it("should create an instance with the correct size and name", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    expect(lightCavalry.size).toBe(10);
    expect(lightCavalry.name).toBe(Platoons.LightCavalry);
  });

  it("should have an advantage over FootArcher", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    expect(lightCavalry.hasAdvantage(footArcher)).toBe(true);
  });

  it("should have an advantage over CavalryArcher", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    expect(lightCavalry.hasAdvantage(cavalryArcher)).toBe(true);
  });

  it("should not have an advantage over another LightCavalry", () => {
    const lightCavalry1 = new LightCavalry(10, Platoons.LightCavalry);
    const lightCavalry2 = new LightCavalry(10, Platoons.LightCavalry);
    expect(lightCavalry1.hasAdvantage(lightCavalry2)).toBe(false);
  });

  it("should not have an advantage over HeavyCavalry", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    expect(lightCavalry.hasAdvantage(heavyCavalry)).toBe(false);
  });

  it("should not have an advantage over Spearmen", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    const spearmen = new Spearmen(10, Platoons.Spearmen);
    expect(lightCavalry.hasAdvantage(spearmen)).toBe(false);
  });

  it("should return the correct string representation", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    expect(lightCavalry.toString()).toBe("LightCavalry#10");
  });

  it("should attack and win against FootArcher", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    const footArcher = new FootArcher(5, Platoons.FootArcher);
    expect(lightCavalry.attack(footArcher)).toBe(true);
  });

  it("should attack and win against CavalryArcher", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    const cavalryArcher = new CavalryArcher(5, Platoons.CavalryArcher);
    expect(lightCavalry.attack(cavalryArcher)).toBe(true);
  });

  it("should attack and lose against a stronger FootArcher", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    const footArcher = new FootArcher(20, Platoons.FootArcher);
    expect(lightCavalry.attack(footArcher)).toBe(false);
  });

  it("should attack and lose against a stronger CavalryArcher", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    const cavalryArcher = new CavalryArcher(20, Platoons.CavalryArcher);
    expect(lightCavalry.attack(cavalryArcher)).toBe(false);
  });

  it("should attack and lose against a stronger HeavyCavalry", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    const heavyCavalry = new HeavyCavalry(20, Platoons.HeavyCavalry);
    expect(lightCavalry.attack(heavyCavalry)).toBe(false);
  });

  it("should attack and lose against a stronger Spearmen", () => {
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    const spearmen = new Spearmen(20, Platoons.Spearmen);
    expect(lightCavalry.attack(spearmen)).toBe(false);
  });
});

import { Militia } from "../platoon/militia";
import { BasePlatoon, Platoons } from "../platoon/BasePlatoon";
import { Spearmen } from "../platoon/Spearmen";
import { LightCavalry } from "../platoon/LightCavalry";
import { CavalryArcher } from "../platoon/CavalryArcher";

describe("Militia", () => {
  it("should be instantiated with the correct size and name", () => {
    const militia = new Militia(10, Platoons.Militia);
    expect(militia.size).toBe(10);
    expect(militia.name).toBe(Platoons.Militia);
  });

  it("should have an advantage over Spearmen", () => {
    const militia = new Militia(10, Platoons.Militia);
    const spearmen = new Spearmen(10, Platoons.Spearmen);
    expect(militia.hasAdvantage(spearmen)).toBe(true);
  });

  it("should have an advantage over Light Cavalry", () => {
    const militia = new Militia(10, Platoons.Militia);
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    expect(militia.hasAdvantage(lightCavalry)).toBe(true);
  });

  it("should not have an advantage over another Militia", () => {
    const militia1 = new Militia(10, Platoons.Militia);
    const militia2 = new Militia(10, Platoons.Militia);
    expect(militia1.hasAdvantage(militia2)).toBe(false);
  });

  it("should not have an advantage over Cavalry Archer", () => {
    const militia = new Militia(10, Platoons.Militia);
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    expect(militia.hasAdvantage(cavalryArcher)).toBe(false);
  });

  it("should not have an advantage over Heavy Cavalry", () => {
    const militia = new Militia(10, Platoons.Militia);
    const heavyCavalry = new Spearmen(10, Platoons.HeavyCavalry);
    expect(militia.hasAdvantage(heavyCavalry)).toBe(false);
  });

  it("should return the correct string representation", () => {
    const militia = new Militia(10, Platoons.Militia);
    expect(militia.toString()).toBe("Militia#10");
  });

  it("should attack and win against Spearmen", () => {
    const militia = new Militia(10, Platoons.Militia);
    const spearmen = new Spearmen(5, Platoons.Spearmen);
    expect(militia.attack(spearmen)).toBe(true);
  });

  it("should attack and win against Light Cavalry", () => {
    const militia = new Militia(10, Platoons.Militia);
    const lightCavalry = new LightCavalry(5, Platoons.LightCavalry);
    expect(militia.attack(lightCavalry)).toBe(true);
  });

  it("should attack and lose against a stronger Spearmen", () => {
    const militia = new Militia(10, Platoons.Militia);
    const spearmen = new Spearmen(20, Platoons.Spearmen);
    expect(militia.attack(spearmen)).toBe(false);
  });

  it("should attack and lose against a stronger Light Cavalry", () => {
    const militia = new Militia(10, Platoons.Militia);
    const lightCavalry = new LightCavalry(20, Platoons.LightCavalry);
    expect(militia.attack(lightCavalry)).toBe(false);
  });

  it("should attack and lose against Cavalry Archer", () => {
    const militia = new Militia(10, Platoons.Militia);
    const cavalryArcher = new CavalryArcher(20, Platoons.CavalryArcher);
    expect(militia.attack(cavalryArcher)).toBe(false);
  });

  it("should attack and lose against Heavy Cavalry", () => {
    const militia = new Militia(10, Platoons.Militia);
    const heavyCavalry = new Spearmen(20, Platoons.HeavyCavalry);
    expect(militia.attack(heavyCavalry)).toBe(false);
  });
});

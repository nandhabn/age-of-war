import { HeavyCavalry } from "../platoon/HeavyCavalry";
import { FootArcher } from "../platoon/FootArcher";
import { LightCavalry } from "../platoon/LightCavalry";
import { Platoons } from "../platoon/BasePlatoon";
import { Militia } from "../platoon/militia";

describe("HeavyCavalry", () => {
  it("should be instantiated with the correct size and name", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    expect(heavyCavalry.size).toBe(10);
    expect(heavyCavalry.name).toBe(Platoons.HeavyCavalry);
  });

  it("should have an advantage over Militia", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    const militia = new Militia(10, Platoons.Militia);
    expect(heavyCavalry.hasAdvantage(militia)).toBe(true);
  });

  it("should have an advantage over Foot Archer", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    expect(heavyCavalry.hasAdvantage(footArcher)).toBe(true);
  });

  it("should have an advantage over Light Cavalry", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    const lightCavalry = new LightCavalry(10, Platoons.LightCavalry);
    expect(heavyCavalry.hasAdvantage(lightCavalry)).toBe(true);
  });

  it("should not have an advantage over Heavy Cavalry", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    const anotherHeavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    expect(heavyCavalry.hasAdvantage(anotherHeavyCavalry)).toBe(false);
  });

  it("should not have an advantage over Cavalry Archer", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    const cavalryArcher = new HeavyCavalry(10, Platoons.CavalryArcher);
    expect(heavyCavalry.hasAdvantage(cavalryArcher)).toBe(false);
  });

  it("should not have an advantage over Spearmen", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    const spearmen = new HeavyCavalry(10, Platoons.Spearmen);
    expect(heavyCavalry.hasAdvantage(spearmen)).toBe(false);
  });

  it("should return the correct string representation", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    expect(heavyCavalry.toString()).toBe("HeavyCavalry#10");
  });

  it("should attack and win against Militia", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    const militia = new Militia(5, Platoons.Militia);
    expect(heavyCavalry.attack(militia)).toBe(true);
  });

  it("should attack and win against Foot Archer", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    const footArcher = new FootArcher(5, Platoons.FootArcher);
    expect(heavyCavalry.attack(footArcher)).toBe(true);
  });

  it("should attack and win against Light Cavalry", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    const lightCavalry = new LightCavalry(5, Platoons.LightCavalry);
    expect(heavyCavalry.attack(lightCavalry)).toBe(true);
  });

  it("should attack and lose against a stronger Militia", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    const militia = new Militia(20, Platoons.Militia);
    expect(heavyCavalry.attack(militia)).toBe(false);
  });

  it("should attack and lose against a stronger Foot Archer", () => {
    const heavyCavalry = new HeavyCavalry(10, Platoons.HeavyCavalry);
    const footArcher = new FootArcher(20, Platoons.FootArcher);
    expect(heavyCavalry.attack(footArcher)).toBe(false);
  });
});

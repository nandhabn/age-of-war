import { FootArcher } from "../platoon/FootArcher";
import { Platoons } from "../platoon/BasePlatoon";
import { Spearmen } from "../platoon/Spearmen";
import { CavalryArcher } from "../platoon/CavalryArcher";
import { Militia } from "../platoon/militia";

describe("FootArcher", () => {
  it("should have an advantage over Militia", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    const militia = new Militia(10, Platoons.Militia);
    expect(footArcher.hasAdvantage(militia)).toBe(true);
  });

  it("should have an advantage over CavalryArcher", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    expect(footArcher.hasAdvantage(cavalryArcher)).toBe(true);
  });

  it("should not have an advantage over Spearmen", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    const spearmen = new Spearmen(10, Platoons.Spearmen);
    expect(footArcher.hasAdvantage(spearmen)).toBe(false);
  });

  it("should not have an advantage over HeavyCavalry", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    const heavyCavalry = new Spearmen(10, Platoons.HeavyCavalry);
    expect(footArcher.hasAdvantage(heavyCavalry)).toBe(false);
  });

  it("should not have an advantage over LightCavalry", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    const lightCavalry = new Spearmen(10, Platoons.LightCavalry);
    expect(footArcher.hasAdvantage(lightCavalry)).toBe(false);
  });

  it("should not have an advantage over another FootArcher", () => {
    const footArcher1 = new FootArcher(10, Platoons.FootArcher);
    const footArcher2 = new FootArcher(100, Platoons.FootArcher);
    expect(footArcher1.hasAdvantage(footArcher2)).toBe(false);
  });

  it("should have a size of 10", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    expect(footArcher.getSize()).toBe(10);
  });

  it("should set size to 20", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    footArcher.setSize(20);
    expect(footArcher.getSize()).toBe(20);
  });

  it("should return the correct string representation", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    expect(footArcher.toString()).toBe("FootArcher#10");
  });

  it("should attack and win against Militia", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    const militia = new Militia(10, Platoons.Militia);
    expect(footArcher.attack(militia)).toBe(true);
  });

  it("should attack and win against CavalryArcher", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    expect(footArcher.attack(cavalryArcher)).toBe(true);
  });

  it("should attack and lose against Spearmen", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    const spearmen = new Spearmen(10, Platoons.Spearmen);
    expect(footArcher.attack(spearmen)).toBe(false);
  });

  it("should attack and lose against HeavyCavalry", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    const heavyCavalry = new Spearmen(10, Platoons.HeavyCavalry);
    expect(footArcher.attack(heavyCavalry)).toBe(false);
  });

  it("should attack and lose against LightCavalry", () => {
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    const lightCavalry = new Spearmen(10, Platoons.LightCavalry);
    expect(footArcher.attack(lightCavalry)).toBe(false);
  });

  it("should attack and lose against another FootArcher", () => {
    const footArcher1 = new FootArcher(10, Platoons.FootArcher);
    const footArcher2 = new FootArcher(100, Platoons.FootArcher);
    expect(footArcher1.attack(footArcher2)).toBe(false);
  });
});

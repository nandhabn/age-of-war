import { Spearmen } from "../platoon/Spearmen";
import { BasePlatoon, Platoons } from "../platoon/BasePlatoon";
import { LightCavalry } from "../platoon/LightCavalry";
import { HeavyCavalry } from "../platoon/HeavyCavalry";
import { FootArcher } from "../platoon/FootArcher";
import { CavalryArcher } from "../platoon/CavalryArcher";
import { Militia } from "../platoon/militia";

describe("Spearmen", () => {
  it("should create a Spearmen instance with the correct size and name", () => {
    const spearmen = new Spearmen(10, Platoons.Spearmen);
    expect(spearmen.size).toBe(10);
    expect(spearmen.name).toBe(Platoons.Spearmen);
  });

  it("should have an advantage over LightCavalry", () => {
    const spearmen = new Spearmen(10, Platoons.Spearmen);
    const lightCavalry = new LightCavalry(5, Platoons.LightCavalry);
    expect(spearmen.hasAdvantage(lightCavalry)).toBe(true);
  });

  it("should have an advantage over HeavyCavalry", () => {
    const spearmen = new Spearmen(10, Platoons.Spearmen);
    const heavyCavalry = new HeavyCavalry(5, Platoons.HeavyCavalry);
    expect(spearmen.hasAdvantage(heavyCavalry)).toBe(true);
  });

  it("should not have an advantage over other platoons", () => {
    const spearmen = new Spearmen(10, Platoons.Spearmen);

    const anotherSpearmen = new Spearmen(10, Platoons.Spearmen);
    const footArcher = new FootArcher(10, Platoons.FootArcher);
    const cavalryArcher = new CavalryArcher(10, Platoons.CavalryArcher);
    const militia = new Militia(10, Platoons.Militia);

    expect(spearmen.hasAdvantage(anotherSpearmen)).toBe(false);
    expect(spearmen.hasAdvantage(footArcher)).toBe(false);
    expect(spearmen.hasAdvantage(cavalryArcher)).toBe(false);
    expect(spearmen.hasAdvantage(militia)).toBe(false);
  });
});

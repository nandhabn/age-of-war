import { BasePlatoon, Platoons } from "../platoon/BasePlatoon";
import { CavalryArcher } from "../platoon/CavalryArcher";
import { FootArcher } from "../platoon/FootArcher";
import { HeavyCavalry } from "../platoon/HeavyCavalry";
import { LightCavalry } from "../platoon/LightCavalry";
import { Militia } from "../platoon/militia";
import { Spearmen } from "../platoon/Spearmen";

const platoonClassMap = {
  Spearmen: Spearmen,
  CavalryArcher: CavalryArcher,
  LightCavalry: LightCavalry,
  HeavyCavalry: HeavyCavalry,
  FootArcher: FootArcher,
  Militia: Militia,
};

export function parseLineIntoPlatoon(input: string): BasePlatoon[] {
  return input.split(";").map((unit) => {
    const [name, count] = unit.split("#");
    const unitName = name.trim() as Platoons;
    return new platoonClassMap[unitName](Number(count.trim()), unitName);
  });
}

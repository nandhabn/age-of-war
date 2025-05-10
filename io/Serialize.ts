import { BasePlatoon } from "../platoon/BasePlatoon";

export const serialize = (platoons: BasePlatoon[]): string => {
  return platoons.map((platoons) => platoons.toString()).join(";");
};

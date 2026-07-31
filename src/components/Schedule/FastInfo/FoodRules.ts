import type { IconType } from "react-icons";
import type { FoodRule } from "@/lib/calendar/types";

import {
  TbSalad,
  TbSoup,
  TbSoupFilled,
  TbFish,
  TbGlassFull,
  TbFilters,
  TbChefHatOff,
  TbMeatOff,
} from "react-icons/tb";

export type FoodRuleConfig = {
  label: string;
  icon: IconType;
};

export const FOOD_RULES: Record<FoodRule, FoodRuleConfig> = {
  "dry-food": {
    label: "Холодна їжа без олії, холодні напої",
    icon: TbSalad,
  },

  "hot-no-oil": {
    label: "Гаряча їжа без олії",
    icon: TbSoup,
  },

  "hot-with-oil": {
    label: "Гаряча їжа з рослинною олією",
    icon: TbSoupFilled,
  },

  "allow-fish": {
    label: "Дозволяється риба",
    icon: TbFish,
  },

  "allow-wine": {
    label: "Дозволяється вино",
    icon: TbGlassFull,
  },

  "allow-caviar": {
    label: "Дозволяється ікра",
    icon: TbFilters,
  },

  "no-food": {
    label: "Повне утримання від їжі",
    icon: TbChefHatOff,
  },

  meatless: {
    label: "Їжа без м'яса",
    icon: TbMeatOff,
  },
};

export const FAST_LEVELS = {
  strict: "Строгий піст",
  "non-strict": "Піст",
} as const;

// "TbBoneOff", "TbCarrot",  "TbFiltersTbEgg", "TbHourglass", "TbMeatOff", "TbLeaf", "TbSoupOff", "TbToolsKitchen2Off",

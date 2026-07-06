import { FOOD_RULES } from "./FoodRules";
import type { Fast } from "@/lib/calendar/types";

import styles from "./FastInfo.module.css";

type Props = {
  fast: Fast;
  withLabels?: boolean;
};
export default function FastIcons({ fast, withLabels = false }: Props) {
  return (
    <div className={withLabels ? styles.iconList : styles.icons}>
      {fast.food.map((rule) => {
        const ruleData = FOOD_RULES[rule];
        const Icon = ruleData.icon;

        return (
          <div key={rule} className={withLabels ? styles.iconRow : styles.icon}>
            <Icon size={20} />
            {withLabels && <span>{ruleData.label}</span>}
          </div>
        );
      })}
    </div>
  );
}

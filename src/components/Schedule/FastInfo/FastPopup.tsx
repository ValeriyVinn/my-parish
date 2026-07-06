import type { Fast } from "@/lib/calendar/types";

import FastIcons from "./FastIcons";
import { FAST_LEVELS } from "./FoodRules";

import styles from "./FastInfo.module.css";

type Props = {
  fast: Fast;
};

export default function FastPopup({ fast }: Props) {
  return (
    <div className={styles.popup}>
      <h4 className={styles.popupTitle}>
        {FAST_LEVELS[fast.level]}
      </h4>

      <FastIcons fast={fast} withLabels />
    </div>
  );
}
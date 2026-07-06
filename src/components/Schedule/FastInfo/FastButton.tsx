import type { Fast } from "@/lib/calendar/types";

import FastIcons from "./FastIcons";

import styles from "./FastInfo.module.css";

type Props = {
  fast: Fast;
  onClick: () => void;
};

export default function FastButton({ fast, onClick }: Props) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
    >
      <FastIcons fast={fast} />
    </button>
  );
}
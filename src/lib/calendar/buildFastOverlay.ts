import { DayViewModel } from "@/types/schedulenew";
import { FastPeriod } from "./types";
import { belongsToFastPeriod } from "./belongsToFastPeriod";

export type FastOverlay = {
  fast: FastPeriod;
  startIndex: number;
  endIndex: number;
  top: number;
  height: number;
};

export function buildFastOverlay(
  days: DayViewModel[],
  fasts: FastPeriod[],
): FastOverlay[] {
  const result: FastOverlay[] = [];

  for (const fast of fasts) {
    let startIndex = -1;
    let endIndex = -1;

    days.forEach((day, index) => {
      if (belongsToFastPeriod(day.date, fast)) {
        if (startIndex === -1) {
          startIndex = index;
        }

        endIndex = index;
      }
    });

    if (startIndex !== -1) {
      result.push({
        fast,
        startIndex,
        endIndex,
        top: 0,
        height: 0,
      });
    }
  }

  return result;
}

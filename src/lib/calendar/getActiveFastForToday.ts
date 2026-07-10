import { FastPeriod } from "./types";
import { belongsToFastPeriod } from "./belongsToFastPeriod";

export function getActiveFastForToday(
  fasts: FastPeriod[],
): FastPeriod | null {
  const today = new Date();

  const currentDate = {
    month: today.getMonth() + 1,
    day: today.getDate(),
  };

  return (
    fasts.find((fast) => belongsToFastPeriod(currentDate, fast)) ?? null
  );
}
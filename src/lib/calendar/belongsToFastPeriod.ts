import { MonthDay } from "@/types/schedulenew";
import { FastPeriod } from "./types";

function toMonthDayNumber(month: number, day: number): number {
  return month * 100 + day;
}

export function belongsToFastPeriod(
   date: MonthDay,
  fast: FastPeriod,
): boolean {
  const current = toMonthDayNumber(date.month, date.day);
  const start = toMonthDayNumber(fast.start.month, fast.start.day);
  const end = toMonthDayNumber(fast.end.month, fast.end.day);

  // звичайний випадок (08.06 – 28.06)
  if (start <= end) {
    return current >= start && current <= end;
  }

  // якщо колись з'явиться період, що переходить через Новий рік
  // (наприклад 28.12 – 07.01)
  return current >= start || current <= end;
}
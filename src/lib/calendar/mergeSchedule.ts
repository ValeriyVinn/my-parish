// import { DayViewModel } from "@/types/schedulenew";

// import { createEmptyMonth } from "./createEmptyMonth";
// import { applyChurchCalendar } from "./applyChurchCalendar";
// import { applySchedule } from "./applySchedule";

// export function mergeSchedule(
//   schedule: any,
//   calendar: any,
//   year: number,
//   month: number
// ): DayViewModel[] {
//   // 1. базовий каркас місяця
//   const days = createEmptyMonth(year, month);

//   // 2. накладаємо церковний календар (інформаційний шар)
//   applyChurchCalendar(days, calendar);

//   // 3. накладаємо парафіяльний розклад (головний UI шар)
//   applySchedule(days, schedule);

//   // 4. фінальна стабілізація
//   return finalizeMonth(days);
// }

// function finalizeMonth(days: DayViewModel[]): DayViewModel[] {
//   return days.sort((a, b) => a.date.day - b.date.day);
// }

import { DayViewModel } from "@/types/schedulenew";
import { ScheduleModel, ChurchCalendarModel } from "./types";

import { createEmptyMonth } from "./createEmptyMonth";
import { applyChurchCalendar } from "./applyChurchCalendar";
import { applySchedule } from "./applySchedule";

export function mergeSchedule(
  schedule: ScheduleModel[],
  calendar: ChurchCalendarModel,
  year: number,
  month: number
): DayViewModel[] {
  const days = createEmptyMonth(year, month);

  applyChurchCalendar(days, calendar);

  applySchedule(days, schedule);

  return days;
}
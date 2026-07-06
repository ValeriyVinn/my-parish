
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
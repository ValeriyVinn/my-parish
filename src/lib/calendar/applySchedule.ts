import { DayViewModel, TitleNode } from "@/types/schedulenew";
import { ScheduleModel } from "./types";

export function applySchedule(
  days: DayViewModel[],
  schedule: ScheduleModel[]
) {
  for (const item of schedule) {
    const { month, day } = item.date;

    const targetDay = days.find(
      (d) => d.date.month === month && d.date.day === day
    );

    if (!targetDay) continue;

    targetDay.headline = item.headline as TitleNode[];
    targetDay.services = item.services;
    targetDay.isInMainSchedule = true;
  }
}
// import { DayViewModel, TitleNode } from "@/types/schedulenew";

// export function applySchedule(
//   days: DayViewModel[],
//   schedule: any
// ) {
//   for (const item of schedule) {
//     const { month, day } = item.date;

//     const targetDay = days.find(
//       (d) => d.date.day === day && d.date.month === month
//     );

//     if (!targetDay) continue;

//     // 1. headline
//     targetDay.headline = item.headline as TitleNode[];

//     // 2. services
//     targetDay.services = item.services ?? [];

//     // 3. mark as main schedule day
//     targetDay.isInMainSchedule = true;
//   }
// }

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
// import { DayViewModel } from "@/types/schedulenew";

// export function applyChurchCalendar(
//   days: DayViewModel[],
//   calendar: any
// ) {
//   for (const entry of calendar.days) {
//     const { month, day } = entry.date;

//     const targetDay = days.find(
//       (d) => d.date.day === day && d.date.month === month
//     );

//     if (!targetDay) continue;

//     // 🟡 holidays
//     if (entry.holidays) {
//       targetDay.calendar.holidays.push(...entry.holidays);
//     }

//     // 🟡 saints
//     if (entry.saints) {
//       targetDay.calendar.saints.push(...entry.saints);
//     }

//     // 🟡 memorials
//     if (entry.memorials) {
//       targetDay.calendar.memorials.push(...entry.memorials);
//     }

//     // 🟡 readings
//     if (entry.readings) {
//       targetDay.calendar.readings.push(...entry.readings);
//     }

//     // 🟡 fast (важливо: стан, не список)
//     if (entry.fast) {
//       targetDay.calendar.fast = entry.fast;
//     }
//   }
// }

import { DayViewModel } from "@/types/schedulenew";
import { ChurchCalendarModel } from "./types";

export function applyChurchCalendar(
  days: DayViewModel[],
  calendar: ChurchCalendarModel
) {
  for (const entry of calendar.days) {
    const { month, day } = entry.date;

    const targetDay = days.find(
      (d) => d.date.month === month && d.date.day === day
    );

    if (!targetDay) continue;

    if (entry.holidays) {
      targetDay.calendar.holidays.push(...entry.holidays);
    }

    if (entry.saints) {
      targetDay.calendar.saints.push(...entry.saints);
    }

    if (entry.memorials) {
      targetDay.calendar.memorials.push(...entry.memorials);
    }

    if (entry.fast) {
      targetDay.calendar.fast = entry.fast;
    }

    if (entry.readings) {
      targetDay.calendar.readings.push(...entry.readings);
    }
  }
}
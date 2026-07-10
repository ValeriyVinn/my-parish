
// import { DayViewModel } from "@/types/schedulenew";
// import { ChurchCalendarModel } from "./types";

// export function applyChurchCalendar(
//   days: DayViewModel[],
//   calendar: ChurchCalendarModel
// ) {
//   for (const entry of calendar.days) {
//     const { month, day } = entry.date;

//     const targetDay = days.find(
//       (d) => d.date.month === month && d.date.day === day
//     );

//     if (!targetDay) continue;

//     if (entry.holidays) {
//       targetDay.calendar.holidays.push(...entry.holidays);
//     }

//     if (entry.saints) {
//       targetDay.calendar.saints.push(...entry.saints);
//     }

//     if (entry.memorials) {
//       targetDay.calendar.memorials.push(...entry.memorials);
//     }

//     if (entry.fast) {
//       targetDay.calendar.fast = entry.fast;
//     }

//     if (entry.readings) {
//       targetDay.calendar.readings.push(...entry.readings);
//     }
//   }
// }


// import { DayViewModel } from "@/types/schedulenew";
// import { ChurchCalendarModel } from "./types";
// import { belongsToFastPeriod } from "./belongsToFastPeriod";

// export function applyChurchCalendar(
//   days: DayViewModel[],
//   calendar: ChurchCalendarModel,
// ) {
//   for (const fast of calendar.fasts) {
//     for (const day of days) {
//       if (belongsToFastPeriod(day.date, fast)) {
//         day.calendar.fastPeriod = fast;
//       }
//     }
//   }
// }

import { DayViewModel } from "@/types/schedulenew";
import { ChurchCalendarModel } from "./types";
import { belongsToFastPeriod } from "./belongsToFastPeriod";

export function applyChurchCalendar(
  days: DayViewModel[],
  calendar: ChurchCalendarModel
) {
  // Заповнюємо інформацію про кожен день
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

  // Позначаємо багатоденні пости
  for (const fast of calendar.fasts) {
    for (const day of days) {
      if (belongsToFastPeriod(day.date, fast)) {
        day.calendar.fastPeriod = fast;
      }
    }
  }
}
import { DayViewModel } from "@/types/schedulenew";

export function createEmptyMonth(
  year: number,
  month: number
): DayViewModel[] {
  const daysInMonth = new Date(year, month, 0).getDate();

  const result: DayViewModel[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const dateObj = new Date(year, month - 1, day);

    const weekday = dateObj.toLocaleDateString("uk-UA", {
      weekday: "long",
    });

    result.push({
      date: {
        year,
        month,
        day,
        weekday, // 👈 додаємо
      },

      isInMainSchedule: false,

      headline: [],
      services: [],

      calendar: {
        holidays: [],
        saints: [],
        fast: null,
        memorials: [],
        readings: [],
        fastPeriod: null,
      },
    });
  }

  return result;
}
export type DateValue = {
  year: number;
  month: number;
  day: number;
};
export type TitleNode =
  | {
      type: "text";
      value: string;
    }
  | {
      type: "link";
      value: string;
      slug: string;
    };

export type Service = {
  time: string;
  name: string;
};
export type Reading = {
  title: string;
  content: string;
};
export type Fast = {
  active: boolean;
  type: "strict" | "non-strict";
  title: string;
  description?: string;
};
export type CalendarBlock = {
  holidays: string[];
  saints: string[];
  fast: Fast | null;
  memorials: string[];
  readings: Reading[];
};
export type DayViewModel = {
  date: {
    year: number;
    month: number;
    day: number;
    weekday: string; // 👈 нове
  };

  isInMainSchedule: boolean;

  headline: TitleNode[];

  services: Service[];

  calendar: CalendarBlock;
};

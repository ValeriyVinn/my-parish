import { DateValue, TitleNode } from "@/types/schedulenew";

export type FoodRule =
  | "dry-food"
  | "hot-no-oil"
  | "hot-with-oil"
  | "allow-fish"
  | "allow-wine"
  | "allow-caviar"
  | "no-food"
  | "meatless";

export type Fast = {
  level: "strict" | "non-strict";
  food: FoodRule[];
};

export type FastPeriod = {
  id: string;
  title: string;
  start: MonthDay;
  end: MonthDay;
  description?: string;
};

export type ChurchCalendarEntry = {
  date: {
    month: number;
    day: number;
  };

  holidays?: string[];
  saints?: string[];
  memorials?: string[];
  fast?: Fast | null;
  readings?: {
    title: string;
    content: string;
  }[];
};

export type MonthDay = {
  month: number;
  day: number;
};

export type ChurchCalendarModel = {
  days: ChurchCalendarEntry[];
  fasts: FastPeriod[];
};

export type ScheduleModel = {
  date: DateValue;
  headline: TitleNode[];
  services: {
    time: string;
    name: string;
  }[];
};
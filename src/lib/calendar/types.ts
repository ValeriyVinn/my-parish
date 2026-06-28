import { TitleNode } from "@/types/schedulenew";

export type ScheduleModel = {
  date: {
    year: number;
    month: number;
    day: number;
  };
  headline: TitleNode[];
  services: {
    time: string;
    name: string;
  }[];
};

export type ChurchCalendarEntry = {
  date: {
    year?: number;
    month: number;
    day: number;
  };
  holidays?: string[];
  saints?: string[];
  memorials?: string[];
  fast?: {
    active: boolean;
    type: "strict" | "non-strict";
    title: string;
    description?: string;
  };
  readings?: {
    title: string;
    content: string;
  }[];
};

export type ChurchCalendarModel = {
  days: ChurchCalendarEntry[];
};
export type EventLink = {
  name: string;
  slug: string;
};

export type Service = {
  time: string;
  name: string;
};

export type ScheduleItem = {
  date: string;
  day?: string;
  title: string;
  saints?: EventLink[];
  holidays?: EventLink[];
  services: Service[];
};

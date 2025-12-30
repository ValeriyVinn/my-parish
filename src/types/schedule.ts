export type Saint = {
  name: string;
  slug: string;
};

export type Service = {
  time: string;
  name: string;
};

export type ScheduleItem = {
  date: string;
  title: string;
  saints?: Saint[];
  services: Service[];
};

export interface Service {
  time: string;
  name: string;
}

export interface ScheduleItem {
  date: string;
  day?: string;
  title: string;
  services: Service[];
}

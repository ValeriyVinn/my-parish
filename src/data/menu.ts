export type SubLink = { title: string; href?: string; action?: "map" | "text" };

export type MenuItem = {
  title: string;
  href?: string;
  sub?: SubLink[];
  isText?: boolean;
};

export const menu: MenuItem[] = [
  { title: "Храм", href: "/" },
  {
    title: "Розклад",
    href: "/shedule",
    sub: [
      
      { title: "Таїнства", href: "/shedule/sacraments" },
      { title: "Свята", href: "/shedule/holidays" },
      { title: "Седмиці", href: "/shedule/weeks" },
      { title: "Пости", href: "/shedule/fasts" },
      { title: "Поминальні дні", href: "/shedule/memorial" },
      { title: "Житія Святих", href: "/shedule/lives" },
      { title: "Наша Історія", href: "/shedule/events" },
    ],
  },
  { title: "Молитви", href: "/prayers" },
  { title: "Оголошення", href: "/advert" },
  { title: "Духовенство", href: "/clergy" },
  { title: "Ресурси", href: "/useful-links" },
  {
    title: "Контакти",
    // href: "/contacts",
    sub: [
      { title: "м.Вінниця, Хмельницьке шосе, 145", action: "text" },
      { title: "(097) 409 99 13", action: "text" },
      { title: "На мапі", action: "map" },
    ],
  },
];

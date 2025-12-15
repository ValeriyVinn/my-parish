export type SubLink = { title: string; href?: string; action?: "map" | "text" };

export type MenuItem = {
  title: string;
  href?: string;
  sub?: SubLink[];
  isText?: boolean;
};

export const menu: MenuItem[] = [
  {
    title: "Храм",
    // href: "/",
    sub: [
      { title: "Головна", href: "/" },
      { title: "Наша Історія", href: "/history" },
      { title: "Духовенство", href: "/clergy" },
    ],
  },
  { title: "Розклад", href: "/shedule" },
  {
    title: "Події",
    // href: "/shedule",
    sub: [
      { title: "Таїнства", href: "/events/sacraments" },
      { title: "Свята", href: "/events/holidays" },
      { title: "Седмиці", href: "/events/weeks" },
      { title: "Пости", href: "/events/fasts" },
      { title: "Поминальні дні", href: "/events/memorial" },
      { title: "Житія Святих", href: "/events/lives" },
    ],
  },
  { title: "Молитви", href: "/prayers" },
  { title: "Оголошення", href: "/advert" },

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

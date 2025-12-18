"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

const holidaysMenu = [
      {
    title: "Свята",
    href: "/events/holidays",
  },

  // Пасха
  {
    title: "Пасха",
    href: "/events/holidays/pascha",
  },

  // Двунадесяті свята (хронологічно)
  {
    title: "Різдво Христове",
    href: "/events/holidays/nativity",
  },
  {
    title: "Хрещення",
    href: "/events/holidays/theophany",
  },
  {
    title: "Стрітення",
    href: "/events/holidays/presentation",
  },
  {
    title: "Благовіщення",
    href: "/events/holidays/annunciation",
  },
  {
    title: "Вербна неділя",
    href: "/events/holidays/palm-sunday",
  },
  {
    title: "Вознесіння Господнє",
    href: "/events/holidays/ascension",
  },
  {
    title: "Трійця",
    href: "/events/holidays/pentecost",
  },
  {
    title: "Преображення Господнє",
    href: "/events/holidays/transfiguration",
  },
  {
    title: "Успіння Пресвятої Богородиці",
    href: "/events/holidays/dormition",
  },
  {
    title: "Різдво Пресвятої Богородиці",
    href: "/events/holidays/nativity-of-theotokos",
  },
  {
    title: "Воздвиження Хреста Господнього",
    href: "/events/holidays/exaltation-of-the-cross",
  },
  {
    title: "Введення в храм Пресвятої Богородиці",
    href: "/events/holidays/entrance-of-the-theotokos",
  },
];

export default function HolidaysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className={`${styles.container} container`}>
      <nav className={styles.menu}>
        {holidaysMenu.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.menuItem} ${
                isActive ? styles.active : ""
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      {children}
    </div>
  );
}

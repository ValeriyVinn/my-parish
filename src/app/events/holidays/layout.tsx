"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import styles from "./page.module.css";

const holidaysMenu = [
  { title: "Свята", href: "/events/holidays" },
  { title: "Великдень", href: "/events/holidays/pascha" },
  { title: "Різдво Христове", href: "/events/holidays/nativity" },
  { title: "Хрещення", href: "/events/holidays/theophany" },
  { title: "Стрітення", href: "/events/holidays/presentation" },
  { title: "Благовіщення", href: "/events/holidays/annunciation" },
  { title: "Вербна неділя", href: "/events/holidays/palm-sunday" },
  { title: "Вознесіння Господнє", href: "/events/holidays/ascension" },
  { title: "Трійця", href: "/events/holidays/pentecost" },
  { title: "Преображення Господнє", href: "/events/holidays/transfiguration" },
  { title: "Успіння Пресвятої Богородиці", href: "/events/holidays/dormition" },
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
  const [open, setOpen] = useState(false);

  const activeTitle = useMemo(() => {
    return (
      holidaysMenu.find((item) => item.href === pathname)?.title || "Свята"
    );
  }, [pathname]);

  return (
    <div className={`${styles.container} container`}>
      {/* Accordion button */}
      <button
        className={styles.accordionButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className={styles.accordionTitle}>{activeTitle}</span>
        <span className={styles.accordionAction}>
          {open ? "Закрити " : "Відкрити  "}
        </span>
      </button>

      {/* Accordion content */}

      <nav className={`${styles.menu} ${open ? styles.open : ""}`}>
        {holidaysMenu.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
              onClick={() => setOpen(false)}
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

"use client";

import { useEffect, useState } from "react";
import data from "../../data/calendar.json" assert { type: "json" };
import styles from "./page.module.css";
import type { CalendarItem } from "@/types/calendar";
const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
const calendarData = data as CalendarItem[];


function getWeekdayIndex(day: string): number {
  return daysOfWeek.indexOf(day);
}


function groupByWeeks(items: CalendarItem[]) {
  const weeks: (CalendarItem | null)[][] = [];
  let currentWeek = new Array(7).fill(null);

  items.forEach((item, index) => {
    const dayIndex = getWeekdayIndex(item.day);

    if (currentWeek[dayIndex] !== null) {
      weeks.push(currentWeek);
      currentWeek = new Array(7).fill(null);
    }

    currentWeek[dayIndex] = item;

    if (dayIndex === 6 || index === items.length - 1) {
      weeks.push(currentWeek);
      currentWeek = new Array(7).fill(null);
    }
  });

  return weeks;
}

// export const metadata = {
//   title: "Календар | Церковний сайт",
//   description: "Церковний календар — події, свята та читання на кожен день.",
// };

export default function CalendarPage() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<CalendarItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  // Виконується лише після першого рендеру
  requestAnimationFrame(() => {
    const now = new Date();
    const currentMonth = now.toLocaleString("uk-UA", { month: "long" });
    setSelectedMonth(currentMonth);
  });

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  handleResize();

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
    setActiveIndex(null);
    setActiveItem(null);
  };

  const toggle = (index: string, item: CalendarItem) => {

    const isSame = activeIndex === index;
    setActiveIndex(isSame ? null : index);
    setActiveItem(isSame ? null : item);
  };

  const filtered = calendarData.filter((item) => item.month === selectedMonth);
  const weeks = groupByWeeks(filtered);

  return (
    <section className={`${styles.section} container`}>
      <div className={styles.w}>
        <h1 className={styles.title}>Календар —</h1>
        <select
          onChange={handleSelectChange}
          value={selectedMonth}
          className={styles.select}
        >
          {[...new Set(calendarData.map((item) => item.month))].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* === МОБІЛЬНА ВЕРСІЯ === */}
      {isMobile ? (
        <div className={styles.mobileList}>
          {filtered.map((item, idx) => (
            <div key={idx} className={styles.mobileCard}>
              <button
                className={`${styles.btn} ${
                  activeIndex === `${idx}` ? styles.active : ""
                }`}
                onClick={() => toggle(`${idx}`, item)}
              >
                <span className={styles.date}>{item.date}</span>{" "}
                <span className={styles.day}>{item.day}</span> — {item.title}
              </button>
              {activeIndex === `${idx}` && (
                <div className={styles.articleRow}>
                  <p className={styles.article}>{item.article}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className={styles.weekHeader}>
            {daysOfWeek.map((d) => (
              <div key={d} className={styles.dayHeader}>
                {d}
              </div>
            ))}
          </div>

          {weeks.map((week, rowIndex) => {
            const isActiveInRow = activeIndex?.startsWith(`${rowIndex}-`);
            return (
              <div className={styles.weekRow} key={rowIndex}>
                {week.map((item, i) => (
                  <div key={i} className={styles.dayCell}>
                    {item ? (
                      <button
                        className={`${styles.btn} ${
                          activeIndex === `${rowIndex}-${i}` ? styles.active : ""
                        }`}
                        onClick={() => toggle(`${rowIndex}-${i}`, item)}
                      >
                        <span className={styles.date}>{item.date}</span>
                        <span className={styles.day}>{item.day}</span> —{" "}
                        {item.title}
                      </button>
                    ) : (
                      <div className={styles.empty}></div>
                    )}
                  </div>
                ))}

                {isActiveInRow && activeItem && (
                  <div className={styles.articleRowWide}>
                    <p className={styles.article}>{activeItem.article}</p>
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}
    </section>
  );
}

"use client";

import { useState } from "react";

import styles from "./page.module.css";
import FastInfo from "@/components/Schedule/FastInfo/FastInfo";
import { getActiveFastForToday } from "@/lib/calendar/getActiveFastForToday";
import scheduleData from "@/data/schedule/2026-06.json";
import calendarData from "@/data/church-calendar/2026.json";

import { mergeSchedule } from "@/lib/calendar/mergeSchedule";

import type { ScheduleModel, ChurchCalendarModel } from "@/lib/calendar/types";

const typedCalendar = calendarData as ChurchCalendarModel;

export default function SchedulePage() {
  const [showFullCalendar, setShowFullCalendar] = useState(false);

  const calendarForSchedule: ChurchCalendarModel = {
    days: typedCalendar.days.map((day) => ({
      date: day.date,
      fast: day.fast,
    })),
    fasts: typedCalendar.fasts,
  };

  const merged = mergeSchedule(
    scheduleData as ScheduleModel[],
    showFullCalendar ? typedCalendar : calendarForSchedule,
    2026,
    9,
  );

  const daysToRender = showFullCalendar
    ? merged
    : merged.filter((day) => day.isInMainSchedule);

  const currentFast = getActiveFastForToday(typedCalendar.fasts);

  return (
    <section className={`${styles.container} ${styles.wrapper}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Вересень</h1>

        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={showFullCalendar}
            onChange={() => setShowFullCalendar((v) => !v)}
          />
          <span>Весь місяць</span>
        </label>
      </div>

      <div className={styles.scheduleWrapper}>
        <div className={styles.schedule}>
          <div className={styles.scheduleHeader}>
            <div>Дата</div>
            <div>Подія</div>
          </div>

          <div className={styles.scheduleBody}>
            {daysToRender.map((day) => {
              return (
                <div
                  key={`${day.date.year}-${day.date.month}-${day.date.day}`}
                  className={styles.dayRow}
                >
                  {/* ===== DATE ===== */}

                  <div className={styles.dayDate}>
                    <div className={styles.dateContent}>
                      <div className={styles.date}>
                        {day.date.day}, {day.date.weekday}
                      </div>

                      <div className={styles.fast}>
                        <FastInfo fast={day.calendar.fast} />
                      </div>
                    </div>
                  </div>

                  {/* ===== CONTENT ===== */}

                  <div className={styles.dayContent}>
                    {day.headline.length > 0 && (
                      <div className={styles.dayTitle}>
                        {day.headline.map((node, i) =>
                          node.type === "text" ? (
                            <span key={i}>{node.value}</span>
                          ) : (
                            <a
                              key={i}
                              href={`/events/${node.slug}`}
                              className={styles.eventLink}
                            >
                              {node.value}
                            </a>
                          ),
                        )}
                      </div>
                    )}

                    {day.calendar.holidays.length > 0 && (
                      <div className={styles.holidaysBlock}>
                        {day.calendar.holidays.join("\n")}
                      </div>
                    )}

                    {day.calendar.saints.length > 0 && (
                      <div className={styles.saintsBlock}>
                        {day.calendar.saints.join("\n")}
                      </div>
                    )}

                    {day.services.length > 0 && (
                      <div className={styles.servicesList}>
                        {day.services.map((service, i) => (
                          <div key={i} className={styles.serviceRow}>
                            <span className={styles.time}>{service.time}</span>

                            <span className={styles.name}>{service.name}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {day.calendar.memorials.length > 0 && (
                      <div className={styles.memorialsBlock}>
                        {day.calendar.memorials.join(", ")}
                      </div>
                    )}

                    {day.calendar.readings.length > 0 && (
                      <details className={styles.readingsBlock}>
                        <summary className={styles.accordionButton}>
                          Читання дня
                        </summary>

                        {day.calendar.readings.map((r, i) => (
                          <div key={i} className={styles.readingsContent}>
                            <strong>{r.title}</strong>
                            <p>{r.content}</p>
                          </div>
                        ))}
                      </details>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {currentFast && (
        <div className={styles.fastFloating}>
          <strong>{currentFast.title}</strong>
          <span>{currentFast.description}</span>
        </div>
      )}
    </section>
  );
}

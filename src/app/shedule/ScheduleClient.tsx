"use client";

import { useState } from "react";

import styles from "./page.module.css";
import FastInfo from "@/components/Schedule/FastInfo/FastInfo";
import scheduleData from "@/data/schedule/2026-06.json";
import calendarData from "@/data/church-calendar/2026.json";

import { mergeSchedule } from "@/lib/calendar/mergeSchedule";
import type { ScheduleModel, ChurchCalendarModel } from "@/lib/calendar/types";

const typedCalendar = calendarData as ChurchCalendarModel;

export default function SchedulePage() {
  const [showFullCalendar, setShowFullCalendar] = useState(false);

  const calendarForSchedule = {
    days: typedCalendar.days.map((day) => ({
      date: day.date,
      fast: day.fast,
    })),
    fasts: [],
  };

  const merged = mergeSchedule(
    scheduleData as ScheduleModel[],
    showFullCalendar ? typedCalendar : calendarForSchedule,
    2026,
    7,
  );

  const daysToRender = showFullCalendar
    ? merged
    : merged.filter((day) => day.isInMainSchedule);

  return (
    <section className={`container ${styles.wrapper}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Липень</h1>

        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={showFullCalendar}
            onChange={() => setShowFullCalendar((v) => !v)}
          />
          <span>Весь місяць</span>
        </label>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Подія</th>
            </tr>
          </thead>

          <tbody>
            {daysToRender.map((day) => (
              <tr key={`${day.date.year}-${day.date.month}-${day.date.day}`}>
                <td className={styles.dateCell}>
                  <div className={styles.dateContent}>
                    <div className={styles.date}>
                      {day.date.day}, {day.date.weekday}
                    </div>

                  <div className={styles.fast}>
                    <FastInfo fast={day.calendar.fast} />
                  </div>
                  </div>
                </td>

                <td className={styles.servicesCell}>
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
                        <div className={styles.readingsContent} key={i}>
                          <strong>{r.title}</strong>
                          <p>{r.content}</p>
                        </div>
                      ))}
                    </details>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

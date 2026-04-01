// "use client";

import scheduleData from "../../data/schedule.json";
import styles from "./page.module.css";
import type { ScheduleItem } from "@/types/schedule";
import Link from "next/link";
export const metadata = {
  title: "Розклад Богослужінь ",
  description:
    "Розклад богослужінь у храмі св. прп. Серафима Саровського чудотворця у Вінниці. Дні та час літургій, молебнів, вечірніх і святкових служб.",
  openGraph: {
    title: "Розклад Богослужінь — Храм св. прп. Серафима Саровського, Вінниця",
    description:
      "Актуальний розклад богослужінь у нашій парафії: літургії, вечірні, святкові служби. Храм св. прп. Серафима Саровського, Вінниця.",
    url: "https://parish-ten.vercel.app/shedule",
    images: [
      {
        url: "/assets/metadataphoto/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Розклад богослужінь у храмі св. прп. Серафима Саровського, Вінниця",
      },
    ],
    type: "article",
  },
};

export default function ShedulePage() {
  const schedule = scheduleData as ScheduleItem[];
  function renderDayTitle(item: ScheduleItem) {
    // 1. title + holidays в одному рядку
    if (item.title && item.holidays && item.holidays.length > 0) {
      return (
        <>
          <span>{item.title}</span>{" "}
          {renderEventLinks(item.holidays, "/events/holidays")}
        </>
      );
    }

    // 2. Свята — як головний заголовок
    if (item.holidays && item.holidays.length > 0) {
      return <>{renderEventLinks(item.holidays, "/events/holidays")}</>;
    }

    // 3. title + saints в одному рядку
    if (item.title && item.saints && item.saints.length > 0) {
      return (
        <>
          <span>{item.title}</span>{" "}
          {renderEventLinks(item.saints, "/events/lives")}
        </>
      );
    }

    // 4. Звичайний title
    if (item.title) {
      return <span>{item.title}</span>;
    }

    return null;
  }

  function renderEventLinks(
    items: { name: string; slug: string }[],
    basePath: string,
  ) {
    return items.map((item, index) => (
      <span key={item.slug}>
        <Link href={`${basePath}/${item.slug}`} className={styles.eventLink}>
          {item.name}
        </Link>
        {index < items.length - 1 && ", "}
      </span>
    ));
  }

  return (
    <section className={`container ${styles.wrapper}`}>
      <h1 className={styles.title}>Квітень</h1>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Дата</th>
              {/* <th>День</th> */}
              <th>Подія</th>
              {/* <th>Час</th>
              <th>Богослужіння</th> */}
            </tr>
          </thead>

          <tbody>
            {schedule.map((item, index) => (
              <tr key={index}>
                {/* ДАТА */}
                <td className={styles.dateCell}>{item.date}</td>

                {/* БОГОСЛУЖІННЯ */}
                <td className={styles.servicesCell}>
                  {renderDayTitle(item) && (
                    <div className={styles.dayTitle}>
                      {renderDayTitle(item)}
                    </div>
                  )}

                  <div className={styles.servicesList}>
                    {item.services.map((service, i) => (
                      <div key={i} className={styles.serviceRow}>
                        <span className={styles.time}>{service.time}</span>
                        <span className={styles.name}>{service.name}</span>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

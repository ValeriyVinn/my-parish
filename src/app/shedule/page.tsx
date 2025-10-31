// "use client";

import scheduleData from "../../data/schedule.json";
import styles from "./page.module.css";
import type { ScheduleItem } from "@/types/schedule";

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
  const schedule: ScheduleItem[] = scheduleData;

  return (
    <section className={`container ${styles.wrapper}`}>
      <h1 className={styles.title}>Розклад Богослужінь — Листопад</h1>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Дата</th>
              {/* <th>День</th> */}
              <th>Подія</th>
              <th>Час</th>
              <th>Богослужіння</th>
            </tr>
          </thead>

          <tbody>
            {schedule.map((item, index) =>
              item.services.map((service, i) => (
                <tr key={`${index}-${i}`}>
                  {i === 0 && (
                    <>
                      <td rowSpan={item.services.length}>{item.date}</td>
                      {/* <td rowSpan={item.services.length}>{item.day}</td> */}
                      <td rowSpan={item.services.length}>{item.title}</td>
                    </>
                  )}
                  <td>{service.time}</td>
                  <td>{service.name}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}


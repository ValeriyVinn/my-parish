"use client";

import scheduleData from "../../data/schedule.json";
import styles from "./page.module.css";
import type { ScheduleItem } from "@/types/schedule";

// export const metadata = {
//   title: "Розклад Богослужінь | Церковний сайт",
//   description: "Розклад богослужінь у нашій парафії на поточний місяць.",
// };

export default function ShedulePage() {
  const schedule: ScheduleItem[] = scheduleData;

  return (
    <section className={`container ${styles.wrapper}`}>
      <h1 className={styles.title}>Розклад Богослужінь — Жовтень</h1>

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


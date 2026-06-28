// // "use client";

// import scheduleData from "../../data/schedule.json";
// import styles from "./page.module.css";
// import type { ScheduleItem } from "@/types/schedule";
// import Link from "next/link";
// export const metadata = {
//   title: "Розклад Богослужінь ",
//   description:
//     "Розклад богослужінь у храмі св. прп. Серафима Саровського чудотворця у Вінниці. Дні та час літургій, молебнів, вечірніх і святкових служб.",
//   openGraph: {
//     title: "Розклад Богослужінь — Храм св. прп. Серафима Саровського, Вінниця",
//     description:
//       "Актуальний розклад богослужінь у нашій парафії: літургії, вечірні, святкові служби. Храм св. прп. Серафима Саровського, Вінниця.",
//     url: "https://parish-ten.vercel.app/shedule",
//     images: [
//       {
//         url: "/assets/metadataphoto/og-default.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Розклад богослужінь у храмі св. прп. Серафима Саровського, Вінниця",
//       },
//     ],
//     type: "article",
//   },
// };

// export default function ShedulePage() {
//   const schedule = scheduleData as ScheduleItem[];
//   function renderDayTitle(item: ScheduleItem) {
//     // 1. title + holidays в одному рядку
//     if (item.title && item.holidays && item.holidays.length > 0) {
//       return (
//         <>
//           <span>{item.title}</span>{" "}
//           {renderEventLinks(item.holidays, "/events/holidays")}
//         </>
//       );
//     }

//     // 2. Свята — як головний заголовок
//     if (item.holidays && item.holidays.length > 0) {
//       return <>{renderEventLinks(item.holidays, "/events/holidays")}</>;
//     }

//     // 3. title + saints в одному рядку
//     if (item.title && item.saints && item.saints.length > 0) {
//       return (
//         <>
//           <span>{item.title}</span>{" "}
//           {renderEventLinks(item.saints, "/events/lives")}
//         </>
//       );
//     }

//     // 4. Звичайний title
//     if (item.title) {
//       return <span>{item.title}</span>;
//     }

//     return null;
//   }

//   function renderEventLinks(
//     items: { name: string; slug: string }[],
//     basePath: string,
//   ) {
//     return items.map((item, index) => (
//       <span key={item.slug}>
//         <Link href={`${basePath}/${item.slug}`} className={styles.eventLink}>
//           {item.name}
//         </Link>
//         {index < items.length - 1 && ", "}
//       </span>
//     ));
//   }

//   return (
//     <section className={`container ${styles.wrapper}`}>
//       <h1 className={styles.title}>Червень</h1>

//       <div className={styles.tableWrapper}>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Дата</th>
//               {/* <th>День</th> */}
//               <th>Подія</th>
//               {/* <th>Час</th>
//               <th>Богослужіння</th> */}
//             </tr>
//           </thead>

//           <tbody>
//             {schedule.map((item, index) => (
//               <tr key={index}>
//                 {/* ДАТА */}
//                 <td className={styles.dateCell}>{item.date}</td>

//                 {/* БОГОСЛУЖІННЯ */}
//                 <td className={styles.servicesCell}>
//                   {renderDayTitle(item) && (
//                     <div className={styles.dayTitle}>
//                       {renderDayTitle(item)}
//                     </div>
//                   )}

//                   <div className={styles.servicesList}>
//                     {item.services.map((service, i) => (
//                       <div key={i} className={styles.serviceRow}>
//                         <span className={styles.time}>{service.time}</span>
//                         <span className={styles.name}>{service.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }
// -------------------------------------------------

// "use client";

// import { useState } from "react";

// import styles from "./page.module.css";

// import scheduleData from "@/data/schedule/2026-06.json";
// import calendarData from "@/data/church-calendar/2026.json";

// import { mergeSchedule } from "@/lib/calendar/mergeSchedule";
// import type { ScheduleModel } from "@/lib/calendar/types";

// export default function SchedulePage() {
//   const [showFullCalendar, setShowFullCalendar] = useState(false);

//   const merged = mergeSchedule(
//     scheduleData as ScheduleModel[],
//     showFullCalendar ? calendarData : { days: [] },
//     2026,
//     6,
//   );

//   const daysToRender = showFullCalendar
//     ? merged
//     : merged.filter((day) => day.isInMainSchedule);



//   return (
//     <section className={`container ${styles.wrapper}`}>
//       <div className={styles.header}>
//         <h1 className={styles.title}>Червень</h1>

//         <label className={styles.toggle}>
//           <input
//             type="checkbox"
//             checked={showFullCalendar}
//             onChange={() => setShowFullCalendar((v) => !v)}
//           />
//           <span>Весь місяць</span>
//         </label>
//       </div>

//       <div className={styles.tableWrapper}>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Дата</th>
//               <th>Подія</th>
//             </tr>
//           </thead>

//           <tbody>
//             {daysToRender.map((day) => (
//               <tr key={`${day.date.year}-${day.date.month}-${day.date.day}`}>
//                 <td className={styles.dateCell}>
//                   {day.date.day}, {day.date.weekday}
//                 </td>

//                 <td className={styles.servicesCell}>
//                   {day.headline.length > 0 && (
//                     <div className={styles.dayTitle}>
//                       {day.headline.map((node, i) =>
//                         node.type === "text" ? (
//                           <span key={i}>{node.value}</span>
//                         ) : (
//                           <a
//                             key={i}
//                             href={`/events/${node.slug}`}
//                             className={styles.eventLink}
//                           >
//                             {node.value}
//                           </a>
//                         ),
//                       )}
//                     </div>
//                   )}

//                   {day.calendar.holidays.length > 0 && (
//                     <div className={styles.holidaysBlock}>
//                       {day.calendar.holidays.join(", ")}
//                     </div>
//                   )}

//                   {day.calendar.saints.length > 0 && (
//                     <div className={styles.saintsBlock}>
//                       {day.calendar.saints.join(", ")}
//                     </div>
//                   )}                  

//                   {day.services.length > 0 && (
//                     <div className={styles.servicesList}>
//                       {day.services.map((service, i) => (
//                         <div key={i} className={styles.serviceRow}>
//                           <span className={styles.time}>{service.time}</span>
//                           <span className={styles.name}>{service.name}</span>
//                         </div>
//                       ))}
//                     </div>
//                   )}


//                   {day.calendar.memorials.length > 0 && (
//                     <div className={styles.memorialsBlock}>
//                       {day.calendar.memorials.join(", ")}
//                     </div>
//                   )}

//                   {day.calendar.readings.length > 0 && (
//                     <details className={styles.readingsBlock}>
//                       <summary>Читання дня</summary>

//                       {day.calendar.readings.map((r, i) => (
//                         <div key={i}>
//                           <strong>{r.title}</strong>
//                           <p>{r.content}</p>
//                         </div>
//                       ))}
//                     </details>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }
// -----------------------------------------------

import type { Metadata } from "next";

import ScheduleClient from "./ScheduleClient";

export const metadata: Metadata = {
  title: "Розклад Богослужінь",
  description:
    "Розклад богослужінь у храмі св. прп. Серафима Саровського чудотворця у Вінниці. Дні та час літургій, молебнів, вечірніх і святкових служб.",
  openGraph: {
    title:
      "Розклад Богослужінь — Храм св. прп. Серафима Саровського, Вінниця",
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

export default function Page() {
  return <ScheduleClient />;
}
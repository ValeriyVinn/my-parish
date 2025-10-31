
"use client";
import styles from "./page.module.css";

// export const metadata = {
//   title: "Духовенство | Церковний сайт",
//   description: "Настоятелі та духовенство парафії",
// };

export default function Clergy() {
  return (
    <div className="container">
      <article className={styles.articleClergy}>
        <h2 className={styles.prior}>Настоятель</h2>

        <ul className={styles.clergyList}>
          <li className={styles.clergyItem}>
            <p className={styles.clergyName}>Протоієрей Олександр Токарчук</p>
            <p className={styles.clergyPhone}>097 409 99 13</p>
          </li>

          <li className={styles.clergyItem}>
            <p className={styles.clergyName}>Ієрей Дмитро Турабов</p>
            <p className={styles.clergyPhone}>096 800 63 03</p>
          </li>

          <li className={styles.clergyItem}>
            <p className={styles.clergyName}>Диякон Олег Кучерук</p>
            <p className={styles.clergyPhone}></p>
          </li>

          <li className={styles.clergyItem}>
            <p className={styles.clergyName}>Диякон Андрій Прокопенко</p>
            <p className={styles.clergyPhone}></p>
          </li>
        </ul>
      </article>
    </div>
  );
}

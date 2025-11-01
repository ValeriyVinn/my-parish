import styles from "./page.module.css";

export const metadata = {
  title: "Духовенство ",
  description:
    "Настоятелі храму св. прп. Серафима Саровського у Вінниці. Адреса: Хмельницьке шосе, 145.",
  openGraph: {
    title: "Духовенство — Храм св. прп. Серафима Саровського, Вінниця",
    description:
      "Познайомтеся з настоятелями храму св. прп. Серафима Саровського у Вінниці. Фото та короткі відомості про духовенство.",
    url: "https://parish-ten.vercel.app/clergy",
    images: [
      {
        url: "/assets/metadataphoto/og-default.jpg", 
        width: 1200,
        height: 630,
        alt: "Духовенство храму св. прп. Серафима Саровського у Вінниці",
      },
    ],
    type: "article", 
  },
};


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

"use client";

import styles from "./page.module.css";
import SevenCouncil from "./images/7sobor.jpg";
import Image from "next/image";
import { useState } from "react";

export default function FaithHopeLoveAndSophia() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Зображення Христове з любов’ю вшанували
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={SevenCouncil}
              alt="Ікона «Торжество Православія»"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Ікона «Торжество Православія» (пам’ять святих отців VII Вселенського собору, 787 р., Нікея)
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
           Святі отці VII Вселенського собору зібралися в Нікеї у 787 році, щоб розглянути суперечку щодо шанування святих ікон. Іконоборці заперечували церковне вшанування образів, вбачаючи в ньому поклоніння створеній матерії. Отці собору сповідували, що честь, віддана образу, сходить до його первообразу. Тому шанування ікони Христа пов&apos;язане з вірою у справжнє Втілення Сина Божого. Собор підтвердив, що святі ікони можуть бути присутні в храмах і домівках та вшановуватися відповідно до церковного передання. При цьому отці чітко розрізнили поклоніння, яке належить лише Богові, і шанування святинь. Так Церква захистила не лише іконописну традицію, а й православне вчення про те, що Син Божий справді став людиною. Пам&apos;ять отців VII Вселенського собору є пам&apos;яттю про їхню вірність апостольському і святоотцівському переданню.
          </p>
          <p className={styles.paragraph}></p>
          <p className={styles.paragraph}></p>
          <p className={styles.paragraph}></p>
          <p className={styles.paragraph}></p>
          <p className={styles.paragraph}></p>
          <p className={styles.paragraph}></p>
          <p className={styles.paragraph}></p>

          <p className={styles.paragraph}></p>
          <p className={styles.paragraph}></p>
          <p className={styles.paragraph}></p>
        </div>
        <button
          className={styles.readMore}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Згорнути..." : "Читати далі..."}
        </button>
      </article>
      {/* <article className={styles.article}>
        <blockquote className={styles.gospel}>
          <h3 className={styles.gospelTitle}>Євангеліє від Іоана 11:1-45</h3>Був
          один недужий — Лазар з Вифанії, села Марії та її сестри Марфи.
        </blockquote>
      </article> */}
      <article className={styles.article}></article>
      <article className={styles.article}></article>
    </div>
  );
}

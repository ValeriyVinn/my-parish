"use client";

import styles from "./page.module.css";
import NicolasOfMyra from "./images/nicholas-of-myra.jpg";
import Image from "next/image";
import { useState } from "react";

export default function NicolasOfMyraPage() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Блаженні милостиві, бо вони помилувані будуть
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={NicolasOfMyra}
              alt="Ікона Миколая Чудотворця"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Ікона з Базиліки св. Миколая у м. Барі (Італія), яка, як вважається,
            була написана на основі прижиттєвого зображення святого
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
            Святий Миколай народився у місті Патари в Лікії, на півдні
            Анатолійського півострова, приблизно наприкінці ІІ століття. Його
            батьки-християни довгий час не мали нащадків і старанно молили Бога
            дарувати їм дитину. З самого дитинства він був вихований у
            помірності, благочесті та вивченні Божественних Писань.
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

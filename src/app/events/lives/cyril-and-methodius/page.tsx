"use client";

import styles from "./page.module.css";
import CyrilAndMethodius from "./images/cyril-and-methodius.jpg";
import Image from "next/image";
import { useState } from "react";

export default function CyrillAndMethodiusPage() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>Нести Боже слово рідною мовою — служіння любові</h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={CyrilAndMethodius}
              alt="Ікона святих Кирила і Мефодія"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
           Кирило і Мефодій
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
           Кирило і Мефодій — слов&apos;янські просвітники та проповідники християнства, Кирило — творець глаголиці, Мефодій — її поширювач і співпрацівник, перші перекладачі богослужбових книг слов&apos;янською мовою, брати. 
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
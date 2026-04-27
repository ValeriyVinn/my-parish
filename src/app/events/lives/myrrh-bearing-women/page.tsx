"use client";

import styles from "./page.module.css";
import MirrhBearingWomen from "./images/myrrh-bearing-women.jpg";
import Image from "next/image";
import { useState } from "react";

export default function MyrrhBearerWomenPage() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Не зникли у світі ні вірність, ні любов.
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={MirrhBearingWomen}
              alt="Ікона Сім жінок-мироносиць. "
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Сім жінок-мироносиць. Ікона, початок XIX століття.
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
            Жінки-мироносиці — це жінки, які в ніч Воскресіння Ісуса Христа
            прийшли до Гробу Господнього, щоб за звичаєм намастити його тіло
            ароматними маслами. Вони були серед перших вірян, хто залишивши свої
            будинки пішли за Христом
          </p>
          <p className={styles.paragraph}>
            У святому письмі згадується сім жінок: Марія Магдалина, Іоанна,
            Сусанна, Марія Клеопова, Соломія, Марфа і Марія — сестри Лазарь,
            хоча, можливо, що їх було більше. Коли жінки йшли до Гробу, вони
            обговорювали, хто відвалить камінь, але підійшовши побачили ангела,
            який сповістив їм, що Ісус воскрес
          </p>
          <p className={styles.paragraph}>
            У Євангеліє від Іоана вказується, що першою до Гробу підійшла Марія
            Магдалина. Коли вона побачила, що Ісуса немає, вона почала плакати,
            так як вирішила, що його викрали. Тут до неї з&apos;явилися два
            ангели і сам Ісус, якого вона не впізнала. Ісус дозволив їй
            сповістити апостолам, що Ісус Христос Воскрес
          </p>
          <p className={styles.paragraph}>
            У православній вірі жінок-мироносиць шанують у зв&apos;язку з
            Воскресінням Господнім тому що вони, не боячись гоніння, першими
            прийшли до Гробу Господнього, побачили ангела і першими повідомили
            світу, що Ісус Воскрес.
          </p>
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

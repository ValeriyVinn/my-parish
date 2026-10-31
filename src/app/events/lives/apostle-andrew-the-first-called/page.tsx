"use client";

import styles from "./page.module.css";
import ApostleAndrew from "./images/apostle-andrew-the-first-called.jpg";
import Image from "next/image";
import { useState } from "react";

export default function ApostleAndrewTheFirstCalled() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        І нас до Нього приводячи
        <small>Акафіст ап. Андрія, ікос 1</small>
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={ApostleAndrew}
              alt="Пам'ятник Апостолу Андрію на площі Андрія Первозванного у Києві"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Пам&apos;ятник Апостолу Андрію на площі Андрія Первозванного у Києві
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
            Святий апостол Андрій Первозванний був одним із дванадцяти апостолів, учнів Господа нашого Ісуса Христа. Він походив із міста Вифсаїди в Галилеї та був братом апостола Петра. Спочатку Андрій був учнем Іоана Хрестителя, але, почувши його свідчення про Ісуса Христа, пішов за Спасителем і став першим із апостолів, покликаних Господом, за що й отримав ім&apos;я Первозванний. Після Вознесіння Христового апостол Андрій вирушив проповідувати Євангеліє в різні країни та народи. За церковним переданням, він проповідував у землях Причорномор&apos;я, зокрема побував на київських пагорбах, де благословив місце майбутнього міста Києва і встановив хрест. Завершив свій земний шлях апостол у місті Патри, де за проповідь Христа був засуджений до розп&apos;яття. Святий прийняв мученицьку смерть на хресті, зберігши вірність Господу до кінця. Церква прославляє Андрія Первозванного як апостола Христового, першого покликаного учня Спасителя та небесного заступника тих, хто звертається до нього з молитвою.
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

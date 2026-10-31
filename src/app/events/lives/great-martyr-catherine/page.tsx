"use client";

import styles from "./page.module.css";
import Catherine from "./images/great-martyr-catherine.jpg";
import Image from "next/image";
import { useState } from "react";

export default function GreatMartyrCatherine() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Премудрість, якій не зможуть противитися.
        <small>Лк. 21:15</small>
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={Catherine}
              alt="Св. Катерина (ікона поч. XX ст.)"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Св. Катерина (ікона поч. XX ст.)
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
         Свята великомучениця Катерина жила наприкінці III — на початку IV століття в місті Александрії Єгипетській. Вона походила зі знатної родини, вирізнялася надзвичайною красою, мудрістю та освіченістю, вивчала філософію, літературу й науки. Пізнавши християнську віру, Катерина прийняла Святе Хрещення і присвятила своє життя Господу Ісусу Христу. Під час гонінь на християн за правління імператора Максиміана свята відкрито виступила проти язичницьких вірувань і мужньо сповідувала Христа. Імператор намагався переконати її зректися віри, скликавши найосвіченіших філософів, але Катерина своєю мудрістю та силою християнського слова перемогла їх у суперечці. За переказами, її свідчення навернуло до Христа багатьох присутніх. За відмову принести жертву язичницьким богам святу піддали катуванням і засудили до страти. Катерина прийняла мученицьку смерть через усічення мечем, залишившись вірною Христові до кінця. Церква прославляє її як великомученицю, мудру сповідницю християнської віри та небесну заступницю тих, хто звертається до неї з молитвою.
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

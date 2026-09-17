"use client";

import styles from "./page.module.css";
import Volodimir from "./images/Olga.jpg";
import Image from "next/image";
import { useState } from "react";

export default function OlgaOfKyiv() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>Залишила темряву і полюбила Світло</h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={Volodimir}
              alt="Зображення Княгині Ольги"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
           Княгиня Ольга. Ф. Солнцев, 1869
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
            Свята рівноапостольна княгиня Ольга жила у X столітті та була
            дружиною київського князя Ігоря і матір&apos;ю князя Святослава.
            Після загибелі чоловіка вона стала правителькою Київської держави та
            протягом сімнадцяти років керувала її землями. У перші роки
            правління Ольга діяла як сильна княгиня, зміцнювала державу,
            впорядковувала управління та збирала данину. Згодом її життя
            змінилося: княгиня прийняла християнську віру і у Святому Хрещенні
            отримала ім&apos;я Єлена. За літописним переказом, хрещення
            відбулося в Константинополі, де Ольга прийняла віру в Христа вже як
            зріла правителька. Повернувшись до Києва, вона будувала храми та
            поширювала християнську віру, хоча її син Святослав залишався
            язичником. Ольга не змогла охрестити всю Русь за свого життя, але
            стала однією з тих, через кого християнство укріпилося на київській
            землі. Її онук Володимир згодом продовжив цей шлях і охрестив народ.
            Свята Ольга померла християнкою у 969 році та була похована за
            християнським обрядом. Церква прославила її як рівноапостольну за її
            роль у поширенні християнської віри.
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

"use client";

import styles from "./page.module.css";
import Volodimir from "./images/Volodimir.jpg";
import Image from "next/image";
import { useState } from "react";

export default function VladimirTheGreat() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Бажаючи спасти від вічної погибелі царство твоє
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={Volodimir}
              alt="Пам’ятник князю Володимиру Великому в Києві"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
           Пам’ятник князю Володимиру Великому в Києві
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
            Святий рівноапостольний князь Володимир Святославич був київським
            князем і онуком святої рівноапостольної княгині Ольги. У молоді роки
            він був язичником і правив державою як могутній князь та воїн.
            Прийшовши до влади, Володимир спочатку зміцнював язичницький культ,
            але згодом почав шукати віру, яка могла б стати основою нового життя
            його народу. За літописним переказом, він вислуховував представників
            різних релігій та зрештою звернувся до християнської віри. Князь
            прийняв хрещення та отримав ім&apos;я Василій. Після хрещення, за
            церковним житієм, змінилося не лише його державне життя, а й
            особистий характер: він став милосердним, допомагав убогим, сиротам,
            вдовам і хворим. Володимир почав будувати храми та поширювати
            християнську віру серед свого народу. Найвідомішою подією його
            правління стало хрещення Києва та подальше поширення християнства на
            землях Київської Русі. За його правління християнська громада стала
            основою нового церковного життя держави. Святий Володимир помер у
            Берестові 1015 року. Церква називає його рівноапостольним за
            поширення християнської віри серед свого народу.
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

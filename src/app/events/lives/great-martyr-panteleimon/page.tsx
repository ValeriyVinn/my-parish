"use client";

import styles from "./page.module.css";
import Volodimir from "./images/St_Panteleimon.jpg";
import Image from "next/image";
import { useState } from "react";


export default function GreatMartyrPanteleimon() {
 const [expanded, setExpanded] = useState(false);
  return (
<div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Співстраждання сповнений, як істинно подібний до Господа
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={Volodimir}
              alt="Ікона святого великомученика і цілителя Пантелеймона"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Візантійська ікона «Святий великомученик і цілитель Пантелеймон із житієм» початок XIII ст. 
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
 Святий великомученик Пантелеймон жив наприкінці III — на початку IV століття в Нікомидії. Він отримав медичну освіту і став лікарем при дворі імператора Максиміана. Його мати була християнкою, а згодом юнак познайомився зі священником Єрмолаєм, який відкрив йому віру в Христа. Після хрещення Пантолеон отримав ім&apos;я Пантелеймон, що означає «всемилостивий». Після смерті батька він присвятив своє життя допомозі хворим і нужденним. Він лікував людей безоплатно, а зцілення пов&apos;язував із вірою та молитвою до Христа. Пантелеймон також відвідував ув&apos;язнених християн і допомагав їм. Заздрісні лікарі донесли на нього імператорові, після чого святого заарештували та вимагали зректися Христа. Пантелеймон залишився вірним своїй вірі та витримав численні мучення. У 305 році він прийняв мученицьку смерть, а Церква зберегла пам&apos;ять про нього як про великомученика і цілителя.
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
"use client";

import styles from "./page.module.css";
import Paraskeva from "./images/great-martyr-paraskeva.jpg";
import Image from "next/image";
import { useState } from "react";

export default function FaithHopeLoveAndSophia() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Радуйся, бо Творцеві служила ти, а не творінню
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={Paraskeva}
              alt="Ікона &quot;Параскева П'ятниця&quot;, XVII ст., Галичина"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Ікона «Параскева П&apos;ятниця», XVII ст., Галичина
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
           Свята великомучениця Параскева жила у III столітті в місті Іконії. Її батьки були християнами і виховали доньку у вірі Христовій. Після їхньої смерті Параскева присвятила своє життя Богові та допомозі ближнім. Вона відкрито проповідувала Христа і закликала людей залишити язичницьке поклоніння. За це святу схопили та привели на суд. Правитель вимагав від неї відректися від Христа, але вона залишилася непохитною. Параскева мужньо перенесла катування і не зреклася своєї віри. Зрештою вона прийняла мученицьку смерть. Церква прославляє її як великомученицю і подає її життя як приклад вірності Христові серед випробувань.
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

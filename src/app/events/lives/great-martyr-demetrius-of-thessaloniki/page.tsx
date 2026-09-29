"use client";

import styles from "./page.module.css";
import Demetrius from "./images/great-martyr-demetrius-of-thessaloniki.jpg";
import Image from "next/image";
import { useState } from "react";

export default function FaithHopeLoveAndSophia() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Прийняв переможний вінець правди
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={Demetrius}
              alt="Мозаїка Святого Дмитра Солунського з собору Михайлівського золотоверхого монастиря, Київ, XII ст.)."
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Мозаїка Святого Дмитра Солунського з собору Михайлівського золотоверхого монастиря, Київ, XII ст.).
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
            Святий великомученик Димитрій жив у місті Солуні наприкінці III — на початку IV століття. Він походив із знатної християнської родини і був поставлений правителем Солуня. Димитрій відкрито сповідував Христа і навчав людей християнської віри. Коли імператор Максиміан дізнався про його проповідь, святого ув&apos;язнили. Перебуваючи у в&apos;язниці, Димитрій благословив юнака Нестора, який мав виступити проти язичницького силача Лія. Після перемоги Нестора імператор наказав убити Димитрія. Святий прийняв мученицьку смерть, залишившись вірним Христові. Християни поховали його тіло, а над його могилою згодом було споруджено храм. Церква прославляє Димитрія як великомученика, мироточця і небесного покровителя тих, хто звертається до нього з молитвою.
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

"use client";

import styles from "./page.module.css";
import Volodimir from "./images/yllya.jpg";
import Image from "next/image";
import { useState } from "react";

export default function ProphetElijah() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>Якщо Господь є Бог, ідіть за Ним</h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={Volodimir}
              alt="Ікона із зображенням святого пророка Іллі"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Ікона із зображенням святого пророка Іллі
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
            Святий пророк Ілля жив у часи царя Ахава та відкрито виступив проти
            поклоніння язичницькому богу Ваалу. Він безстрашно викривав
            відступлення народу Ізраїлю від Бога та закликав людей повернутися
            до віри. За словом Господнім Ілля оголосив про посуху, яка тривала
            кілька років. Після цього пророк оселився біля потоку Хораф, де
            Господь підтримував його під час голоду. Згодом Ілля прийшов на гору
            Кармил, де перед народом поставив питання: кому вони служитимуть —
            Господу чи Ваалу. Після молитви пророка вогонь Господній зійшов на
            жертовник, і народ визнав: «Господь є Бог». Після цього Ілля молився
            про дощ, і після тривалої посухи на землю знову прийшла вода.
            Переслідуваний царицею Ієзавеллю, пророк утомився і в пустелі просив
            Господа про смерть. Але Бог зміцнив його та відкрив йому Свою
            присутність не лише у вогні й бурі, а у віянні тихого вітру. Ілля
            продовжив своє служіння та передав пророче покликання Єлисею. За
            біблійним свідченням, він був узятий на небо у вогненній колісниці.
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

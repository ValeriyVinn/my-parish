"use client";

import styles from "./page.module.css";
import Volodimir from "./images/faith-hope-love-and-sophia.jpg";
import Image from "next/image";
import { useState } from "react";

export default function FaithHopeLoveAndSophia() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Як райські три гілки, що з’єднали в собі вінець чеснот
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={Volodimir}
              alt="Ікона &quot;Святі мучениці Віра, Надія, Любов та їхня матір Софія.&quot;"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            &quot;Святі мучениці Віра, Надія, Любов та їхня матір Софія.&quot; Ікона XVIII ст. із Західної України 
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
            Святі мучениці Віра, Надія, Любов та їхня мати Софія жили в Римській
            імперії у II столітті. Софія була християнкою та виховувала своїх
            трьох дочок у вірі в Христа. Дівчат назвали Вірою, Надією та
            Любов&apos;ю — на честь трьох християнських чеснот. Коли про їхню
            віру стало відомо імператору Адріану, дівчат привели на суд і
            намагалися змусити зректися Христа. Старшій Вірі було дванадцять
            років, Надії — десять, а Любові — дев&apos;ять. Кожна з них
            залишилася вірною Христові та прийняла мученицьку смерть. Софія не
            була піддана таким самим тортурам, але пережила смерть усіх трьох
            дочок і залишилася біля їхніх могил. Через три дні після смерті
            дочок вона також відійшла до Господа. Їхнє житіє стало свідченням
            віри, яка не залежить від віку чи людської сили. Церква шанує Віру,
            Надію, Любов і Софію разом, пам&apos;ятаючи їх як родину, яка
            залишилася вірною Христові до кінця.
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

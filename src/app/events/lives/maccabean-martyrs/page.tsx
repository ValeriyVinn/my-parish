"use client";

import styles from "./page.module.css";
import Volodimir from "./images/makoveji.jpg";
import Image from "next/image";
import { useState } from "react";

export default function MaccabeanMartyrs() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Для нас єдиний Цар — Бог, Яким створені
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={Volodimir}
              alt="Ікона сім святих мучеників Маккавеїв"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
             Ікона &quot;сім святих мучеників Маккавеїв, їхня мати Соломонія та вчитель Єлеазар&quot;
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
            Сім мучеників Маккавеїв жили у II столітті до Різдва Христового,
            коли Юдея перебувала під владою царя Антіоха IV Епіфана. Правитель
            намагався примусити юдеїв відмовитися від закону Божого та прийняти
            язичницькі звичаї. Сім братів разом зі своєю матір&apos;ю Соломонією
            залишилися вірними заповідям Божим. Їх схопили та привели перед
            царя, який вимагав від них порушити закон. Один за одним брати
            відмовлялися зректися своєї віри та приймали мученицьку смерть. Мати
            бачила смерть своїх синів, але сама підтримувала їх у вірності
            Богові. Її мужність стала невід&apos;ємною частиною свідчення цієї
            родини. Разом із ними Церква згадує старця Єлеазара, учителя закону,
            який також відмовився відступити від віри. Їхнє мучеництво
            засвідчило, що вірність Богові може вимагати великої мужності та
            готовності терпіти. Пам&apos;ять Маккавеїв збереглася в Церкві як
            приклад стійкості перед примусом і випробуваннями.
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

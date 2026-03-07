"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import FortyMortyrsOfSebaste from "./images/FortyMartyrsOfSebaste.jpg";

export default function FortyMartyrsOfSebaste() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={FortyMortyrsOfSebaste}
              alt="Святі Мученики Севастійські"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Ікона 40 святих з храму Гробу Господнього у Єрусалимі
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3> 
          <p className={styles.paragraph}>
            Севастійські мученики (40 Севастійських мучеників — вшановані як
            святі 40 воїнів римського легіону, котрі в 320 р. мученицькі
            загинули поблизу м. Севастія (тепер м. Сівас, Туреччина) за відмову
            зректися християнської віри.
          </p>
          <p className={styles.paragraph}>
            Воїни були родом з Каппадокії (нині на території Туреччини) у складі
            римського XII Блискавичного легіону, що
            стояв у місті Севастії.
          </p>
          <p className={styles.paragraph}>
            Взимку 320, через відмову взяти участь у язичницькому ритуалі
            жертвопринесення, були мученицькі покарані. За наказом воєначальника
            Агріколи, після кількаденних марних залякувань і переконань,
            роздягнених воїнів примусили зайти в крижані води озера. Для спокуси
            на березі облаштували лазню для тих, хто погодився б урятувати своє
            життя зреченням від християнства. На ранок один із воїнів, не
            витримавши страждань, кинувся до лазні, але впав мертвим на порозі.
            Відступника замінив тюремний охоронець Аглай: після навіяного
            видіння (світла, що засяяло з неба та ангелів із 39-ма вінками для
            мучеників) він зі словами «І я — християнин!» приєднався до гурту
            воїнів. Кількість мучеників знову сягла 40 осіб. Дивним чином
            ратоборці лишалися живими й неушкодженими, крига в озері розтанула,
            а вода потепліла. Ранком були люто страчені охоронцями, а тіла
            кинуті у вогонь. Неспалені рештки висипані у воду.
          </p>
          <p className={styles.paragraph}>
           Згідно з житієм Петра Севастійського — тогочасного єпископа міста — за кілька днів він разом із кліриками таємно поховав останки, місцезнаходження яких побачив уві сні.
          </p>
          <p className={styles.paragraph}>
            Пам’ять севастійських мучеників відзначають 9 березня. У цей день полегшується строгість Великого посту. Поряд із тим, стійкість 40-ка мучеників вважають символічним взірцем для християн неухильно дотриматися 40-ка днів постування. 
          </p>
          

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
    </div>
  );
}

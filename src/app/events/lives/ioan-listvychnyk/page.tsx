"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ioanListvychnykImage from "./images/IoanLlistvychnyk.jpg";

export default function IoanListvychnyk() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>Любов є Бог</h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={ioanListvychnykImage}
              alt="Іоан Ліствичник"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Св. Іоан Ліствичник
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
            Іоа́н Лістви́чник (525—595 (605) або 579—649) — християнський
            богослов, візантійський філософ, ігумен Синайського монастиря.
            Святий православної і католицької церков.{" "}
          </p>
          <p className={styles.paragraph}>
            Про походження преподобного Іоана майже не збереглося відомостей. Є
            переказ, що він народився близько 570 року і був сином святих
            Ксенофонта і Марії, пам&apos;ять яких Церква вшановує 26 січня.{" "}
          </p>
          <p className={styles.paragraph}>
            У шістнадцять років юнак Іоан прийшов до Синайського монастиря.
            Наставником і керівником преподобного став авва Мартирій. Після
            чотирьох років перебування на Синаї святий Іоан Ліствичник був
            пострижений в іноцтво. Один з присутніх при постризі, авва
            Стратигій, передбачив, що він стане великим світильником Церкви
            Христової. Протягом 19-ти років преподобний Іоан трудився у послусі
            своєму духовному отцеві. Після смерти авви Мартирія преподобний Іоан
            вибрав відлюдницьке життя, віддалившись до пустинного місця, званого
            Фола, де провів 40 років у подвизі безмовності, посту, молитви і в
            сльозах покаяння.
          </p>
          <p className={styles.paragraph}>
            Про спосіб життя преподобного Іоана відомо, що харчувався він тим,
            що не заборонялося статутом посницького життя, але – помірно. Не
            проводив ночей без сну, хоча спав не більш того, скільки необхідно
            для підтримки сил, щоб безперестанним неспанням не погубити розуму.
            “Я не постив надмірно, – говорить він сам про себе, – і не вдавався
            до посиленого нічного пильнування, не лежав на землі, але
            упокорювався.., і Господь скоро врятував мене”.
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

"use client";

import styles from "./page.module.css";
import CosmasAndDamian from "./images/unmercenary-healers-cosmas-and-damian.jpg";
import Image from "next/image";
import { useState } from "react";

export default function UnmerchenaryHealersCosmasAndDamian () {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Даром прийняли, даром давайте
        <small>Мф. 10:8</small>
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={CosmasAndDamian}
              alt="Святі Кузьма і Дем'ян, історичний музей міста Сянок на Лемківщині"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Святі Кузьма і Дем&apos;ян, історичний музей міста Сянок на Лемківщині
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
           Святі безсрібники і чудотворці Косма та Даміан жили у III столітті й походили з Малої Азії. Вони були братами, вихованими в християнській вірі матір&apos;ю Феодотією. Здобувши знання лікарського мистецтва, святі присвятили своє життя служінню людям, зцілюючи хворих і допомагаючи немічним. За свою працю вони не брали жодної плати, наслідуючи заповідь Христову про безкорисливу любов до ближнього, за що й отримали ім&apos;я Безсрібники. Господь наділив їх даром чудотворення, і вони зцілювали не лише тілесні недуги, а й укріплювали людей у вірі. Своєю проповіддю та благочестивим життям Косма і Даміан навертали багатьох до християнства. За відмову поклонитися язичницьким богам святі зазнали переслідувань і прийняли мученицьку смерть, залишившись вірними Христові. Церква прославляє Косму та Даміана як безсрібників, чудотворців і небесних покровителів лікарів, хворих та всіх, хто звертається до них із молитвою про зцілення.
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

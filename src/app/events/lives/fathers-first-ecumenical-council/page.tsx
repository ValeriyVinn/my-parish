"use client";

import styles from "./page.module.css";
import Fathers from "./images/fathers-first-ecumenical-council.jpg";
import Image from "next/image";
import { useState } from "react";

export default function FathersFirstEcumenicalCouncilPage() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>
        Вірую в Єдиного Бога — Отця, Сина і Святого Духа
      </h1>
      <article className={styles.article}>
        <figure className={styles.mediaFloat}>
          <div className={styles.imageWrapper}>
            <Image
              src={Fathers}
              alt="Ікона Отців Першого Вселенського Собору"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className={styles.caption}>
            Ікона Отців Першого Вселенського Собору
          </figcaption>
        </figure>
        <div className={!expanded ? styles.preview : ""}>
          <h3 className={styles.historyHeader}>Історія</h3>
          <p className={styles.paragraph}>
            Щороку сьома неділя після Великодня, присвячені вшануванню Святих
            отців Першого Вселенського (Нікейського) Собору — історичної події,
            яка відбулася 325 року в місті Нікея (сучасний Ізник, Туреччина).
            Саме тоді за ініціативи імператора Костянтина Великого був скликаний
            перший Собор єпископів, що тривав понад два місяці та став
            поворотною точкою в історії християнства.
          </p>
          <p className={styles.paragraph}>
            На Собор зібралося 318 єпископів з різних куточків Римської імперії.
            Серед учасників — відомі святі, як-от Миколай Чудотворець, Яків
            Низибійський та Спиридон Триміфунтський. Папу Римського Сильвестра
            представляли два спеціальні легати. Основною темою обговорення стала
            богословська суперечка між єпископом Олександром та пресвітером
            Арієм, що поширював вчення, яке пізніше отримало назву аріанство.
          </p>
          <p className={styles.paragraph}>
            Єресь Арія полягала у запереченні божественної природи Ісуса Христа.
            Арій вважав Сина Божого не істинним Богом, а найвищим творінням
            Господа, наділеним особливою благодаттю завдяки своїй моральній
            досконалості. Таке бачення підривало основи християнського
            віровчення.
          </p>
          <p className={styles.paragraph}>
            Під час Першого Вселенського Собору аріанське вчення було одностайно
            засуджено. Було ухвалено ключовий догмат — про єдиносущність Сина
            Отцю, тобто Ісус Христос визнається не створеним, а рівним Отцю і
            таким, що існував вічно. У результаті богословських дебатів учасники
            Собору сформулювали{" "}
            <span className={styles.mainHeader}>Символ віри</span> — короткий
            виклад основних християнських догм, що складається з семи пунктів.
          </p>
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
      <article className={styles.article}>
        <blockquote className={styles.gospel}>
          <h3 className={styles.gospelTitle}>Символ віри</h3>
          <p className={styles.paragraph}>
            Вірую в Єдиного Бога Отця, Вседержителя, Творця неба і землі, всього
            видимого і невидимого.
          </p>
          <p className={styles.paragraph}>
            І в Єдиного Господа Ісуса Христа, Сина Божого, Єдинородного, що від
            Отця народився перше всіх віків. Світло від Світла, Бога Істинного
            від Бога Істинного, рожденного, несотворенного, єдиносущного з
            Отцем, що через Нього все сталося.
          </p>
          <p className={styles.paragraph}>
            Він для нас, людей, і ради нашого спасіння зійшов з небес, і
            воплотився від Духа Святого і Марії Діви, і став Людиною.
          </p>
          <p className={styles.paragraph}>
            І розп’ятий був за нас при Понтії Пилаті, і страждав, і був
            похований.
          </p>
          <p className={styles.paragraph}>
            І воскрес на третій день, як було написано.
          </p>
          <p className={styles.paragraph}>
            І вознісся на небо, і сидить праворуч Отця.
          </p>
          <p className={styles.paragraph}>
            І знову прийде у славі судити живих і мертвих, і Царству Його не
            буде кінця.
          </p>
          <p className={styles.paragraph}>
            І в Духа Святого, Господа Животворчого, що від Отця походить, що
            Йому з Отцем і Сином однакове поклоніння і однакова слава, що
            говорив через пророків.
          </p>
          <p className={styles.paragraph}>
            В Єдину, Святу, Соборну і Апостольську Церкву.
          </p>
          <p className={styles.paragraph}>
            Визнаю одне хрещення на відпущення гріхів.
          </p>
          <p className={styles.paragraph}>Чекаю воскресіння мертвих.</p>
          <p className={styles.paragraph}>І життя бу́дучого віку. Амінь.</p>
        </blockquote>
      </article>
      <article className={styles.article}></article>
      <article className={styles.article}></article>
    </div>
  );
}

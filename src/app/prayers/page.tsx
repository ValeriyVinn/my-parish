"use client";

import { useState } from "react";
import prayersData from "../../data/prayers.json";
import styles from "./page.module.css";
import type { Prayer } from "@/types/prayers";

// export const metadata = {
//   title: "Молитви | Церковний сайт",
//   description: "Добірка молитов для парафіян нашої церкви.",
// };

export default function PrayersPage() {
  const prayers: Prayer[] = prayersData;

  const [selectedPrayer, setSelectedPrayer] = useState<Prayer>(prayers[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const prayer = prayers.find((p) => p.title === e.target.value);
    if (prayer) setSelectedPrayer(prayer);
  };

  return (
    <section className={`container ${styles.wrapper}`}>
      <div className={styles.prayersHeader}>
        <select onChange={handleChange} className={styles.select}>
          {prayers.map((prayer) => (
            <option key={prayer.title} value={prayer.title}>
              {prayer.title}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.text}>
        {selectedPrayer.article.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </section>
  );
}


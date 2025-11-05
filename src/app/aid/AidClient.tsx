"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function AidClient() {
  const [activeTab, setActiveTab] = useState<"prayers" | "donations">(
    "prayers"
  );

  return (
    <section className={styles.section}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "prayers" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("prayers")}
        >
          Молитви
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "donations" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("donations")}
        >
          Донати
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === "prayers" && (
          <div className={styles.tabPane}>
            <p>
              Дорогі браття і сестри, помолімося за Дем’яна, який прагне закінчення війни.
            </p>
          </div>
        )}

        {activeTab === "donations" && (
          <div className={styles.tabPane}>
            <p>Сторінка в розробці</p>
          </div>
        )}
      </div>
    </section>
  );
}

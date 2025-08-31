import React from "react";
import data from "../../data/marquee.json";
import styles from "./MarqueeAnnouncements.module.css";

/**
 * Бігучий рядок оголошень.
 * Props:
 * - separator: рядок-розділювач між елементами (за замовчуванням " • ")
 * - durationSec: тривалість повного циклу прокрутки (за замовчуванням 20 секунд)
 * - direction: "left" або "right" (за замовчуванням "left")
 * - pauseOnHover: пауза при наведенні миші (true за замовчуванням)
 */
const MarqueeAnnouncements = ({
  separator = " • ",
  durationSec = 120,
  direction = "left",
  pauseOnHover = true,
}) => {
  const items = data.items || [];
  const content = items.join(separator) + separator; // завершуємо розділювачем для рівномірності

  return (
    <div
      className={styles.marquee}
      aria-label="Бігучий рядок оголошень"
      role="region"
    >
      <div
        className={styles.track}
        style={{
          animationDuration: `${durationSec}s`,
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationPlayState: pauseOnHover ? "running" : "running",
        }}
      >
        {/* Дублюємо вміст двічі для безшовної прокрутки */}
        <p className={styles.row}>{content}</p>
        <p className={styles.row} aria-hidden="true">
          {content}
        </p>
      </div>
    </div>
  );
};

export default MarqueeAnnouncements;

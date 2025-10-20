// import data from "../../data/marquee.json";
// import styles from "./MarqueeAnnouncements.module.css";

// /**
//  * Бігучий рядок оголошень.
//  * Props:
//  * - separator: рядок-розділювач між елементами (за замовчуванням " • ")
//  * - durationSec: тривалість повного циклу прокрутки (за замовчуванням 20 секунд)
//  * - direction: "left" або "right" (за замовчуванням "left")
//  * - pauseOnHover: пауза при наведенні миші (true за замовчуванням)
//  */
// const MarqueeAnnouncements = ({
//   separator = " • ",
//   durationSec = 50,
//   direction = "left",
//   pauseOnHover = true,
// }) => {
//   const items = data.items || [];
//   const content = items.join(separator) + separator; // завершуємо розділювачем для рівномірності

//   return (
//     <div
//       className={styles.marquee}
//       aria-label="Бігучий рядок оголошень"
//       role="region"
//     >
//       <div
//         className={styles.track}
//         style={{
//           animationDuration: `${durationSec}s`,
//           animationDirection: direction === "left" ? "normal" : "reverse",
//           animationPlayState: pauseOnHover ? "running" : "running",
//         }}
//       >
//         {/* Дублюємо вміст двічі для безшовної прокрутки */}
//         <p className={styles.row}>{content}</p>
//         <p className={styles.row} aria-hidden="true">
//           {content}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MarqueeAnnouncements;


import { useState } from "react";
import data from "../../data/marquee.json";
import styles from "./MarqueeAnnouncements.module.css";

/**
 * Бігучий рядок цитат або оголошень із можливістю паузи при наведенні.
 */
const MarqueeAnnouncements = ({
  separator = " • ",
  durationSec = 50,
  direction = "left",
  pauseOnHover = true,
}) => {
  const items = data.items || [];
  const [paused, setPaused] = useState(false);

  const handleMouseEnter = () => {
    if (pauseOnHover) setPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setPaused(false);
  };

  return (
    <div
      className={styles.marquee}
      aria-label="Бігучий рядок цитат"
      role="region"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles.track}
        style={{
          animationDuration: `${durationSec}s`,
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[...Array(2)].map((_, idx) => (
          <p
            key={idx}
            className={styles.row}
            aria-hidden={idx === 1}
            dangerouslySetInnerHTML={{
              __html: items.join(separator) + separator,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MarqueeAnnouncements;

// "use client";

// import { useState } from "react";
// import type { Prayer } from "@/types/prayers";
// import styles from "./page.module.css";

// export default function PrayersClient({ prayers }: { prayers: Prayer[] }) {
//   const [selectedPrayer, setSelectedPrayer] = useState<Prayer>(prayers[0]);

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const prayer = prayers.find((p) => p.title === e.target.value);
//     if (prayer) setSelectedPrayer(prayer);
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.prayersHeader}>
//         <select onChange={handleChange} className={styles.select}>
//           {prayers.map((prayer) => (
//             <option key={prayer.id} value={prayer.title}>
//               {prayer.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Відео блок (тільки якщо youtubeId існує і не порожній) */}
//       {selectedPrayer.youtubeId && selectedPrayer.youtubeId.trim() !== "" && (
//         <div className={styles.videoBlock}>
//           <div className={styles.videoWrapper}>
//             <iframe
//               src={`https://www.youtube.com/embed/${selectedPrayer.youtubeId}`}
//               title={selectedPrayer.title}
//               allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
//               allowFullScreen
//             />
//           </div>
//         </div>
//       )}

//       {/* Текст молитви */}
//       <div className={styles.text}>
//         {selectedPrayer.article.map((line, index) => (
//           <p key={index}>{line}</p>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import type { Prayer } from "@/types/prayers";
import styles from "./page.module.css";

export default function PrayersClient({ prayers }: { prayers: Prayer[] }) {
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer>(prayers[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const prayer = prayers.find((p) => p.title === e.target.value);
    if (prayer) setSelectedPrayer(prayer);
  };

  return (
    <div className={styles.wrapper}>
      {/* --- Фіксований або звичайний відеоблок залежно від ширини екрана --- */}
      {selectedPrayer.youtubeId && selectedPrayer.youtubeId.trim() !== "" && (
        <div className={styles.videoBlock}>
          <div className={styles.videoWrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${selectedPrayer.youtubeId}`}
              title={selectedPrayer.title}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* --- Ліва колонка (на планшетах і вище) або блок під відео (на мобільних) --- */}
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.prayersHeader}>
            <select onChange={handleChange} className={styles.select}>
              {prayers.map((prayer) => (
                <option key={prayer.id} value={prayer.title}>
                  {prayer.title}
                </option>
              ))}
            </select>
          </div>

          {/* відео дублюється лише на планшетах, тому приховується на мобільних */}
          {selectedPrayer.youtubeId && selectedPrayer.youtubeId.trim() !== "" && (
            <div className={`${styles.videoBlock} ${styles.videoBlockDesktop}`}>
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${selectedPrayer.youtubeId}`}
                  title={selectedPrayer.title}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>

        {/* --- Права колонка: текст з власним скролом --- */}
        <div className={styles.text}>
          {selectedPrayer.article.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

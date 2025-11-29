// "use client";

// import { useState } from "react";
// import type { Prayer } from "@/types/prayers";
// import styles from "./page.module.css";

// export default function PrayersClient({ prayers }: { prayers: Prayer[] }) {
//   const [selectedPrayer, setSelectedPrayer] = useState<Prayer>(prayers[0]);
//   const [activeVideoIndex, setActiveVideoIndex] = useState(0);

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const prayer = prayers.find((p) => p.title === e.target.value);
//     if (prayer) {
//       setSelectedPrayer(prayer);
//       setActiveVideoIndex(0);
//     }
//   };

//   const currentVideo = selectedPrayer.videos[activeVideoIndex];

//   return (
//     <div className={styles.wrapper}>
//       {/* Мобільне відео */}
//       {currentVideo && (
//         <div className={styles.videoBlock}>
//           <div className={styles.videoWrapper}>
//             <iframe
//               src={`https://www.youtube.com/embed/${currentVideo.id}`}
//               title={currentVideo.title}
//               allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
//               allowFullScreen
//             />
//           </div>

//           {/* Таби під відео на мобільному */}
//           {selectedPrayer.videos.length > 1 && (
//             <div className={styles.tabsMobile}>
//               {selectedPrayer.videos.map((video, index) => (
//                 <button
//                   key={index}
//                   className={`${styles.tab} ${
//                     activeVideoIndex === index ? styles.activeTab : ""
//                   }`}
//                   onClick={() => setActiveVideoIndex(index)}
//                 >
//                   {video.title}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       <div className={styles.content}>
//         <div className={styles.leftColumn}>
//           {/* Select */}
//           <div className={styles.prayersHeader}>
//             <select
//               onChange={handleChange}
//               className={styles.selectMobile}
//               value={selectedPrayer.title}
//             >
//               {prayers.map((prayer) => (
//                 <option key={prayer.id} value={prayer.title}>
//                   {prayer.title}
//                 </option>
//               ))}
//             </select>

//             <select
//               onChange={handleChange}
//               className={styles.selectDecktop}
//               value={selectedPrayer.title}
//             >
//               {prayers.map((prayer) => (
//                 <option key={prayer.id} value={prayer.title}>
//                   {prayer.title}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Десктоп відео */}
//           {currentVideo && (
//             <div className={styles.videoBlockDesktop}>
//               <div className={styles.videoWrapper}>
//                 <iframe
//                   src={`https://www.youtube.com/embed/${currentVideo.id}`}
//                   title={currentVideo.title}
//                   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>

//               {/* Таби під відео десктоп */}
//               {selectedPrayer.videos.length > 1 && (
//                 <div className={styles.tabsDesktop}>
//                   {selectedPrayer.videos.map((video, index) => (
//                     <button
//                       key={index}
//                       className={`${styles.tab} ${
//                         activeVideoIndex === index ? styles.activeTab : ""
//                       }`}
//                       onClick={() => setActiveVideoIndex(index)}
//                     >
//                       {video.title}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Текст молитви */}
//         <div className={styles.text}>
//           {selectedPrayer.article.map((line, index) => (
//             <p key={index}>{line}</p>
//           ))}
//         </div>
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
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const prayer = prayers.find((p) => p.title === e.target.value);
    if (prayer) {
      setSelectedPrayer(prayer);
      setActiveVideoIndex(0);
    }
  };

  const currentVideo = selectedPrayer.videos[activeVideoIndex];

  return (
    <div className={styles.wrapper}>
      {/* Мобільне відео */}
      {currentVideo && (
        <div className={styles.videoBlock}>
          <div className={styles.videoWrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${currentVideo.id}`}
              title={currentVideo.title}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Таби під відео на мобільному (тільки якщо більше 1 відео) */}
          {selectedPrayer.videos.length > 1 && (
            <div className={styles.tabsMobile}>
              {selectedPrayer.videos.map((video, index) => (
                <button
                  key={index}
                  className={`${styles.tab} ${
                    activeVideoIndex === index ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveVideoIndex(index)}
                >
                  {video.title}
                </button>
              ))}
            </div>
          )}

          {/* Фіксований select під відео */}
          <select
            onChange={handleChange}
            className={styles.selectMobileFixed}
            value={selectedPrayer.title}
          >
            {prayers.map((prayer) => (
              <option key={prayer.id} value={prayer.title}>
                {prayer.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Контент тексту */}
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          {/* Десктоп select */}
          <div className={styles.prayersHeader}>
            <select
              onChange={handleChange}
              className={styles.selectDecktop}
              value={selectedPrayer.title}
            >
              {prayers.map((prayer) => (
                <option key={prayer.id} value={prayer.title}>
                  {prayer.title}
                </option>
              ))}
            </select>
          </div>

          {/* Десктоп відео */}
          {currentVideo && (
            <div className={styles.videoBlockDesktop}>
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.id}`}
                  title={currentVideo.title}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Таби десктоп */}
              {selectedPrayer.videos.length > 1 && (
                <div className={styles.tabsDesktop}>
                  {selectedPrayer.videos.map((video, index) => (
                    <button
                      key={index}
                      className={`${styles.tab} ${
                        activeVideoIndex === index ? styles.activeTab : ""
                      }`}
                      onClick={() => setActiveVideoIndex(index)}
                    >
                      {video.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Текст молитви */}
        <div className={styles.text}>
          {selectedPrayer.article.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

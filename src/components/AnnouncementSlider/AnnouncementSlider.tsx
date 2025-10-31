// import React, { useState, useEffect, useCallback } from "react";
// import announcementsData from "../../data/announcements.json";
// import styles from "./AnnouncementSlider.module.css";

// const AnnouncementSlider = () => {
//   const announcements = announcementsData.announcements;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState("right"); // "left" чи "right"
//   const [isVisible, setIsVisible] = useState(true);

//   // Анімація зміни слайда
//   const animateSlide = (getNextIndex) => {
//     setIsVisible(false);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => getNextIndex(prevIndex));
//       setIsVisible(true);
//     }, 600); // має збігатися з transition у CSS
//   };

//   // Наступний слайд
//   const handleNext = useCallback(() => {
//     setDirection("right");
//     animateSlide((prevIndex) =>
//       prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
//     );
//   }, [announcements.length]);

//   // Вибір слайда вручну
//   // const handleSelect = useCallback(
//   //   (index) => {
//   //     if (index > currentIndex) {
//   //       setDirection("right");
//   //     } else if (index < currentIndex) {
//   //       setDirection("left");
//   //     }
//   //     animateSlide(() => index);
//   //   },
//   //   [currentIndex]
//   // );

//   // Автоматична зміна слайда кожні 9 секунд
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 12000);

//     return () => clearInterval(interval);
//   }, [handleNext]);

//   return (
//     <div className={styles.slider}>
//       {/* Текст оголошення з fade+slide */}
//       <p
//         className={`${styles.text} ${
//           isVisible
//             ? styles.textVisible
//             : direction === "right"
//             ? styles.textHiddenLeft
//             : styles.textHiddenRight
//         }`}
//       >
//         {announcements[currentIndex]}
//       </p>

//       {/* Навігаційні крапки */}
//       {/* <div className={styles.dots}>
//         {announcements.map((_, index) => (
//           <button
//             key={index}
//             className={`${styles.dot} ${
//               index === currentIndex ? styles.dotActive : ""
//             }`}
//             onClick={() => handleSelect(index)}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default AnnouncementSlider;


"use client";

import React, { useState, useEffect, useCallback } from "react";
import announcementsData from "../../data/announcements.json";
import styles from "./AnnouncementSlider.module.css";

type Direction = "left" | "right";

const AnnouncementSlider: React.FC = () => {
  const announcements: string[] = (announcementsData as { announcements: string[] }).announcements;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<Direction>("right");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const animateSlide = (getNextIndex: (prevIndex: number) => number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => getNextIndex(prevIndex));
      setIsVisible(true);
    }, 600); // має збігатися з transition у CSS
  };

  const handleNext = useCallback(() => {
    setDirection("right");
    animateSlide((prevIndex) =>
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
  }, [announcements.length]);

  // Автоматична зміна слайда кожні 12 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 12000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className={styles.slider}>
      <p
        className={`${styles.text} ${
          isVisible
            ? styles.textVisible
            : direction === "right"
            ? styles.textHiddenLeft
            : styles.textHiddenRight
        }`}
      >
        {announcements[currentIndex]}
      </p>

      {/* Навігаційні крапки можна розкоментувати та типізувати */}
    </div>
  );
};

export default AnnouncementSlider;

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

  // Автоматична зміна слайда кожні 15 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000);
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

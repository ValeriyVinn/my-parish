"use client";

import { useState } from "react";
import data from "../../data/marquee.json";
import styles from "./MarqueeAnnouncements.module.css";

interface MarqueeAnnouncementsProps {
  separator?: string;
  durationSec?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

const MarqueeAnnouncements: React.FC<MarqueeAnnouncementsProps> = ({
  separator = "  •  ",
  durationSec = 60,
  direction = "left",
  pauseOnHover = true,
}) => {
  const items: string[] = (data as { items: string[] }).items || [];
  const [paused, setPaused] = useState<boolean>(false);

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

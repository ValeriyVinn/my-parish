"use client";

import { useState } from "react";
import css from "./Hero.module.css";
import AnnouncementSlider from "../AnnouncementSlider/AnnouncementSlider";
import Image from "next/image";

const Hero: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const handleMapInteraction = () => {
    if (!showOverlay) return;

    setIsFading(true);

    setTimeout(() => {
      setShowOverlay(false);
    }, 400); // час збігається з CSS-анімацією
  };

  return (
    <section className={css.hero}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1765108292165!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFJfcmFnamdF!2m2!1d49.23535792138819!2d28.40799720221045!3f181.88945890502413!4f5.391517585817354!5f0.7820865974627469"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {showOverlay && (
        <div
          className={`${css.overlay} ${isFading ? css.fadeOut : ""}`}
          onClick={handleMapInteraction}
        >
          <Image
            src="/images/hero-image1.jpg"
            alt="Розпис козирка храму"
            fill
            className={css.overlayImage}
            priority
          />
          <div className={css.sliderWrapper}>
            <AnnouncementSlider />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

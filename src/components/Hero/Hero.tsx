"use client";

import { useState } from "react";
import css from "./Hero.module.css";
// import MarqueeAnnouncements from "../MarqueeAnnouncements/MarqueeAnnouncements";
import AnnouncementSlider from "../AnnouncementSlider/AnnouncementSlider";

const Hero: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);

  const handleMapInteraction = () => {
    if (showOverlay) setShowOverlay(false);
  };

  return (
    <section className={css.hero}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1756466151546!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFJfdGFURkE.!2m2!1d49.23546411902534!2d28.40801582095849!3f197.5982378084684!4f-0.7682893815250225!5f0.803669135010503"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onClick={handleMapInteraction}
        title="Google Map"
      />

      {showOverlay && (
        <div className={css.overlay} onClick={handleMapInteraction}>
          {/* <div className={css.marqueeWrapper}>
            <MarqueeAnnouncements />
          </div> */}
          <div className={css.sliderWrapper}>
            <AnnouncementSlider />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;



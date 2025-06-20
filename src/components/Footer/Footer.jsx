import { useState, useEffect } from "react";
import css from "./Footer.module.css";

export default function Footer() {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (showMap) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMap]);

  return (
    <footer className={css.footer}>
      <p>м.Вінниця, Хмельницьке шосе, 145</p>
      <button onClick={() => setShowMap(true)} className={css.mapButton}>
        Показати на мапі
      </button>

      {showMap && (
        <div className={css.modalOverlay} onClick={() => setShowMap(false)}>
          <div
            className={css.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.15857386175!2d28.40549637648626!3d49.23548267138582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5d0a004f37bb%3A0x290314483fc1f0bc!2z0KXRgNCw0Lwg0L_RgNC_LiDQodC10YDQsNGE0LjQvNCwINCh0LDRgNC-0LLRgdGM0LrQvtCz0L4!5e0!3m2!1suk!2sua!4v1750442457975!5m2!1suk!2sua"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <button
              onClick={() => setShowMap(false)}
              className={css.closeButton}
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

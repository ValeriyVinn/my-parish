import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

export default function Modal({ children, onClose }) {
  useEffect(() => {
    // Додаємо клас і блокуємо скрол
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";

    return () => {
      // При закритті — прибираємо
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.content}>
        {children}
        <button className={css.closeBtn} onClick={onClose}>
          Закрити
        </button>
      </div>
    </div>,
    modalRoot
  );
}

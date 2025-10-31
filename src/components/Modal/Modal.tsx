"use client";

import { useLayoutEffect, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  const [modalContainer] = useState(() => document.createElement("div"));

  useLayoutEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return;

    modalRoot.appendChild(modalContainer);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
      modalRoot.removeChild(modalContainer);
    };
  }, [modalContainer]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.content}>
        <button className={css.closeBtn} onClick={onClose}>
          Закрити
        </button>
        {children}
      </div>
    </div>,
    modalContainer
  );
}
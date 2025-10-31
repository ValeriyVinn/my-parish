"use client";

import { useLayoutEffect, useState } from "react";
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

    // Блокування прокрутки
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
      modalRoot.removeChild(modalContainer);
    };
  }, [modalContainer]);

  // Тепер можна обійти mounted-стан:
  return createPortal(
    <div className={css.backdrop}>
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

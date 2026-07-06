"use client";

import { useEffect, useRef, useState } from "react";

import type { Fast } from "@/lib/calendar/types";

import FastButton from "./FastButton";
import FastPopup from "./FastPopup";

import styles from "./FastInfo.module.css";

type FastInfoProps = {
  fast: Fast | null;
};

export default function FastInfo({ fast }: FastInfoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (!isOpen) return;

  function handleClick(event: MouseEvent) {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClick);

  return () => {
    document.removeEventListener("mousedown", handleClick);
  };
}, [isOpen]);

  if (!fast) return null;

  return (
    <div
      ref={wrapperRef}
      className={
        fast.level === "strict"
          ? styles.strictFast
          : styles.fast
      }
    >
      <FastButton
        fast={fast}
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && <FastPopup fast={fast} />}
    </div>
  );
}
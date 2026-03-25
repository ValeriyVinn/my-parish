"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import css from "./page.module.css";

const images = Array.from({ length: 36 }, (_, i) =>
  `/assets/history/${String(i + 1).padStart(3, "0")}.jpg`
);

export default function HistoryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <h1 className={css.title}>Історія нашої Церкви</h1>

      <section className={css.gallery}>
        {images.map((src) => (
          <button
            key={src}
            className={css.thumb}
            onClick={() => setActiveImage(src)}
          >
            <Image
              src={src}
              alt="Історія храму"
              fill
              sizes="(max-width: 640px) 50vw,
                     (max-width: 1024px) 33vw,
                     25vw"
            />
          </button>
        ))}
      </section>

      {activeImage && (
        <Modal onClose={() => setActiveImage(null)}>
          <div className={css.modalImage}>
            <Image
              src={activeImage}
              alt="Історія храму"
              fill
              sizes="90vw"
            />
          </div>
        </Modal>
      )}
    </>
  );
}

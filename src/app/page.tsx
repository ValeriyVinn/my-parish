"use client";

import { useState } from "react";
import Image from "next/image";
import newsData from "@/data/news.json" with { type: "json" };

import css from "./page.module.css";
import Modal from "@/components/Modal/Modal";
import Hero from "@/components/Hero/Hero";

type NewsItem = {
  id: number; // 👈 виправлено
  title: string;
  type: "video" | "images";
  youtubeId?: string;
  description: string;
  images?: {
    thumb: string;
    full: string;
  }[];
};

type NewsBlock = {
  date: string; // 👈 додано
  events: NewsItem[];
};

export default function NewsPage() {
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<Record<string, number>>(
    {},
  );

  const typedNewsData = newsData as unknown as NewsBlock[];
  const reversedData: NewsBlock[] = [...typedNewsData]
    .reverse()
    .slice(0, visibleCount);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 5);

  const toggleReadMore = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleImageClick = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  const handlePrev = (id: string, imagesLength: number) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [id]: (prev[id] > 0 ? prev[id] : imagesLength) - 1,
    }));
  };

  const handleNext = (id: string, imagesLength: number) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [id]: (prev[id] + 1 || 1) % imagesLength,
    }));
  };

  return (
    <div className="container">
      <section className={css.section}>
        <Hero />
        {/* <p className={css.greeting}>
         Шановна матінко Оксано! 
Щиро вітаємо Вас із Днем народження! Нехай Милосердний Господь щедро благословляє Вас, укріплює тілесні й духовні сили, дарує міцне здоров&apos;я, мир, радість і Свою невичерпну благодатну допомогу. Дякуємо Вам за Вашу доброту, щиру турботу, молитовну підтримку та віддане служіння Церкві. Нехай Господь винагородить Вас за всі добрі труди, а Пресвята Богородиця завжди покриває Своїм святим покровом. Многая і благая літа!
        </p> */}
        {/* <div className={css.greetin}>
          <h3>Упокоївся у Бозі Святійший Патріарх Філарет</h3>
          <p>
            20 березня 2026 року від наслідків загострення хронічних хвороб на
            98-му році життя, 77-му році чернецтва та на 65-му році архієрейства
            упокоївся у Бозі Почесний Патріарх Київський і всієї Руси-України
            Філарет.
          </p>
          <p>
            Підносимо щирі молитви за упокій його душі та висловлюємо співчуття
            всій повноті Церкви.
          </p>
        </div> */}

        {/* --- Новини --- */}
        {reversedData.map((block, blockIndex) => (
          <div key={blockIndex}>
            {block.events.map((item) => {
              const isExpanded = expanded[item.id];
              const shouldTruncate =
                item.description && item.description.length > 200;
              const currentIndex = carouselIndex[item.id] || 0;

              return (
                <article key={item.id}>
                  <h2 className={css.heading}>{item.title}</h2>
                  <div className={css.card}>
                    <div>
                      <div className={css.descriptionWrapper}>
                        {item.type === "video" && (
                          <div className={css.floatVideo}>
                            <div className={css.videoWrapper}>
                              <iframe
                                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                                title={item.title}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        )}

                        {item.type === "video" && (
                          <div
                            className={`${css.description} ${
                              isExpanded ? css.expanded : ""
                            }`}
                          >
                            {item.description
                              .split("\n")
                              .map((para: string, idx: number) => (
                                <p key={idx}>{para}</p>
                              ))}
                          </div>
                        )}

                        {item.type === "video" && shouldTruncate && (
                          <button
                            onClick={() => toggleReadMore(String(item.id))}
                            className={css.readMoreBtn}
                          >
                            {isExpanded ? "Згорнути" : "Читати далі..."}
                          </button>
                        )}
                      </div>
                    </div>

                    {item.type === "images" && item.images && (
                      <div className={css.imageBlock}>
                        <div className={css.carouselContainer}>
                          <button
                            className={`${css.carouselBtn} ${css.left}`}
                            onClick={() =>
                              handlePrev(String(item.id), item.images!.length)
                            }
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                d="M15 18l-6-6 6-6"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>

                          <Image
                            src={item.images[currentIndex].thumb}
                            alt={`Превʼю ${currentIndex + 1}`}
                            width={400}
                            height={300}
                            className={css.thumbnail}
                            onClick={() =>
                              handleImageClick(item.images![currentIndex].full)
                            }
                          />

                          <button
                            className={`${css.carouselBtn} ${css.right}`}
                            onClick={() =>
                              handleNext(String(item.id), item.images!.length)
                            }
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                d="M9 6l6 6-6 6"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className={css.imgDescription}>
                          {item.description
                            .split("\n")
                            .map((para: string, idx: number) => (
                              <p key={idx}>{para}</p>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ))}

        {visibleCount < newsData.length && (
          <button onClick={handleLoadMore} className={css.loadMore}>
            Завантажити ще
          </button>
        )}
      </section>

      {modalImage && (
        <Modal onClose={closeModal}>
          <Image
            src={modalImage}
            alt="Повне зображення"
            width={800}
            height={600}
            className={css.fullImage}
          />
        </Modal>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import newsData from "@/data/news.json" assert { type: "json" };

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
    {}
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

        {/* --- Тексти оголошень --- */}
        {/* <p className={css.advertisement}>
          Слава Ісусу Христу! Дорога громадо, наші захисники мають гостру
          потребу в засобах гігієни (вологі серветки, сухий душ та ін.), прошу
          долучіться до доброї справи, приносьте до церкви. Щиро дякую за вашу
          допомогу.
        </p>
        <p className={css.advertisement}>
          Дорогі браття і сестри, збираємо побутові газові балони б/у для
          виготовлення обігрівачів на дровах (буржуйок). Для наших захисників.
        </p>
        <p className={css.advertisement}>
          Не забуваймо про наших мужніх воїнів, які віддають за нас своє життя.
          Зараз є гостра необхідність у речах: ковдри, подушки, простині,
          підодіяльники, шкарпетки, спідня білизна — усе чисте. Пункт збору ви
          знаєте. Нехай Господь благословить!
        </p>
        <p className={css.advertisement}>
          Потрібен оператор твердопаливного котла (кочегар). Житлом і
          харчуванням забезпечуємо. Подробиці за тел: (097) 409-99-13
        </p> */}

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
                    {item.type === "video" && (
                      <div className={css.videoBlock}>
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

                    {item.type === "images" && item.images && (
                      <div className={css.videoBlock}>
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
                      </div>
                    )}

                    <div className={css.descriptionWrapper}>
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

                      {shouldTruncate && (
                        <button
                          onClick={() => toggleReadMore(String(item.id))}
                          className={css.readMoreBtn}
                        >
                          {isExpanded ? "Згорнути" : "Читати далі..."}
                        </button>
                      )}
                    </div>
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

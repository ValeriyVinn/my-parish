import { useState } from "react";
import newsData from "../../data/news.json";
import css from "./News.module.css";
import Modal from "../Modal/Modal.jsx";
// import AnnouncementSlider from "../AnnouncementSlider/AnnouncementSlider.jsx";
// import MarqueeAnnouncements from "../MarqueeAnnouncements/MarqueeAnnouncements.jsx";
import Hero from "../Hero/Hero.jsx";

export default function News() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [expanded, setExpanded] = useState({});
  const [modalImage, setModalImage] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState({}); // об'єкт для кожної галереї

  const reversedData = [...newsData].reverse().slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleImageClick = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handlePrev = (id, imagesLength) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [id]: (prev[id] > 0 ? prev[id] : imagesLength) - 1,
    }));
  };

  const handleNext = (id, imagesLength) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [id]: (prev[id] + 1 || 1) % imagesLength,
    }));
  };

  return (
    <div className="container">
      <section className={css.section}>
        {/* <h1 className={css.title}>Оживи Душу свою, щоб ніколи не втрачати кого любиш</h1> */}
        {/* <MarqueeAnnouncements
          separator=" • "
          durationSec={20}
          direction="left" // або "right"
          pauseOnHover={true}
        />
        <AnnouncementSlider /> */}
        <Hero />
        {/* <p className={css.greeting}>
          Шановний отець Олександр, прийміть наші щирі вітання з Днем
          народження! Дякуємо Вам за Ваше служіння, молитви та підтримку.
          Бажаємо Вам здоров'я, Божого благословення, духовної сили та
          невичерпного натхнення у Вашій важливій місії.
        </p> */}
        <p className={css.advertisement}>
          Слава Ісусу Христу! Дорога громадо, наші захисники мають гостру
          потребу в засобах гігієни (вологі серветки, сухий душ та ін.), прошу
          долучіться до доброі справи, приносьте до церкви. Щиро дякую за вашу
          допомогу.
        </p>
        <p className={css.advertisement}>
          Дорогі браття і сестри,збираємо побутові газові балони б/у ,для
          виготовлення обігрівачів на дровах (буржуйок). Для наших захисників
        </p>
        <p className={css.advertisement}>
          Не забуваймо про наших мужніх воїнів, які віддають за нас своє життя.
          Зараз є гостра необхідність в таких речах: ковдри, подушки, простині,
          підодіяльники, шкарпетки, спідні….., все це може бути не нове, але
          чисте. Пункт збору ви знаєте. Нехай Господь всіх блогословить!
        </p>

        <p className={css.advertisement}>
          Потрібен оператор твердопаливного котла (кожегар). Житлом і
          харчуванням забезпечуєм. Подробиці за тел: (097)409-99-13
        </p>

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
                            // frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}

                    {item.type === "images" && (
                      <div className={css.videoBlock}>
                        <div className={css.carouselContainer}>
                          <button
                            className={`${css.carouselBtn} ${css.left}`}
                            onClick={() =>
                              handlePrev(item.id, item.images.length)
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
                          <img
                            src={item.images[currentIndex].thumb}
                            alt={`Превʼю ${currentIndex + 1}`}
                            className={css.thumbnail}
                            onClick={() =>
                              handleImageClick(item.images[currentIndex].full)
                            }
                          />
                          <button
                            className={`${css.carouselBtn} ${css.right}`}
                            onClick={() =>
                              handleNext(item.id, item.images.length)
                            }
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
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
                        {item.description.split("\n").map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                      {shouldTruncate && (
                        <button
                          onClick={() => toggleReadMore(item.id)}
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
          <img
            src={modalImage}
            alt="Повне зображення"
            className={css.fullImage}
          />
        </Modal>
      )}
    </div>
  );
}

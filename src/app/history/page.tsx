"use client";

import React, { useState } from "react";
import Modal from "@/components/Modal/Modal";
import styles from "./page.module.css";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

type EventPosition = "top" | "bottom";

type Event = {
  date: string;
  type: "youtube" | "gallery";
  position?: EventPosition; // тільки для youtube
  youtubeId?: string;
  media?: MediaItem[];
};

const events: Event[] = [
  {
    date: "Художник Іван Петрович Грищук",
    type: "youtube",
    position: "top",
    youtubeId: "dvy47iFfhAA",
  },
  {
    date: "'СПОВІДЬ' авторська програма Олега Володарського 11.05.2021",
    type: "youtube",
    position: "top",
    youtubeId: "RcqlodEGuZs",
  },
  {
    date: "Розпис Храму 20 липня - 31 серпня 2021 р.",
    type: "gallery",
    media: [
      {
        type: "image",
        src: "/assets/churchpainting/01-20july-31august-2021/01.jpg",
        alt: "Фото 1",
      },

      {
        type: "video",
        src: "/assets/churchpainting/01-20july-31august-2021/02.mp4",
      },

      {
        type: "video",
        src: "/assets/churchpainting/01-20july-31august-2021/03.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/01-20july-31august-2021/04.mp4",
      },

      {
        type: "video",
        src: "/assets/churchpainting/01-20july-31august-2021/05.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/01-20july-31august-2021/06.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/01-20july-31august-2021/07.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/01-20july-31august-2021/08.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/01-20july-31august-2021/01.mp4",
      },
    ],
  },
  {
    date: "Розпис Храму 06 вересня - 18 жовтня 2021 р.",
    type: "gallery",

    media: [
      {
        type: "image",
        src: "/assets/churchpainting/03-21october-2021/01.jpg",
        alt: "Фото 1",
      },

      {
        type: "video",
        src: "/assets/churchpainting/03-21october-2021/01.mp4",
      },

      {
        type: "video",
        src: "/assets/churchpainting/03-21october-2021/02.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/03-21october-2021/03.mp4",
      },

      {
        type: "video",
        src: "/assets/churchpainting/03-21october-2021/04.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/03-21october-2021/05.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/03-21october-2021/06.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/03-21october-2021/07.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/03-21october-2021/08.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/03-21october-2021/09.mp4",
      },
    ],
  },
  {
    date: "Розпис Храму 21 жовтня 2021р.",
    type: "gallery",

    media: [
      {
        type: "video",
        src: "/assets/churchpainting/02-06september-18october-2021/09.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/02-06september-18october-2021/10.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/02-06september-18october-2021/01.mp4",
      },

      {
        type: "video",
        src: "/assets/churchpainting/02-06september-18october-2021/02.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/02-06september-18october-2021/03.mp4",
      },

      {
        type: "video",
        src: "/assets/churchpainting/02-06september-18october-2021/04.mp4",
      },

      {
        type: "video",
        src: "/assets/churchpainting/02-06september-18october-2021/05.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/02-06september-18october-2021/06.mp4",
      },

      {
        type: "video",
        src: "/assets/churchpainting/02-06september-18october-2021/07.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/02-06september-18october-2021/08.mp4",
      },

      {
        type: "video",
        src: "/assets/churchpainting/02-06september-18october-2021/11.mp4",
      },
    ],
  },
  {
    date: "Розпис Храму 03 листопада 2021р - 06 січня 2022р.",
    type: "gallery",
    media: [
      {
        type: "image",
        src: "/assets/churchpainting/04-03november2021-06january2022/01.jpg",
        alt: "Фото 1",
      },
      {
        type: "image",
        src: "/assets/churchpainting/04-03november2021-06january2022/02.jpg",
        alt: "Фото 1",
      },
      {
        type: "video",
        src: "/assets/churchpainting/04-03november2021-06january2022/01.mp4",
      },

      {
        type: "video",
        src: "/assets/churchpainting/04-03november2021-06january2022/02.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/04-03november2021-06january2022/03.mp4",
      },

      {
        type: "video",
        src: "/assets/churchpainting/04-03november2021-06january2022/04.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/04-03november2021-06january2022/05.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/04-03november2021-06january2022/06.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/04-03november2021-06january2022/07.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/04-03november2021-06january2022/08.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/04-03november2021-06january2022/09.mp4",
      },
      {
        type: "video",
        src: "/assets/churchpainting/04-03november2021-06january2022/10.mp4",
      },
    ],
  },
  // {
  //   date: "Розпис Храму 2021-2022 рр.",
  //   type: "gallery",
  //   media: [
  //     {
  //       type: "image",
  //       src: "/assets/churchpainting/2021-10-21/1.jpg",
  //       alt: "Фото 1",
  //     },
  //     { type: "video", src: "/assets/churchpainting/2021-10-21/4.mp4" },
  //     { type: "video", src: "/assets/churchpainting/2021-10-21/3.mp4" },
  //     {
  //       type: "image",
  //       src: "/assets/churchpainting/2021-10-21/2.jpg",
  //       alt: "Фото 2",
  //     },
  //     { type: "video", src: "/assets/churchpainting/2021-10-21/8.mp4" },
  //     { type: "video", src: "/assets/churchpainting/2021-10-21/9.mp4" },
  //     {
  //       type: "image",
  //       src: "/assets/churchpainting/2021-10-21/4.jpg",
  //       alt: "Фото 4",
  //     },
  //     {
  //       type: "image",
  //       src: "/assets/churchpainting/2021-10-21/5.jpg",
  //       alt: "Фото 5",
  //     },
  //     {
  //       type: "image",
  //       src: "/assets/churchpainting/2021-10-21/6.jpg",
  //       alt: "Фото 6",
  //     },
  //     {
  //       type: "image",
  //       src: "/assets/churchpainting/2021-10-21/7.jpg",
  //       alt: "Фото 7",
  //     },
  //     { type: "video", src: "/assets/churchpainting/2021-10-21/1.mp4" },
  //     { type: "video", src: "/assets/churchpainting/2021-10-21/2.mp4" },
  //     { type: "video", src: "/assets/churchpainting/2021-10-21/5.mp4" },
  //     { type: "video", src: "/assets/churchpainting/2021-10-21/6.mp4" },
  //     { type: "video", src: "/assets/churchpainting/2021-10-21/7.mp4" },
  //   ],
  // },

  {
    date: "Розпис Храму 28 жовтня 2025 р. - Ч. 1",
    type: "youtube",
    position: "bottom",
    youtubeId: "nfxQjtu5Pwo",
  },
  {
    date: "Розпис Храму 28 жовтня 2025 р. - Ч. 2",
    type: "youtube",
    position: "bottom",
    youtubeId: "CRFOhqtg_yE",
  },
];

const Timeline: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const renderYoutubeRow = (position: "top" | "bottom") => (
    <div className={styles.youtubeRow}>
      {events
        .filter(
          (event) => event.type === "youtube" && event.position === position
        )
        .map((event, idx) => (
          <div key={idx} className={styles.eventYoutube}>
            <h3 className={styles.eventDate}>{event.date}</h3>
            <div className={styles.youtubeWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${event.youtubeId}`}
                title={event.date}
                allowFullScreen
              />
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <div className={`${styles.timeline} container`}>
      <h1 className={styles.paintingHeader}>Розпис Храму</h1>

      {/* 🔝 YouTube зверху */}
      {renderYoutubeRow("top")}

      {/* 🖼 Галереї */}
      {events
        .filter((event) => event.type === "gallery")
        .map((event, idx) => (
          <div key={idx} className={styles.eventGallery}>
            <h3 className={styles.eventDate}>{event.date}</h3>

            <div className={styles.galleryGrid}>
              {event.media?.map((m, i) => (
                <div
                  key={i}
                  className={styles.galleryItem}
                  onClick={() => setSelectedMedia(m)}
                >
                  {m.type === "image" ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.src} alt={m.alt || "media"} />
                  ) : (
                    <div className={styles.videoWrapper}>
                      <video src={m.src} muted />
                      <span className={styles.videoBadge}>Video</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

      {/* 🔽 YouTube в кінці сторінки */}
      {renderYoutubeRow("bottom")}

      {/* 🔍 Модалка */}
      {selectedMedia && (
        <Modal onClose={() => setSelectedMedia(null)}>
          {selectedMedia.type === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={selectedMedia.src} alt={selectedMedia.alt || "media"} />
          ) : (
            <video src={selectedMedia.src} controls autoPlay muted />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Timeline;

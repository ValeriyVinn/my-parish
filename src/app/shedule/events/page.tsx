
// "use client";

// import React, { useState } from "react";
// import Modal from "@/components/Modal/Modal";
// import styles from "./page.module.css";

// type MediaItem = {
//   type: "image" | "video";
//   src: string;
//   alt?: string;
// };

// type Event = {
//   date: string;
//   type: "youtube" | "gallery";
//   youtubeId?: string;
//   media?: MediaItem[];
// };

// const events: Event[] = [
//   {
//     date: "2023-01-01",
//     type: "youtube",
//     youtubeId: "dvy47iFfhAA", // приклад
//   },
//   {
//     date: "2021-11-05",
//     type: "youtube",
//     youtubeId: "RcqlodEGuZs",
//   },
//   {
//     date: "2023-03-01",
//     type: "gallery",
//     media: [
//       { type: "image", src: "/assets/churchpainting/2021-10-21/1.jpg", alt: "Фото 1" },
//       { type: "video", src: "/assets/churchpainting/2021-10-21/4.mp4" },
//       { type: "video", src: "/assets/churchpainting/2021-10-21/3.mp4" },
//       { type: "image", src: "/assets/churchpainting/2021-10-21/2.jpg", alt: "Фото 2" },
//       { type: "image", src: "/assets/churchpainting/2021-10-21/3.jpg", alt: "Фото 3" },
//       { type: "image", src: "/assets/churchpainting/2021-10-21/4.jpg", alt: "Фото 4" },
//       { type: "image", src: "/assets/churchpainting/2021-10-21/5.jpg", alt: "Фото 5" },
//       { type: "image", src: "/assets/churchpainting/2021-10-21/6.jpg", alt: "Фото 6" },
//       { type: "image", src: "/assets/churchpainting/2021-10-21/7.jpg", alt: "Фото 7" },
//       { type: "video", src: "/assets/churchpainting/2021-10-21/1.mp4" },
//       { type: "video", src: "/assets/churchpainting/2021-10-21/2.mp4" },
//       { type: "video", src: "/assets/churchpainting/2021-10-21/5.mp4" },
//       { type: "video", src: "/assets/churchpainting/2021-10-21/6.mp4" },
//       { type: "video", src: "/assets/churchpainting/2021-10-21/7.mp4" },
//       { type: "video", src: "/assets/churchpainting/2021-10-21/8.mp4" },
//       { type: "video", src: "/assets/churchpainting/2021-10-21/9.mp4" },
//     ],
//   },
//   {
//     date: "2023-04-01",
//     type: "gallery",
//     media: [
//       { type: "image", src: "/assets/data2/photo1.jpg" },
//       { type: "video", src: "/assets/data2/video1.mp4" },
//     ],
//   },
//   {
//     date: "2023-05-01",
//     type: "gallery",
//     media: [
//       { type: "image", src: "/assets/data3/photo1.jpg" },
//       { type: "image", src: "/assets/data3/photo2.jpg" },
//     ],
//   },
// ];

// const Timeline: React.FC = () => {
//   const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

//   return (
// <div className={styles.timeline}>
//   <h1 className={styles.paintingHeader}>Розпис Храму</h1>
//   <div className={styles.youtubeRow}>
//     {events
//       .filter((event) => event.type === "youtube")
//       .map((event, idx) => (
//         <div key={idx} className={styles.eventYoutube}>
//           <h3 className={styles.eventDate}>{event.date}</h3>
//           <div className={styles.youtubeWrapper}>
//             <iframe
//               src={`https://www.youtube.com/embed/${event.youtubeId}`}
//               title="YouTube video"
//               allowFullScreen
//             />
//           </div>
//         </div>
//       ))}
//   </div>

//   {events
//     .filter((event) => event.type === "gallery")
//     .map((event, idx) => (
//       <div key={idx} className={styles.eventGallery}>
//         <h3 className={styles.eventDate}>{event.date}</h3>
//         <div className={styles.galleryGrid}>
//           {event.media?.map((m, i) => (
//             <div
//               key={i}
//               className={styles.galleryItem}
//               onClick={() => setSelectedMedia(m)}
//             >
//               {m.type === "image" ? (
//                 <img src={m.src} alt={m.alt || "media"} />
//               ) : (
//                 <video src={m.src} />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     ))}

//   {selectedMedia && (
//     <Modal onClose={() => setSelectedMedia(null)}>
//       {selectedMedia.type === "image" ? (
//         <img src={selectedMedia.src} alt={selectedMedia.alt || "media"} />
//       ) : (
//         <video src={selectedMedia.src} controls autoPlay />
//       )}
//     </Modal>
//   )}
// </div>
//   );
// };

// export default Timeline;


export default function EventsPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Події</h1>
      <p>Сторінка в розробці</p>
    </div>
  );
}
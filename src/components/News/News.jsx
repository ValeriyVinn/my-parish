// import { useState } from "react";
// import newsData from "../../data/news.json";
// import css from "./News.module.css";

// export default function News() {
//   const [visibleCount, setVisibleCount] = useState(5);
//   const visibleNews = newsData.slice(0, visibleCount);

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => prev + 5);
//   };

//   return (
//     <section className={css.section}>
//       <h1 className={css.title}>Новини</h1>
//       {visibleNews.map((item) => (
//         <article key={item.id} className={css.card}>
//           <div className={css.videoBlock}>
//             <h2 className={css.heading}>{item.title}</h2>
//             <div className={css.videoWrapper}>
//               <iframe
//                 src={`https://www.youtube.com/embed/${item.youtubeId}`}
//                 title={item.title}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//           <p className={css.description}>{item.description}</p>
//         </article>
//       ))}

//       {visibleCount < newsData.length && (
//         <button onClick={handleLoadMore} className={css.loadMore}>
//           Завантажити ще
//         </button>
//       )}
//     </section>
//   );
// }

// import { useState } from "react";
// import newsData from "../../data/news.json";
// import css from "./News.module.css";

// export default function News() {
//   const [visibleCount, setVisibleCount] = useState(5);
//   const [expanded, setExpanded] = useState({}); // обʼєкт для кожної статті

//   const visibleNews = newsData.slice(0, visibleCount);

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => prev + 5);
//   };

//   const toggleReadMore = (id) => {
//     setExpanded((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   return (
//     <section className={css.section}>
//       <div></div>
//       <h1 className={css.title}>Новини</h1>
//       {visibleNews.map((item) => (
//         <article key={item.id} className={css.card}>
//           <div className={css.videoBlock}>
//             <h2 className={css.heading}>{item.title}</h2>
//             <div className={css.videoWrapper}>
//               <iframe
//                 src={`https://www.youtube.com/embed/${item.youtubeId}`}
//                 title={item.title}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>


          

//           <div
//             className={`${css.description} ${
//               expanded[item.id] ? css.expanded : ""
//             }`}
//           >
//             {item.description}
//           </div>

//           {item.description.length > 200 && (
//             <button
//               onClick={() => toggleReadMore(item.id)}
//               className={css.readMoreBtn}
//             >
//               {expanded[item.id] ? "Згорнути" : "Читати далі..."}
//             </button>
//           )}
//         </article>
//       ))}

//       {visibleCount < newsData.length && (
//         <button onClick={handleLoadMore} className={css.loadMore}>
//           Завантажити ще
//         </button>
//       )}
//     </section>
//   );
// }


import { useState } from "react";
import newsData from "../../data/news.json";
import css from "./News.module.css";

export default function News() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [expanded, setExpanded] = useState({});

  const visibleNews = newsData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "… ";
  };

  return (
    <section className={css.section}>
      <h1 className={css.title}>Новини</h1>
      {visibleNews.map((item) => {
        const isExpanded = expanded[item.id];
        const shouldTruncate = item.description.length > 300;

        return (
          <article key={item.id} className={css.card}>
            <div className={css.videoBlock}>
              <h2 className={css.heading}>{item.title}</h2>
              <div className={css.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <p className={css.description}>
              {isExpanded || !shouldTruncate
                ? item.description
                : truncate(item.description, 300)}
              {shouldTruncate && (
                <button
                  onClick={() => toggleReadMore(item.id)}
                  className={css.inlineButton}
                >
                  {isExpanded ? " Згорнути" : " Читати далі..."}
                </button>
              )}
            </p>
          </article>
        );
      })}

      {visibleCount < newsData.length && (
        <button onClick={handleLoadMore} className={css.loadMore}>
          Завантажити ще
        </button>
      )}
    </section>
  );
}

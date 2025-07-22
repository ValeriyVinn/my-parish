import { useEffect, useState } from "react";
import data from "../../data/calendar.json";
import css from "./Calendar.module.css";

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

function getWeekdayIndex(day) {
  return daysOfWeek.indexOf(day);
}

function groupByWeeks(items) {
  const weeks = [];
  let currentWeek = new Array(7).fill(null);

  items.forEach((item, index) => {
    const dayIndex = getWeekdayIndex(item.day);

    if (currentWeek[dayIndex] !== null) {
      weeks.push(currentWeek);
      currentWeek = new Array(7).fill(null);
    }

    currentWeek[dayIndex] = item;

    if (dayIndex === 6 || index === items.length - 1) {
      weeks.push(currentWeek);
      currentWeek = new Array(7).fill(null);
    }
  });

  return weeks;
}

export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const now = new Date();
    const currentMonth = now.toLocaleString("uk-UA", { month: "long" });
    setSelectedMonth(currentMonth);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectChange = (e) => {
    setSelectedMonth(e.target.value);
    setActiveIndex(null);
    setActiveItem(null);
  };


  const toggle = (index, item) => {
    const isSame = activeIndex === index;
    setActiveIndex(isSame ? null : index);
    setActiveItem(isSame ? null : item);
  };
  

  const filtered = data.filter((item) => item.month === selectedMonth);
  const weeks = groupByWeeks(filtered);

  return (
    <section className={`${css.section} container`}>
      
      <div className={css.w}>
        <h1 className={css.title}>Календар — </h1>
           <select
        onChange={handleSelectChange}
        value={selectedMonth}
        className={css.select}
      >
        {[...new Set(data.map((item) => item.month))].map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>   


</div>


      {/* === МОБІЛЬНА ВЕРСІЯ === */}
      {isMobile ? (
        <div className={css.mobileList}>
          {filtered.map((item, idx) => (
            <div key={idx} className={css.mobileCard}>
              <button
                className={`${css.btn} ${
                  activeIndex === idx ? css.active : ""
                }`}
                onClick={() => toggle(idx, item)}
              >
                <span className={css.date}>{item.date}</span>{" "}
                <span className={css.day}>{item.day}</span> — {item.title}
              </button>
              {activeIndex === idx && (
                <div className={css.articleRow}>
                  <p className={css.article}>{item.article}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className={css.weekHeader}>
            {daysOfWeek.map((d) => (
              <div key={d} className={css.dayHeader}>
                {d}
              </div>
            ))}
          </div>

          {weeks.map((week, rowIndex) => {
            const isActiveInRow = activeIndex?.startsWith(`${rowIndex}-`);

            return (
              <div className={css.weekRow} key={rowIndex}>
                {week.map((item, i) => (
                  <div key={i} className={css.dayCell}>
                    {item ? (
                      <>
                        <button
                          className={`${css.btn} ${
                            activeIndex === `${rowIndex}-${i}` ? css.active : ""
                          }`}
                          onClick={() => toggle(`${rowIndex}-${i}`, item)}
                        >
                          <span className={css.date}>{item.date}</span>
                          <span className={css.day}>{item.day}</span> —
                          {item.title}
                        </button>
                      </>
                    ) : (
                      <div className={css.empty}></div>
                    )}
                  </div>
                ))}

                {isActiveInRow && activeItem && (
                  <div className={css.articleRowWide}>
                    <p className={css.article}>{activeItem.article}</p>
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}
    </section>
  );
}

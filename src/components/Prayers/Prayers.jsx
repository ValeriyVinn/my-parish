// import css from "./Prayers.module.css"

// const Prayers = () => {
//   return (
//     <>
//       <h1 className={css.h}>Молитви</h1>
//     </>
//   );
// };

// export default Prayers;


import { useState } from "react";
import prayersData from "../../data/prayers.json";
import css from "./Prayers.module.css";

const Prayers = () => {
  const [selectedPrayer, setSelectedPrayer] = useState(prayersData[0]);

  const handleChange = (e) => {
    const prayer = prayersData.find((p) => p.title === e.target.value);
    setSelectedPrayer(prayer);
  };

  return (
    <div className={`${css.wrapper} container`}>

      <div className={css.prayersHeader}>
      {/* <h2>Молитви</h2> */}
      <select onChange={handleChange} className={css.select}>
        {prayersData.map((prayer) => (
          <option key={prayer.title} value={prayer.title}>
            {prayer.title}
          </option>
        ))}
      </select>

      </div>


      <div className={css.text}>
        {/* <h3>{selectedPrayer.title}</h3> */}
        {selectedPrayer.article.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default Prayers;

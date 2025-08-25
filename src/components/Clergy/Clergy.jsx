import css from "./Clergy.module.css";

const Clergy = () => {
  return (
    <div className="container">
      <article className={css.articleClergy}>
        <ul className={css.clergyList}>
          <h2 className={css.prior}>Настоятель</h2>
          <ul className={css.clergyItem}>
            <li className={css.clergyName}>Протоієрей Олександр Токарчук</li>
            <li className={css.clergyPhone}>097 409 9913</li>
          </ul>
          <ul className={css.clergyItem}>
            <li className={css.clergyName}>Ієрей Дмитро Турабов</li>
            <li className={css.clergyPhone}>096 800 63 03</li>
          </ul>
          <ul className={css.clergyItem}>
            <li className={css.clergyName}>Диякон Олег Кучерук</li>
            <li className={css.clergyPhone}></li>
          </ul>
          <ul className={css.clergyItem}>
            <li className={css.clergyName}>Диякон Андрій Прокопенко</li>
            <li className={css.clergyPhone}></li>
          </ul>
        </ul>
      </article>
    </div>
  );
};

export default Clergy;

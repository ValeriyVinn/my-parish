import css from "./Clergy.module.css";

const Clergy = () => {
  return (
    <div className="container">
      <article className={css.articleClergy}>


        <ul className={css.clergyList}>
          <li>Настоятель</li>
          <li className={css.clergyName}>Протиієрей Олександр Токарчук</li>
          <li className={css.clergyName}>Ієрей Дмитро Турабов</li>
          <li className={css.clergyName}>Диякон Олег Кучерук</li>
          <li className={css.clergyName}>Диякон Андрій Прокопенко</li>
        </ul>
      </article>
    </div>
  );
};

export default Clergy;

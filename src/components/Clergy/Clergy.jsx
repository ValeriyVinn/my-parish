import css from "./Clergy.module.css";

const Clergy = () => {
  return (
    <div className="container">
      <table className={css.clergyTable}>
        <tbody>
          <tr>
            <td>Настоятель</td>
            <td className={css.clergyDignity}>протиієрей </td>
            <td className={css.clergyName}>Олександр Токарчук</td>
          </tr>
          <tr>
            <td></td>
            <td className={css.clergyDignity}>Ієрей </td>
            <td className={css.clergyName}>Дмитро Турабов</td>
          </tr>
          <tr>
            <td></td>

            <td className={css.clergyDignity}>Диякон</td>
            <td className={css.clergyName}>Олег Кучерук</td>
          </tr>
          <tr>
            <td></td>
            <td className={css.clergyDignity}>Диякон</td>
            <td className={css.clergyName}>Андрій Прокопенко</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default Clergy;

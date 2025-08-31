import schedule from "../../data/schedule.json";
import css from "./Shedule.module.css";

const Schedule = () => {
  return (
    <div className={`container ${css.wrapper}`}>
      <h1 className={css.title}>Розклад Богослужінь — Вересень</h1>
      <div className={css.tableWrapper}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Дата</th>
              {/* <th>День</th> */}
              <th>Подія</th>
              <th>Час</th>
              <th>Богослужіння</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) =>
              item.services.map((service, i) => (
                <tr key={`${index}-${i}`}>
                  {i === 0 && (
                    <>
                      <td rowSpan={item.services.length}>{item.date}</td>
                      {/* <td rowSpan={item.services.length}>{item.day}</td> */}
                      <td rowSpan={item.services.length}>{item.title}</td>
                    </>
                  )}
                  <td>{service.time}</td>
                  <td>{service.name}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;

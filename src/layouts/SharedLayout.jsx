import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={`${css.nav} `}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/" className={css.navLink}>
            Моя Церква
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="shedule" className={css.navLink}>
            Розклад Богослужіннь
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="gallery" className={css.navLink}>
            Галерея
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="clergy" className={css.navLink}>
            Клір Собору
          </NavLink>
        </li>
      </ul>
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;

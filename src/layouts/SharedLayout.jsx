import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleMenu} className={css.burger}>
        ☰
      </button>

      <div className={`${css.nav} ${isOpen ? css.open : ""}`}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink
              to="/"
              className={css.navLink}
              onClick={() => setIsOpen(false)}
            >
              Моя Церква
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="shedule"
              className={css.navLink}
              onClick={() => setIsOpen(false)}
            >
              Розклад Богослужіннь
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="gallery"
              className={css.navLink}
              onClick={() => setIsOpen(false)}
            >
              Галерея
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="clergy"
              className={css.navLink}
              onClick={() => setIsOpen(false)}
            >
              Духовенство
            </NavLink>
          </li>
        </ul>
      </div>

      <main className={css.main}>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;

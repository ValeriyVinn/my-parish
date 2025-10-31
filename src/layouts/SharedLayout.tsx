"use client";

import Link from "next/link";
import { useState } from "react";
import css from "./SharedLayout.module.css";

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button className={css.burger} onClick={toggleMenu}>
        {isOpen ? "ПРИХОВАТИ МЕНЮ" : "ВІДКРИТИ МЕНЮ"}
      </button>

      <nav className={`${css.nav} ${isOpen ? css.open : ""}`}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <Link href="/" className={css.navLink} onClick={() => setIsOpen(false)}>
              Моя Церква
            </Link>
          </li>
          <li className={css.navItem}>
            <Link href="/shedule" className={css.navLink} onClick={() => setIsOpen(false)}>
              Розклад Богослужінь
            </Link>
          </li>
          <li className={css.navItem}>
            <Link href="/calendar" className={css.navLink} onClick={() => setIsOpen(false)}>
              Календар
            </Link>
          </li>
          <li className={css.navItem}>
            <Link href="/gallery" className={css.navLink} onClick={() => setIsOpen(false)}>
              Галерея
            </Link>
          </li>
          <li className={css.navItem}>
            <Link href="/prayers" className={css.navLink} onClick={() => setIsOpen(false)}>
              Молитовник
            </Link>
          </li>
          <li className={css.navItem}>
            <Link href="/clergy" className={css.navLink} onClick={() => setIsOpen(false)}>
              Духовенство
            </Link>
          </li>
          <li className={css.navItem}>(097) 409 9913</li>
        </ul>
      </nav>

      <main className={css.main}>{children}</main>
    </>
  );
}

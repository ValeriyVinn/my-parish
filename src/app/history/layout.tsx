"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

const historyMenu = [
  {
    title: "Історія",
    href: "/history",
  },
  {
    title: "Розпис Храму",
    href: "/history/church-iconography",
  },
];

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className={`${styles.container} container`}>
      <nav className={styles.menu}>
        {historyMenu.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/history" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      {children}
    </div>
  );
}

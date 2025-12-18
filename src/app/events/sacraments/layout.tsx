"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

const sacramentsMenu = [
  {
    title: "Таїнства",
    href: "/events/sacraments",
  },
  {
    title: "Хрещення",
    href: "/events/sacraments/baptism",
  },
  {
    title: "Миропомазання",
    href: "/events/sacraments/chrismation",
  },
  {
    title: "Причастя",
    href: "/events/sacraments/eucharist",
  },
  {
    title: "Сповідь",
    href: "/events/sacraments/confession",
  },
  {
    title: "Соборування",
    href: "/events/sacraments/holy-unction",
  },
  {
    title: "Вінчання",
    href: "/events/sacraments/marriage",
  },
  {
    title: "Священство",
    href: "/events/sacraments/holy-orders",
  },
];

export default function SacramentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className={`${styles.container} container`}>
      <nav className={styles.menu}>
        {sacramentsMenu.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/events/sacraments" &&
              pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.menuItem} ${
                isActive ? styles.active : ""
              }`}
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

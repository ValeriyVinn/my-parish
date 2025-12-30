"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

const sacramentsMenu = [
  {
    title: "Житія Святих",
    href: "/events/lives",
  },
  {
    title: "Свт. Василій Великий",
    href: "/events/lives/vasyl-velykyi",
  },
  {
    title: "Св. прп. Серафим Саровський",
    href: "/events/lives/seraphim-sarovskyi",
  },
  {
    title: "Предтеча і Хреститель Господній Іоан",
    href: "/events/lives/john-the-forerunner",
  },
  {
    title: "свт. Григорій Богослов",
    href: "/events/lives/gregory-the-theologian",
  },
  {
    title: "свт. Іоанн Золотоустий",
    href: "/events/lives/john-chrysostom",
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
            (item.href !== "/events/lives" &&
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

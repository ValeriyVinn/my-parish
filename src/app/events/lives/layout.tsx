"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
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
    title: "Свт. Григорій Богослов",
    href: "/events/lives/gregory-the-theologian",
  },
  {
    title: "Свт. Іоанн Золотоустий",
    href: "/events/lives/john-chrysostom",
  },
  {
    title: "Вмч. Феодор Тирон",
    href: "/events/lives/theodore-tyron",
  },
  {
    title: "Свт. Григорій Палама",
    href: "/events/lives/hryhorii-palama",
  },
  {
    title: "40 мчч. Севастійських",
    href: "/events/lives/40-muchenykiv-sevastiiskykh",
  },
  {
    title: "Прп. Іоан Ліствичник",
    href: "/events/lives/ioan-listvychnyk",
  },
  {
    title: "Прп. Марія Єгипетська",
    href: "/events/lives/maria-yehypetska",
  },
  {
    title: "Прав. Лазар",
    href: "/events/lives/lazarus",
  },
  {
    title: "Ап. Фома",
    href: "/events/lives/thomas",
  },
  {
    title: "Свв. жінки-мироносиці",
    href: "/events/lives/myrrh-bearing-women",
  },
];

export default function SacramentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeTitle = useMemo(() => {
    return (
      sacramentsMenu.find(
        (item) =>
          pathname === item.href ||
          (item.href !== "/events/lives" && pathname.startsWith(item.href)),
      )?.title || "Житія Святих"
    );
  }, [pathname]);

  return (
    <div className={`${styles.container} container`}>
      {/* Accordion button */}
      <button
        className={styles.accordionButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className={styles.accordionTitle}>{activeTitle}</span>
        <span className={styles.accordionAction}>
          {open ? "Закрити " : "Відкрити"}
        </span>
      </button>

      {/* Accordion content */}
      <nav className={`${styles.menu} ${open ? styles.open : ""}`}>
        {sacramentsMenu.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/events/lives" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
              onClick={() => setOpen(false)}
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

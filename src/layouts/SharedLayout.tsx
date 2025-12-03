// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { menu } from "@/data/menu";
// import css from "./SharedLayout.module.css";
// import Modal from "../components/Modal/Modal";

// export default function SharedLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isOpen, setIsOpen] = useState(false); // мобільне меню
//   const [openSub, setOpenSub] = useState<string | null>(null); // 'Розклад' | 'Адреса' | null
//   const [submenuHidden, setSubmenuHidden] = useState(false); // при скролі
//   const pathname = usePathname();
//   const router = useRouter();

//   // Відкрити Адреса автоматично на головній сторінці
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     setTimeout(() => {
//       if (window.innerWidth >= 768) {
//         if (pathname === "/") {
//           setOpenSub("Контакти");
//         } else {
//           setOpenSub(null);
//         }
//       } else {
//         // мобільні — приховувати підпанелі (бо показуємо список)
//         setOpenSub(null);
//       }
//       // закривати мобільне меню при зміні шляху
//       setIsOpen(false);
//     }, 0);
//   }, [pathname]);

//   // При скролі — ховати підменю (desktop)
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     let lastScroll = window.scrollY;

//     function onScroll() {
//       const cur = window.scrollY;
//       // якщо користувач скролить вниз — ховаємо підменю
//       if (cur > lastScroll && cur > 30) {
//         setSubmenuHidden(true);
//       } else {
//         setSubmenuHidden(false);
//       }
//       lastScroll = cur;
//     }

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Обробник кліку на пункт з підменю: перехід на сторінку + відкриття підменю
//   const handleMainClick = async (itemTitle: string, href?: string) => {
//     if (typeof window === "undefined") return;
//     if (window.innerWidth < 768) {
//       // мобільні — просто нічого не робимо тут (лінки ведуть як звичайно)
//       return;
//     }

//     // Якщо є href — все одно переходимо, а потім відкриваємо підменю
//     if (href) {
//       router.push(href);
//       // невелика затримка дає час навігації/рендеру
//       setTimeout(() => setOpenSub(itemTitle), 50);
//     } else {
//       // без href — просто відкриваємо/закриваємо підменю
//       setOpenSub((prev) => (prev === itemTitle ? null : itemTitle));
//     }
//   };

//   // Modal map state
//   const [mapOpen, setMapOpen] = useState(false);

//   return (
//     <>
//       <button
//         className={css.burger}
//         onClick={() => setIsOpen((s) => !s)}
//         aria-expanded={isOpen}
//       >
//         {isOpen ? "ПРИХОВАТИ МЕНЮ" : "ВІДКРИТИ МЕНЮ"}
//       </button>

//       <header className={css.header}>
//         <nav className={css.navBar}>
//           <ul className={css.mainList}>
//             {menu.map((m) =>
//               m.isText ? (
//                 <li key={m.title} className={`${css.item} ${css.phone}`}>
//                   {m.title}
//                 </li>
//               ) : (
//                 <li key={m.title} className={css.item}>
//                   {/* Клік обробляємо окремо для пунктів з підменю, щоб відкрити панель */}
//                   {m.sub ? (
//                     <button
//                       className={css.linkButton}
//                       onClick={() => handleMainClick(m.title, m.href)}
//                       aria-expanded={openSub === m.title}
//                     >
//                       {m.title} <span className={css.caret}>▾</span>
//                     </button>
//                   ) : (
//                     <Link href={m.href ?? "#"} className={css.link}>
//                       {m.title}
//                     </Link>
//                   )}
//                 </li>
//               )
//             )}
//           </ul>
//         </nav>

//         {/* ПАНЕЛЬ ПІДМЕНЮ (desktop / tablet) */}
//         <div
//           className={`${css.submenuPanel} ${openSub ? css.open : ""} ${
//             submenuHidden ? css.hidden : ""
//           }`}
//         >
//           <div className={css.submenuInner}>
//             {/* Якщо openSub === "Розклад" — показати його підменю, якщо "Адреса" — адресу */}
//             {openSub &&
//               menu
//                 .find((it) => it.title === openSub)
//                 ?.sub?.map((s) => (
//                   <div key={s.title} className={css.subItem}>
//                     {s.action === "map" ? (
//                       <button
//                         className={css.subLink}
//                         onClick={() => setMapOpen(true)}
//                       >
//                         {s.title}
//                       </button>
//                     ) : s.action === "text" ? (
//                       <span className={css.subText}>{s.title}</span>
//                     ) : (
//                       <Link href={s.href ?? "#"} className={css.subLink}>
//                         {s.title}
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//           </div>
//         </div>
//       </header>

//       {/* Мобільне меню: offcanvas full list з підменю як вкладеними списками */}
//       <aside className={`${css.mobileMenu} ${isOpen ? css.mobileOpen : ""}`}>
//         <ul className={css.mobileList}>
//           {menu.map((m) => (
//             <li key={m.title} className={css.mobileItem}>
//               {m.isText ? (
//                 <div className={css.mobilePhone}>{m.title}</div>
//               ) : (
//                 <>
//                   <div className={css.mobileMainRow}>
//                     <Link
//                       href={m.href ?? "#"}
//                       onClick={() => setIsOpen(false)}
//                       className={css.mobileMainLink}
//                     >
//                       {m.title}
//                     </Link>
//                   </div>
//                   {m.sub && (
//                     <ul className={css.mobileSubList}>
//                       {m.sub.map((s) => (
//                         <li key={s.title} className={css.mobileSubItem}>
//                           {s.action === "map" ? (
//                             <button
//                               className={css.mobileSubButton}
//                               onClick={() => {
//                                 setMapOpen(true);
//                                 setIsOpen(false);
//                               }}
//                             >
//                               {s.title}
//                             </button>
//                           ) : s.action === "text" ? (
//                             <div className={css.mobileSubText}>{s.title}</div>
//                           ) : (
//                             <Link
//                               href={s.href ?? "#"}
//                               className={css.mobileSubLink}
//                               onClick={() => setIsOpen(false)}
//                             >
//                               {s.title}
//                             </Link>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <main className={css.pageMain}>{children}</main>

//       {/* Використання окремого компонента Modal */}
//       {mapOpen && (
//         <Modal onClose={() => setMapOpen(false)}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.15857386175!2d28.40549637648626!3d49.23548267138582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5d0a004f37bb%3A0x290314483fc1f0bc!2z0KXRgNCw0Lwg0L_RgNC_LiDQodC10YDQsNGE0LjQvNCwINCh0LDRgNC-0LLRgdGM0LrQvtCz0L4!5e0!3m2!1suk!2sua!4v1750442457975!5m2!1suk!2sua"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             loading="lazy"
//             title="Google Map"
//           />
//         </Modal>
//       )}
//     </>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { menu } from "@/data/menu";
// import css from "./SharedLayout.module.css";
// import Modal from "../components/Modal/Modal";

// export default function SharedLayout({ children }: { children: React.ReactNode }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSub, setOpenSub] = useState<string | null>(null);
//   const [submenuHidden, setSubmenuHidden] = useState(false);
//   const [mapOpen, setMapOpen] = useState(false);

//   const pathname = usePathname();
//   const router = useRouter();

//   // Автовідкриття "Контакти" на головній
//   useEffect(() => {
//     if (pathname === "/") {
//       setTimeout(() => setOpenSub("Контакти"), 0);
//     } else {
//       setTimeout(() => setOpenSub(null), 0);
//     }
//     setTimeout(() => setIsOpen(false), 0);
//   }, [pathname]);

//   // Скрол — вниз ховає, вверх показує
//   useEffect(() => {
//     let lastScroll = window.scrollY;
//     function onScroll() {
//       const cur = window.scrollY;
//       if (cur > lastScroll && cur > 30) {
//         setSubmenuHidden(true);
//       } else {
//         setSubmenuHidden(false);
//       }
//       lastScroll = cur;
//     }
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Клік на пункт меню з підменю
//   const handleMainClick = (itemTitle: string, href?: string) => {
//     setOpenSub(itemTitle);
//     setSubmenuHidden(false);

//     if (href) {
//       const encoded = encodeURIComponent(itemTitle);
//       router.push(`${href}?open=${encoded}`);
//     }
//   };

//   // При зміні pathname перевіряємо query ?open
//   useEffect(() => {
//     const url = new URL(window.location.href);
//     const queryOpen = url.searchParams.get("open");
//     if (queryOpen) {
//       setTimeout(() => setOpenSub(queryOpen), 0);
//     }
//   }, [pathname]);

//   return (
//     <>
//       <button
//         className={css.burger}
//         onClick={() => setIsOpen((s) => !s)}
//         aria-expanded={isOpen}
//       >
//         {isOpen ? "ПРИХОВАТИ МЕНЮ" : "ВІДКРИТИ МЕНЮ"}
//       </button>

//       <header className={css.header}>
//         <nav className={css.navBar}>
//           <ul className={css.mainList}>
//             {menu.map((m) =>
//               m.isText ? (
//                 <li key={m.title} className={`${css.item} ${css.contactBlock} ${css.phone}`}>
//                   <span className={css.phoneText}>{m.title}</span>

//                 </li>
//               ) : (
//                 <li key={m.title} className={`${css.item} ${css.contactBlock}`}>
//                   {m.sub ? (
//                     <button
//                       className={css.linkButton}
//                       onClick={() => handleMainClick(m.title, m.href)}
//                       aria-expanded={openSub === m.title}
//                     >
//                       {m.title} <span className={css.caret}>▼</span>
//                     </button>
//                   ) : (
//                     <Link href={m.href ?? "#"} className={css.link}>
//                       {m.title}
//                     </Link>
//                   )}
//                 </li>
//               )
//             )}
//           </ul>
//         </nav>

//         <div
//           className={`${css.submenuPanel} ${openSub ? css.open : ""} ${
//             submenuHidden ? css.hidden : ""
//           }`}
//         >
//           <div className={css.submenuInner}>
//             {openSub &&
//               menu
//                 .find((it) => it.title === openSub)
//                 ?.sub?.map((s) => (
//                   <div key={s.title} className={css.subItem}>
//                     {s.action === "map" ? (
//                       <button className={`${css.subLink} ${css.contactBlock}`}
//  onClick={() => setMapOpen(true)}>
//                         {s.title}
//                       </button>
//                     ) : s.action === "text" ? (
//                       <span className={`${css.subText} ${css.contactBlock}`}>{s.title}</span>
//                     ) : (
//                       <Link href={s.href ?? "#"} className={css.subLink}>
//                         {s.title}
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//           </div>
//         </div>
//       </header>

//       <aside className={`${css.mobileMenu} ${isOpen ? css.mobileOpen : ""}`}>
//         <ul className={css.mobileList}>
//           {menu.map((m) => (
//             <li key={m.title} className={css.mobileItem}>
//               {m.isText ? (
//                 <div className={css.mobilePhone}>{m.title}</div>
//               ) : (
//                 <>
//                   <div className={css.mobileMainRow}>
//                     <Link
//                       href={m.href ?? "#"}
//                       className={css.mobileMainLink}
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {m.title}
//                     </Link>
//                   </div>
//                   {m.sub && (
//                     <ul className={css.mobileSubList}>
//                       {m.sub.map((s) => (
//                         <li key={s.title} className={css.mobileSubItem}>
//                           {s.action === "map" ? (
//                             <button
//                               className={css.mobileSubButton}
//                               onClick={() => {
//                                 setMapOpen(true);
//                                 setIsOpen(false);
//                               }}
//                             >
//                               {s.title}
//                             </button>
//                           ) : s.action === "text" ? (
//                             <div className={css.mobileSubText}>{s.title}</div>
//                           ) : (
//                             <Link
//                               href={s.href ?? "#"}
//                               className={css.mobileSubLink}
//                               onClick={() => setIsOpen(false)}
//                             >
//                               {s.title}
//                             </Link>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <main className={css.pageMain}>{children}</main>

//       {mapOpen && (
//         <Modal onClose={() => setMapOpen(false)}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.15857386175!2d28.40549637648626!3d49.23548267138582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5d0a004f37bb%3A0x290314483fc1f0bc!2z0KXRgNCw0Lwg0L_RgNC_LiDQodC10YDQsNGE0LjQvNCwINCh0LDRgNC-0LLRgdGM0LrQvtCz0L4!5e0!3m2!1suk!2sua!4v1750442457975!5m2!1suk!2sua"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             loading="lazy"
//           ></iframe>
//         </Modal>
//       )}
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { menu } from "@/data/menu";
import css from "./SharedLayout.module.css";
import Modal from "../components/Modal/Modal";

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [submenuHidden, setSubmenuHidden] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      setTimeout(() => setOpenSub("Контакти"), 0);
    } else {
      setTimeout(() => setOpenSub(null), 0);
    }
    setTimeout(() => setIsOpen(false), 0);
  }, [pathname]);

  useEffect(() => {
    let lastScroll = window.scrollY;
    function onScroll() {
      const cur = window.scrollY;
      if (cur > lastScroll && cur > 30) {
        setSubmenuHidden(true);
      } else {
        setSubmenuHidden(false);
      }
      lastScroll = cur;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMainClick = (itemTitle: string, href?: string) => {
    setOpenSub(itemTitle);
    setSubmenuHidden(false);

    if (href) {
      const encoded = encodeURIComponent(itemTitle);
      router.push(`${href}?open=${encoded}`);
    }
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const queryOpen = url.searchParams.get("open");
    if (queryOpen) {
      setTimeout(() => setOpenSub(queryOpen), 0);
    }
  }, [pathname]);

  return (
    <>
      <button
        className={css.burger}
        onClick={() => setIsOpen((s) => !s)}
        aria-expanded={isOpen}
      >
        {isOpen ? "ПРИХОВАТИ МЕНЮ" : "ВІДКРИТИ МЕНЮ"}
      </button>

      <header className={css.header}>
        <nav className={css.navBar}>
          <ul className={css.mainList}>
            {menu.map((m) =>
              m.isText ? (
                <li key={m.title} className={`${css.item} ${css.contactBlock}`}>
                  <span className={css.phoneText}>{m.title}</span>
                </li>
              ) : m.title === "Контакти" ? (
                <li key={m.title} className={`${css.item} ${css.contactBlock}`}>
                  <button
                    className={css.linkButton}
                    onClick={() => handleMainClick(m.title, m.href)}
                    aria-expanded={openSub === m.title}
                  >
                    {m.title} <span className={css.caret}>▼</span>
                  </button>
                </li>
              ) : (
                <li key={m.title} className={css.item}>
                  {m.sub ? (
                    <button
                      className={css.linkButton}
                      onClick={() => handleMainClick(m.title, m.href)}
                      aria-expanded={openSub === m.title}
                    >
                      {m.title} <span className={css.caret}>▼</span>
                    </button>
                  ) : (
                    <Link href={m.href ?? "#"} className={css.link}>
                      {m.title}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>
        </nav>

        <div
          className={`${css.submenuPanel} ${openSub ? css.open : ""} ${
            submenuHidden ? css.hidden : ""
          }`}
        >
          <div className={css.submenuInner}>
            {openSub &&
              menu
                .find((it) => it.title === openSub)
                ?.sub?.map((s) => (
                  <div key={s.title} className={css.subItem}>
                    {s.action === "map" ? (
                      <button
                        className={`${css.subLink} ${css.contactBlock}`}
                        onClick={() => setMapOpen(true)}
                      >
                        {s.title}
                      </button>
                    ) : s.action === "text" ? (
                      <span className={`${css.subText} ${css.contactBlock}`}>
                        {s.title}
                      </span>
                    ) : (
                      <Link href={s.href ?? "#"} className={css.subLink}>
                        {s.title}
                      </Link>
                    )}
                  </div>
                ))}
          </div>
        </div>
      </header>

      <aside className={`${css.mobileMenu} ${isOpen ? css.mobileOpen : ""}`}>
        <ul className={css.mobileList}>
          {menu.map((m) => (
            <li key={m.title} className={css.mobileItem}>
              {m.isText ? (
                <div className={`${css.mobilePhone} ${css.contactBlock}`}>
                  {m.title}
                </div>
              ) : (
                <>
                  <div
                    className={`${css.mobileMainRow} ${
                      m.title === "Контакти" ? css.contactBlock : ""
                    }`}
                  >
                    <Link
                      href={m.href ?? "#"}
                      className={css.mobileMainLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {m.title}
                    </Link>
                  </div>
                  {m.sub && (
                    <ul className={css.mobileSubList}>
                      {m.sub.map((s) => (
                        <li key={s.title} className={css.mobileSubItem}>
                          {s.action === "map" ? (
                            <button
                              className={`${css.mobileSubButton} ${css.contactBlock}`}
                              onClick={() => {
                                setMapOpen(true);
                                setIsOpen(false);
                              }}
                            >
                              {s.title}
                            </button>
                          ) : s.action === "text" ? (
                            <div
                              className={`${css.mobileSubText} ${css.contactBlock}`}
                            >
                              {s.title}
                            </div>
                          ) : (
                            <Link
                              href={s.href ?? "#"}
                              className={css.mobileSubLink}
                              onClick={() => setIsOpen(false)}
                            >
                              {s.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <main className={css.pageMain}>{children}</main>

      {mapOpen && (
        <Modal onClose={() => setMapOpen(false)}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.15857386175!2d28.40549637648626!3d49.23548267138582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5d0a004f37bb%3A0x290314483fc1f0bc!2z0KXRgNCw0Lwg0L_RgNC_LiDQodC10YDQsNGE0LjQvNCwINCh0LDRgNC-0LLRgdGM0LrQvtCz0L4!5e0!3m2!1suk!2sua!4v1750442457975!5m2!1suk!2sua"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </Modal>
      )}
    </>
  );
}
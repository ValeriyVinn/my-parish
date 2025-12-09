import styles from "./page.module.css";

const links = [
  { title: "Православна Церква України", url: "https://www.pomisna.info/uk/" },
  {
    title: "Парафія святого Архистратига Михаїла, Київ, Пирогів. Бібліотека",
    url: "https://parafia.org.ua/biblioteka/",
  },
  {
    title: "Юлiя Хмара: молитви українською мовою",
    url: "https://www.youtube.com/@molytva-ua",
  },
];

export default function UsefulLinksPage() {
  return (
    <main className="container">
      <section className={styles.usefulLinks}>
        <h1 className={styles.usefulLinksHeader}>Корисні посилання</h1>
        <ul className={styles.linkList}>
          {links.map((link) => (
            <li key={link.url} className={styles.linkItem}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

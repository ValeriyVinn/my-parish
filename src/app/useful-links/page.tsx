"use client";

export default function UsefulLinksPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Корисні посилання</h1>
      <ul style={{textAlign: "left" }}>
        <li>
          <a 
            href="https://www.pomisna.info/uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Православна Церква України
          </a>
        </li>
        <li>
          <a
            href="https://parafia.org.ua/biblioteka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Парафія святого Архистратига Михаїла, Київ, Пирогів. Бібліотека
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@molytva-ua"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ютуб канал: молитви українською мовою
          </a>
        </li>
      </ul>
    </div>
  );
}

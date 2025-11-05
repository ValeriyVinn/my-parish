import AidClient from "./AidClient";


export const metadata = {
  title: "Допомога",
  description:
    "Сторінка для молитви та підтримки. Моліться разом з нами за мир і допомогу нашим братам і сестрам.",
  openGraph: {
    title: "Допомога — Храм св. прп. Серафима Саровського, Вінниця",
    description:
      "Підтримайте нашу ініціативу допомоги. Ваша підтримка важлива для нас.",
    url: "https://parish-ten.vercel.app/aid",
    images: [
      {
        url: "/assets/metadataphoto/og-default.jpg", 
        width: 1200,
        height: 630,
        alt: "Ініціатива допомоги храму св. прп. Серафима Саровського у Вінниці",
      },
    ],
    locale: "uk_UA",
    siteName: "Храм св. прп. Серафима Саровського, Вінниця",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Допомога — Храм св. прп. Серафима Саровського, Вінниця",
    description:
      "Долучіться до нашої ініціативи допомоги. Разом ми можемо більше.",
    images: ["/assets/metadataphoto/og-default.jpg"], 
  },
};


export default function AidPage() {
  return (
    <div className="container">
      <AidClient />
    </div>
  );
}

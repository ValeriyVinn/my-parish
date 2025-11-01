import prayersData from "@/data/prayers.json";
import { Prayer } from "@/types/prayers";
import PrayersClient from "./PrayersClient";

export const metadata = {
  title: "Молитви",
  description:
    "Молитви - тексти і відео молитов храму св. прп. Серафима Саровського у Вінниці. Адреса: Хмельницьке шосе, 145.",
  metadataBase: new URL("https://parish-ten.vercel.app"),
  openGraph: {
    title: "Молитви — Храм св. прп. Серафима Саровського, Вінниця",
    description:
      "Почитайте та перегляньте відео молитов храму св. прп. Серафима Саровського у Вінниці. Тексти молитов для духовного збагачення.",
    url: "https://parish-ten.vercel.app/prayers",
    images: [
      {
        url: "/assets/metadataphoto/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Молитви храму св. прп. Серафима Саровського у Вінниці",
      },
    ],
    type: "article",
  },
};

export default function PrayersPage() {
  const prayers: Prayer[] = prayersData;

  return (
    <section className="container">
      <PrayersClient prayers={prayers} />
    </section>
  );
}

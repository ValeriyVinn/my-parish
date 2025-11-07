import type { Metadata } from "next";
import "./globals.css";
import SharedLayout from "@/layouts/SharedLayout";
import Footer from "@/components/Footer/Footer";
import HelpButton from "@/components/HelpButton/HelpButton";

export const metadata: Metadata = {
  title: {
    default: "Храм св. прп. Серафима Саровського, Вінниця - Новини",
    template: "%s — Храм св. прп. Серафима Саровського, Вінниця",
  },
  description:
    "Офіційний сайт храму св. прп. Серафима Саровського чудотворця у Вінниці. Богослужіння, духовенство, новини парафії.",
  metadataBase: new URL("https://parish-ten.vercel.app/"),
  openGraph: {
    title: "Храм св. прп. Серафима Саровського, Вінниця",
    description:
      "Офіційний сайт храму св. прп. Серафима Саровського чудотворця у Вінниці.",
    url: "https://parish-ten.vercel.app/",
    siteName: "Храм св. прп. Серафима Саровського, Вінниця",
    images: [
      {
        url: "/assets/metadataphoto/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Храм св. прп. Серафима Саровського у Вінниці",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
   other: {
    "google-site-verification": "ryCes5eu9G5yKGvEo5V11Es5Hz2XeAU_W6nMtCbvJTk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        {/* Основний контент */}
        <div className="main">
          <SharedLayout>{children}</SharedLayout>
          <Footer />
          {/* Портал для модалки */}
          <HelpButton />
          <div id="modal-root" className="modalRoot" />
        </div>
      </body>
    </html>
  );
}

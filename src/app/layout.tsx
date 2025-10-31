import type { Metadata } from "next";
import "./globals.css";
import SharedLayout from "@/layouts/SharedLayout";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Моя Церква",
  description: "Офіційний сайт парафії",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        {/* Портал для модалки */}
        <div id="modal-root" className="modalRoot" />

        {/* Основний контент */}
        <div className="main">
          <SharedLayout>{children}</SharedLayout>
          <Footer />
        </div>
      </body>
    </html>
  );
}

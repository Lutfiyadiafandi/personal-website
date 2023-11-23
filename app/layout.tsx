import type { Metadata } from "next";
import Navigation from "../common/components/layouts/Navigation";
import Footer from "@/common/components/layouts/Footer";
import { plusJakarta } from "@/common/utils/fonts/Font";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} font-plusjakarta bg-day dark:bg-night`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

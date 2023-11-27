import type { Metadata } from "next";
import Navigation from "../common/components/layouts/Navigation";
import Footer from "@/common/components/layouts/Footer";
import { plusJakarta } from "@/common/utils/fonts/Font";
import "./globals.css";
import { DarkModeProvider } from "@/common/utils/darkmode/DarkModeContext";

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
        <DarkModeProvider>
          <Navigation />
          {children}
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}

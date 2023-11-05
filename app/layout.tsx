import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "@next/font/google";
import Navigation from "../common/components/layouts/Navigation";

import "./globals.css";
import ThemeProvider from "@/common/components/layouts/ThemeProvide";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

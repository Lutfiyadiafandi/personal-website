"use client";

import { createContext } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
export const ThemeContext = createContext("");

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}

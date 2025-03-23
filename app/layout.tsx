"use client";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 dark:bg-black dark:text-white">
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

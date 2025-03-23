"use client";
import Link from "next/link";
import { Sun, Moon } from "lucide-react"; // Import icons
import { useEffect, useState } from "react";

export default function Navbar({ theme, setTheme }: { theme: string; setTheme: (t: string) => void }) {
  return (
    <nav className="p-4 bg-blue-500 dark:bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">MoodFit</h1>
      
      {/* Navigation Links */}
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/journal" className="hover:underline">
          Journal
        </Link>
        <Link href="/moodtracker" className="hover:underline">
          Mood Tracker
        </Link>
        <Link href="/insights" className="hover:underline">
          Insights
        </Link>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
      >
        {theme === "dark" ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-900" />}
      </button>
    </nav>
  );
}

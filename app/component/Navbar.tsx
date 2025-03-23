"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">MoodFit</h1>
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
      </div>
    </nav>
  );
}

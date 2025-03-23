"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // State for mood selection
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  // State for journal entry
  const [journalEntry, setJournalEntry] = useState("");

  // Load journal entry from local storage on mount
  useEffect(() => {
    const savedEntry = localStorage.getItem("journalEntry");
    if (savedEntry) setJournalEntry(savedEntry);
  }, []);

  // Save journal entry to local storage when updated
  const handleSaveEntry = () => {
    localStorage.setItem("journalEntry", journalEntry);
    alert("Journal entry saved!");
  };

  // Function to get advice based on mood
  const getAdvice = () => {
    switch (selectedMood) {
      case "😊 Happy":
        return "You're doing great! Keep up the positive energy!";
      case "😐 Neutral":
        return "You're doing okay, but if something’s on your mind, writing it down might help!";
      case "😔 Sad":
        return "It's okay to feel sad sometimes. You're not alone. Try writing down your thoughts—it might help lighten your heart.";
      default:
        return "";
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold">Welcome to MoodFit!</h1>
      <p className="mt-4 text-lg text-center">
        Track your mood, reflect with a journal, and improve your well-being.
      </p>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => router.push("/mood-tracker")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Go to Mood Tracker
        </button>
        <button
          onClick={() => router.push("/journal")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Open Journal
        </button>
      </div>

      {/* Mood Tracker Section */}
      <section className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold">How are you feeling today?</h2>
        <div className="flex justify-center gap-4 mt-4">
          {["😊 Happy", "😐 Neutral", "😔 Sad"].map((mood) => (
            <button
              key={mood}
              className={`px-4 py-2 rounded-full ${
                selectedMood === mood ? "bg-blue-600 text-white" : "bg-gray-500 text-white"
              }`}
              onClick={() => setSelectedMood(mood)}
            >
              {mood}
            </button>
          ))}
        </div>
        {selectedMood && (
          <p className="mt-4 text-center text-lg font-medium">{getAdvice()}</p>
        )}
      </section>

      {/* Journal Section */}
      <section className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold">Your Journal</h2>
        <textarea
          className="w-full mt-2 p-2 border rounded-md"
          rows={4}
          placeholder="Write about your day..."
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
        ></textarea>
        <button
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={handleSaveEntry}
        >
          Save Entry
        </button>
      </section>
    </main>
  );
}

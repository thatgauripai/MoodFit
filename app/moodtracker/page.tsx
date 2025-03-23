"use client";
import { useState, useEffect } from "react";

export default function MoodTracker() {
  const [mood, setMood] = useState("");
  const [moodData, setMoodData] = useState<{ date: string; mood: string }[]>([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("moodData") || "[]");
    setMoodData(storedData);
  }, []);

  const handleSaveMood = (newMood: string) => {
    if (!newMood) return;

    const newEntry = { date: new Date().toISOString().split("T")[0], mood: newMood };
    const updatedData = [...moodData, newEntry];

    setMoodData(updatedData);
    localStorage.setItem("moodData", JSON.stringify(updatedData));
    setMood(newMood);
  };

  const getMessage = () => {
    if (mood === "Happy") return "You're doing great! Keep up the positive energy! 😊";
    if (mood === "Neutral") return "It's okay to feel neutral. Try writing out your thoughts! ✍️";
    if (mood === "Sad") return "You're not alone. Take a deep breath and write out your feelings. 💙";
    return "How are you feeling today?";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <div className="bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Mood Tracker</h1>
        
        <div className="flex justify-center gap-4 mb-4">
          {["Happy", "Neutral", "Sad"].map((m) => (
            <button
              key={m}
              className={`px-4 py-2 rounded ${mood === m ? "bg-blue-600" : "bg-blue-500"} text-white transition`}
              onClick={() => handleSaveMood(m)}
            >
              {m}
            </button>
          ))}
        </div>

        <p className="mt-2 text-lg">{getMessage()}</p>

        <h2 className="mt-6 text-lg font-semibold">Past Entries:</h2>
        <ul className="text-left">
          {moodData.map((entry, index) => (
            <li key={index} className="border-b border-gray-700 py-2">
              {entry.date} - {entry.mood}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

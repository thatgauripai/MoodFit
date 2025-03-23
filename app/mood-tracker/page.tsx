"use client";

import { useState, useEffect } from "react";

export default function MoodTracker() {
  const [mood, setMood] = useState<string | null>(null);

  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    if (savedMood) {
      setMood(savedMood);
    }
  }, []);

  const handleMoodChange = (newMood: string) => {
    setMood(newMood);
    localStorage.setItem("mood", newMood);
  };

  const getMessage = () => {
    if (mood === "happy") {
      return "You're doing great! Keep up the positive energy! 😊";
    } else if (mood === "neutral") {
      return "It's okay to feel neutral. Try writing out your thoughts! ✍️";
    } else if (mood === "sad") {
      return "You're not alone. Take a deep breath and write out your feelings. 💙";
    }
    return "How are you feeling today?";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <div className="bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Mood Tracker</h1>
        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${
              mood === "happy" ? "bg-green-600" : "bg-green-500"
            } text-white transition`}
            onClick={() => handleMoodChange("happy")}
          >
            Happy
          </button>
          <button
            className={`px-4 py-2 rounded ${
              mood === "neutral" ? "bg-yellow-600" : "bg-yellow-500"
            } text-white transition`}
            onClick={() => handleMoodChange("neutral")}
          >
            Neutral
          </button>
          <button
            className={`px-4 py-2 rounded ${
              mood === "sad" ? "bg-red-600" : "bg-red-500"
            } text-white transition`}
            onClick={() => handleMoodChange("sad")}
          >
            Sad
          </button>
        </div>
        <p className="mt-2 text-lg">{getMessage()}</p>
      </div>
    </div>
  );
}
"use client";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface MoodEntry {
  date: string;
  mood: string;
}

// Map mood values to numeric scores for charting
const moodMapping: Record<string, number> = {
  "Very Happy": 5,
  "Happy": 4,
  "Neutral": 3,
  "Sad": 2,
  "Very Sad": 1,
};

export default function Insights() {
  const [moodData, setMoodData] = useState<MoodEntry[]>([]);

  useEffect(() => {
    // Fetch mood data from storage (replace this with your API or database fetch)
    const storedData = JSON.parse(localStorage.getItem("moodData") || "[]");
    setMoodData(storedData);
  }, []);

  // Transform data for Recharts
  const chartData = moodData.map((entry) => ({
    date: entry.date,
    moodScore: moodMapping[entry.mood] || 3, // Default to neutral if unknown
  }));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mood Trends</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis domain={[1, 5]} />
          <Tooltip />
          <Line type="monotone" dataKey="moodScore" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

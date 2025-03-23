"use client";

import { useState } from "react";

export default function Journal() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState<string[]>([]);

  const handleSaveEntry = () => {
    if (entry.trim()) {
      setEntries([...entries, entry]);
      setEntry("");
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Journal</h1>
      <textarea
        className="w-full max-w-lg p-2 border rounded"
        rows={5}
        placeholder="Write your thoughts here..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSaveEntry}
      >
        Save Entry
      </button>
      <div className="mt-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-2">Previous Entries</h2>
        {entries.length > 0 ? (
          <ul className="list-disc list-inside text-black">
            {entries.map((entry, index) => (
              <li key={index} className="mt-2 p-2 bg-gray-100 rounded">
                {entry}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No entries yet. Start writing!</p>
        )}
      </div>
    </div>
  );
}

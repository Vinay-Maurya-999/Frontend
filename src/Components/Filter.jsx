import React from "react";

function Filter({ category, setCategory, difficulty, setDifficulty, status, setStatus }) {
  return (
    <div className="mb-6 flex flex-wrap gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white outline-none"
      >
        <option value="">All Categories</option>
        <option value="DSA">DSA</option>
        <option value="Git">Git</option>
        <option value="Tech">Tech</option>
      </select>

      {/* Difficulty */}
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white outline-none"
      >
        <option value="">All Difficulties</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      {/* Status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white outline-none"
      >
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="On Working">In Progress</option>
        <option value="Complete">Completed</option>
      </select>
    </div>
  );
}

export default Filter;

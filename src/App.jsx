import React, { useContext, useState } from "react";
import QuestionForm from "./Components/Form";
import QuestionCard from "./Components/Tasks";
import Filter from "./Components/Filter";
import dataContext from "./Context";

const App = () => {
  const { question } = useContext(dataContext);

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [status, setStatus] = useState("");
  console.log(status);

  const complete = [];
  const progress = [];
  const pending = [];

  const filteredQuestions = question.filter((item) => {
    const categoryMatch = !category || item.category.includes(category);

    const difficultyMatch = !difficulty || item.difficulty === difficulty;

    const statusMatch = !status || item.status === status;

    return categoryMatch && difficultyMatch && statusMatch;
  });

  question.find((val) => {
    if (val.status === "Complete") {
      complete.push(val);
    } else if (val.status === "On Working") {
      progress.push(val);
    } else if (val.status === "Pending") {
      pending.push(val);
    }
  });

  const progressBar = question.length ? Math.round((complete.length / question.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">Interview Tracker</h1>
              <p className="mt-1 text-sm text-zinc-400">Track your interview preparation</p>
            </div>

            <div className="hidden rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm text-lime-400 sm:block">
              Preparation Mode
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">Total Questions</p>
            <h2 className="mt-2 text-3xl font-bold">{question.length}</h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">Completed</p>
            <h2 className="mt-2 text-3xl font-bold text-lime-400">{complete.length}</h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">In Progress</p>
            <h2 className="mt-2 text-3xl font-bold text-yellow-400">{progress.length}</h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">Pending</p>
            <h2 className="mt-2 text-3xl font-bold text-orange-400">{pending.length}</h2>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Overall Progress</h2>
              <p className="text-sm text-zinc-400">Keep going, you're making progress!</p>
            </div>

            <span className="font-semibold text-lime-400">{progressBar}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full rounded-full bg-lime-400" style={{ width: `${progressBar}%` }} />
          </div>
        </div>

        {/* Add Question */}
        <section className="mb-8">
          <QuestionForm />
        </section>

        {/* Questions Header */}
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">Your Questions</h2>
            <p className="text-sm text-zinc-400">Filter and practice your interview questions</p>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-6">
          <Filter
            category={category}
            setCategory={setCategory}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            status={status}
            setStatus={setStatus}
          />
        </div>

        {/* Cards */}
        <QuestionCard question={filteredQuestions} />
      </main>
    </div>
  );
};

export default App;

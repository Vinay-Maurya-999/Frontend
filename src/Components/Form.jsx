import { useContext } from "react";
import { useForm } from "react-hook-form";
import dataContext from "../Context";

function QuestionForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      question: "",
      category: [],
      difficulty: "",
      status: "",
    },
  });

  const { setQuestion } = useContext(dataContext);

  const onSubmit = (data) => {
    setQuestion((prev) => [...prev, data]);

    const l = localStorage.setItem("questions", JSON.stringify(data));
  };

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl"
      >
        <div>
          <h1 className="text-2xl font-bold">Add Interview Question</h1>

          <p className="mt-1 text-sm text-zinc-400">Add a question to your interview tracker.</p>
        </div>

        {/* Question */}
        <div>
          <label className="mb-2 block text-sm font-medium">Question</label>

          <input
            type="text"
            placeholder="Enter interview question"
            {...register("question", {
              required: "Question is required",
            })}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-lime-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-3 block text-sm font-medium">Category</label>

          <div className="flex flex-wrap gap-3">
            {["DSA", "Git", "Tech"].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 hover:border-lime-400"
              >
                <input
                  type="checkbox"
                  value={item}
                  {...register("category")}
                  className="accent-lime-400"
                />

                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <label className="mb-3 block text-sm font-medium">Difficulty</label>

          <div className="flex flex-wrap gap-3">
            {["Easy", "Medium", "Hard"].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 hover:border-lime-400"
              >
                <input
                  type="radio"
                  value={item}
                  {...register("difficulty", {
                    required: "Difficulty is required",
                  })}
                  className="accent-lime-400"
                />

                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="mb-3 block text-sm font-medium">Status</label>

          <div className="flex flex-wrap gap-3">
            {["Pending", "Complete", "On Working"].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 hover:border-lime-400"
              >
                <input
                  type="radio"
                  value={item}
                  {...register("status", {
                    required: "Status is required",
                  })}
                  className="accent-lime-400"
                />

                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-lime-400 px-4 py-3 font-semibold text-zinc-950 transition hover:bg-lime-300"
        >
          Add Question
        </button>
      </form>
    </div>
  );
}

export default QuestionForm;

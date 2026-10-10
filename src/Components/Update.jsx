import { useForm } from "react-hook-form";

function Form({ question, onSubmit, onCancel }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      question: question?.question ?? "",
      category: question?.category ?? [],
      difficulty: question?.difficulty ?? "",
      status: question?.status ?? "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-lg space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-white">Edit Question</h2>

      {/* Question */}
      <input
        {...register("question", { required: true })}
        placeholder="Question"
        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-lime-400"
      />

      {/* Category */}
      <div className="flex flex-wrap gap-3">
        {["DSA", "Git", "Tech"].map((category) => (
          <label
            key={category}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-white hover:border-lime-400"
          >
            <input
              type="checkbox"
              value={category}
              {...register("category")}
              className="accent-lime-400"
            />

            {category}
          </label>
        ))}
      </div>

      {/* Difficulty */}
      <select
        {...register("difficulty")}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-lime-400"
      >
        <option value="">Select Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      {/* Status */}
      <select
        {...register("status")}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-lime-400"
      >
        <option value="">Select Status</option>
        <option value="Pending">Pending</option>
        <option value="On Working">On Working</option>
        <option value="Complete">Completed</option>
      </select>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 rounded-lg bg-lime-400 px-4 py-3 font-semibold text-zinc-950 transition hover:bg-lime-300"
        >
          Save Changes
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="flex-1 rounded-lg bg-zinc-800 px-4 py-3 font-semibold text-white transition hover:bg-zinc-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Form;

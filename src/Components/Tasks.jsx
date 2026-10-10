import { useContext, useState } from "react";
import dataContext from "../Context";
import Form from "./Update";

function QuestionCard({ question }) {
  const { setQuestion } = useContext(dataContext);
  const [editingIndex, setEditingIndex] = useState(null);

  // Delete question
  const handleDelete = (index) => {
    setQuestion((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleUpdate = (updatedQuestion) => {
    console.log(updatedQuestion);
    setQuestion((prev) =>
      prev.map((item, index) => (index === editingIndex ? updatedQuestion : item)),
    );
    setEditingIndex(null);
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {editingIndex !== null && (
        <div>
          <Form
            key={editingIndex}
            question={question[editingIndex]}
            onSubmit={handleUpdate}
            onCancel={() => setEditingIndex(null)}
          />
        </div>
      )}
      {question.map((item, index) => (
        <div key={index} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg">
          {/* Top */}
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
              {item.category.join(", ")}
            </span>

            <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-400">
              {item.difficulty}
            </span>
          </div>

          {/* Question */}
          <h2 className="mb-5 text-lg font-semibold text-white">{item.question}</h2>

          {/* Status */}
          <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
            <span className="text-sm text-zinc-400">Status</span>

            <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400">
              {item.status}
            </span>
          </div>

          {/* Actions */}
          <div className="mt-5 flex gap-3">
            <button
              onClick={() => handleEdit(index)}
              className="flex-1 rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/20"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(index)}
              className="flex-1 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionCard;

"use client";

import { Problem } from "@/types";
import { useToggleProgressMutation } from "@/redux/api/progressApi";

export default function ProblemCard({
  problem,
  isCompleted,
}: {
  problem: Problem;
  isCompleted: boolean;
}) {
  const [toggle] = useToggleProgressMutation();

  return (
    <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold">{problem.title}</h3>

      <div className="flex gap-3 mt-2 text-sm">
        <a href={problem.youtubeLink}>YT</a>
        <a href={problem.leetcodeLink}>LC</a>
        <a href={problem.articleLink}>Article</a>
      </div>

      <div className="flex justify-between mt-3">
        <span
          className={`px-2 py-1 rounded text-sm
          ${problem.difficulty === "easy" && "bg-green-200"}
          ${problem.difficulty === "medium" && "bg-yellow-200"}
          ${problem.difficulty === "hard" && "bg-red-200"}
        `}
        >
          {problem.difficulty}
        </span>

        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggle(problem._id)}
        />
      </div>
    </div>
  )
}
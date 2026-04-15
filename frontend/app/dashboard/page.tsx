"use client";

import { useGetProblemsQuery } from "@/redux/api/problemApi";
import { useGetProgressQuery } from "@/redux/api/progressApi";
import ProblemCard from "@/components/ProblemCard";

export default function Dashboard() {
  const { data: problems = [], isLoading } = useGetProblemsQuery();
  const { data: progress = [] } = useGetProgressQuery();

  if (isLoading) return <p>Loading...</p>;

  const completedSet = new Set(progress.map(p => p.problemId));

  return (
    <div className="p-6">
      {problems.map((p) => (
        <ProblemCard
          key={p._id}
          problem={p}
          isCompleted={completedSet.has(p._id)}
        />
      ))}
    </div>
  );
}
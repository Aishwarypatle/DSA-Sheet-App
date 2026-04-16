import ProblemCard from "./ProblemCard";
import { Problem } from "@/types";

export default function TopicsSection({
  problems,
  completedSet,
}: {
  problems: Problem[];
  completedSet: Set<string>;
}) {
  const grouped = problems?.reduce((acc, p) => {
    if (!acc[p.topic]) acc[p.topic] = [];
    acc[p.topic].push(p);
    return acc;
  }, {} as Record<string, Problem[]>);

  return (
    <div className="p-6">
      {Object.entries(grouped).map(([topic, probs]) => (
        <div key={topic} className="mb-6">
          <h2 className="text-lg font-bold mb-3">{topic}</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {probs.map((p) => (
              <ProblemCard
                key={p._id}
                problem={p}
                isCompleted={completedSet.has(p._id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
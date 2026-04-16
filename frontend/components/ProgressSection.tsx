export default function ProgressSection({
  completed,
  total,
}: {
  completed: number;
  total: number;
}) {
  const percent = Math.round((completed / total) * 100);

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-xl shadow max-w-lg">
        <h2 className="text-xl font-bold mb-4">Overall Progress</h2>

        <div className="bg-gray-300 h-3 rounded">
          <div
            className="bg-blue-500 h-3 rounded"
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="mt-3">
          {completed} out of {total} problems solved
        </p>
      </div>
    </div>
  )
}
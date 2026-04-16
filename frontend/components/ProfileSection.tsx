export default function ProfileSection({
  completed,
  total,
}: {
  completed: number;
  total: number;
}) {
  const percent = Math.round((completed / total) * 100);

  return (
    <div className="p-6">
      <div className="bg-white shadow rounded-xl p-6 max-w-md">
        <h2 className="text-xl font-bold mb-4">Profile</h2>

        <p className="mb-2">Name: Demo User</p>
        <p className="mb-4">Email: demo@mail.com</p>

        <div>
          <p className="text-sm mb-1">Progress</p>
          <div className="bg-gray-300 h-2 rounded">
            <div
              className="bg-green-500 h-2 rounded"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="text-sm mt-2">
            {completed} / {total} completed
          </p>
        </div>
      </div>
    </div>
  );
}
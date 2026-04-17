export default function ProgressBar({
    completed,
    total,
}: {
    completed: number
    total: number
}) {
    const percent = (completed / total) * 100
    console.log({percent})
    
    return (
        <div className="mb-4">
            <p className="text-sm">{completed} / {total} completed</p>

            <div className="bg-gray-300 h-2 rounded">
                <div
                    className="bg-emerald-500/30 hover:bg-emerald-400/60 h-2 rounded"
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    )
}
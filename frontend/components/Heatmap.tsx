export default function Heatmap() {
    const days = Array.from({ length: 7 })

    return (
        <div className="flex gap-2">
            {days?.map((_, i) => (
                <div
                    key={i}
                    className="w-6 h-6 rounded bg-emerald-500/30 hover:bg-emerald-400/60/20 hover:bg-emerald-500/30 hover:bg-emerald-400/60/60 transition"
                />
            ))}
        </div>
    )
}
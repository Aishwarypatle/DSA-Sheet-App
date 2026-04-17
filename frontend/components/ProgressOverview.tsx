"use client"

export default function ProgressOverview({
    total,
    completed,
    problems,
    completedSet,
}: any) {

    const percent = total === 0 ? 0 : Math.round((completed / total) * 100)
    const easyTotal = problems?.filter((p: any) => p.difficulty === "easy").length
    const mediumTotal = problems?.filter((p: any) => p.difficulty === "medium").length
    const hardTotal = problems?.filter((p: any) => p.difficulty === "hard").length

    const easyDone = problems?.filter(
        (p: any) => p.difficulty === "easy" && completedSet.has(p._id)
    ).length

    const mediumDone = problems?.filter(
        (p: any) => p.difficulty === "medium" && completedSet.has(p._id)
    ).length

    const hardDone = problems?.filter(
        (p: any) => p.difficulty === "hard" && completedSet.has(p._id)
    ).length

    return (
        <div className="bg-[#1a120f] border border-orange-900/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
                <div className="relative w-20 h-20">
                    <div className="w-full h-full rounded-full border-[6px] border-gray-800 flex items-center justify-center">
                        <span className="text-lg font-semibold text-gray-200">
                            {percent}%
                        </span>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-200">
                        Overall Progress
                    </h2>
                    <p className="text-gray-400">
                        {completed} / {total}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">

                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="text-gray-300">
                        Easy {easyDone}/{easyTotal}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="text-gray-300">
                        Medium {mediumDone}/{mediumTotal}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="text-gray-300">
                        Hard {hardDone}/{hardTotal}
                    </span>
                </div>

            </div>
        </div>
    )
}
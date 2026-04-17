"use client"

import StreakCard from "./StreakCard"
import Heatmap from "./Heatmap"
import { useSelector } from "react-redux"
import ProgressOverview from "./ProgressOverview"

export default function ProgressSection({
    progress,
    problems,
}: {
    progress: any
    problems: any
}) {
    const completed = progress.length
    const total = problems.length
    const user = useSelector((state: any) => state.auth.user)
    const percent = Math.round((completed / total) * 100)
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Your Progress</h1>
            <ProgressOverview
                completed={completed}
                total={total}
                problems={problems}
                completedSet={new Set(progress?.map((p: any) => p.problemId))}
            />
            <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-[#111827] p-6 rounded-2xl shadow-md">
                    <h2 className="text-lg font-semibold mb-4">
                        Overall Progress
                    </h2>
                    <div className="bg-gray-700 h- rounded-full">
                        <div
                            className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:bg-indigo-600 h-3 rounded-full"
                            style={{ width: `${percent}%` }}
                        />
                    </div>
                    <p className="text-sm text-gray-500 mt-3">
                        {completed} / {total} completed
                    </p>
                </div>
                <StreakCard streak={user?.streak || 0} />
            </div>
            <div className="mt-6 bg-[#111827] p-6 rounded-2xl">
                <p className="text-sm text-gray-500 mb-3">
                    Activity (Last 7 Days)
                </p>
                <Heatmap />
            </div>

        </div>
    )
}
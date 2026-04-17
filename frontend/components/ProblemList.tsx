"use client"

import { Problem } from "@/types"
import { useToggleProgressMutation } from "@/redux/api/progressApi"
import { capitalize } from "@/utils/groupProblems"

export default function ProblemList({
    problems,
    completedSet,
}: {
    problems: Problem[]
    completedSet: Set<string>
}) {
    const [toggle] = useToggleProgressMutation()

    return (
        <div className="bg-[#111827] rounded-xl overflow-hidden m-4 mt-8">

            {/* Header */}
            <div className="grid grid-cols-4 px-4 py-3 text-gray-500 text-sm border-b border-gray-700 sticky top-0 bg-[#0b1120] border-b border-gray-800">
                <span>Problem</span>
                <span>Difficulty</span>
                <span>Links</span>
                <span className="text-center">Done</span>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
                {problems?.map((p) => (
                    <div
                        key={p._id}
                        className="grid grid-cols-4 px-4 py-3 items-center border-b border-gray-800 hover:bg-[#0b1120] border-b border-gray-800 transition"
                    >
                        <span className="font-medium">{p.title}</span>

                        <span
                            className={`text-sm px-2 py-1 rounded w-fit
                                ${p.difficulty === "easy" && "bg-emerald-500/30 hover:bg-emerald-400/60/10 text-green-300"}
                                ${p.difficulty === "medium" && "bg-amber-500/10 text-amber-300"}
                                ${p.difficulty === "hard" && "bg-rose-500/10 text-rose-300"}
                            `}
                        >
                            {capitalize(p.difficulty)}
                        </span>

                        <div className="flex gap-6 text-sm">
                            <a href={p.leetcodeLink} target="_blank" className="text-yellow-800 bg-yellow-100 p-1 rounded text-sm hover:underline">Practice</a>
                            <a href={p.youtubeLink} target="_blank" className="text-blue-800 bg-blue-100 p-1 rounded text-sm hover:underline">Youtube</a>
                            <a href={p.articleLink} target="_blank" className="text-purple-800 bg-purple-100 p-1 rounded text-sm hover:underline">Article</a>
                        </div>

                        <div className="flex justify-center">
                            <input
                                type="checkbox"
                                checked={completedSet.has(p._id)}
                                onChange={() => toggle(p._id)}
                                className="w-5 h-5 accent-green-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
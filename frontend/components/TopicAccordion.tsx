"use client"

import { useState } from "react"
import ProblemList from "./ProblemList"

export default function TopicAccordion({
    topic,
    problems,
    completedSet,
}: any) {
    const [open, setOpen] = useState(false)

    const completed = problems?.filter((p: any) =>
        completedSet.has(p._id)
    ).length

    return (
        <div className="bg-[#111827] rounded-xl border border-gray-800 mb-4">
            <div
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-[#1f2937]"
            >
                <div>
                    <h2 className="font-semibold">{topic}</h2>
                    <p className="text-sm text-gray-500">
                        {completed} / {problems.length} completed
                    </p>
                </div>

                <span>{open ? "−" : "+"}</span>
            </div>

            {/* Progress bar */}
            <div className="px-4 pb-3">
                <div className="bg-gray-800 h-1 rounded">
                    <div
                        className="bg-indigo-500 h-1 rounded"
                        style={{
                            width: `${(completed / problems.length) * 100}%`,
                        }}
                    />
                </div>
            </div>

            {/* Body */}
            {open && (
                <div className="border-t border-gray-800 p-4 space-y-6">

                    {/* EASY */}
                    {problems?.filter((p: any) => p.difficulty === "easy").length > 0 && (
                        <div>
                            <h3 className="text-sm text-gray-400 mb-2">Easy</h3>
                            <ProblemList
                                problems={problems?.filter((p: any) => p.difficulty === "easy")}
                                completedSet={completedSet}
                            />
                        </div>
                    )}

                    {problems?.filter((p: any) => p.difficulty === "medium").length > 0 && (
                        <div>
                            <h3 className="text-sm text-gray-400 mb-2">Medium</h3>
                            <ProblemList
                                problems={problems?.filter((p: any) => p.difficulty === "medium")}
                                completedSet={completedSet}
                            />
                        </div>
                    )}

                    {problems?.filter((p: any) => p.difficulty === "hard").length > 0 && (
                        <div>
                            <h3 className="text-sm text-gray-400 mb-2">Hard</h3>
                            <ProblemList
                                problems={problems?.filter((p: any) => p.difficulty === "hard")}
                                completedSet={completedSet}
                            />
                        </div>
                    )}

                </div>
            )}
        </div>
    )
}
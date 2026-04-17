"use client"

import Navbar from "@/components/Navbar"
import TopicAccordion from "@/components/TopicAccordion"
import { useGetProblemsQuery } from "@/redux/api/problemApi"
import { useGetProgressQuery } from "@/redux/api/progressApi"

export default function TopicsPage() {
    const { data: problems = [] } = useGetProblemsQuery()
    const { data: progress = [] } = useGetProgressQuery()

    const completedSet = new Set(progress?.map((p) => p.problemId))

    const groupByTopic = (problems: any[]) => {
        return problems.reduce((acc: any, p) => {
            if (!acc[p.topic]) acc[p.topic] = []
            acc[p.topic].push(p)
            return acc
        }, {})
    }

    const grouped = groupByTopic(problems)

    return (
        <div>
            <Navbar />

            <div className="p-6 max-w-6xl mx-auto space-y-4">
                <h1 className="text-2xl font-bold mb-4">DSA Sheet</h1>

                {Object.keys(grouped)?.map((topic) => (
                    <TopicAccordion
                        key={topic}
                        topic={topic}
                        problems={grouped[topic]}
                        completedSet={completedSet}
                    />
                ))}
            </div>
        </div>
    )
}
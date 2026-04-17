"use client"

import TopicAccordion from "./TopicAccordion"
import { groupByTopic } from "@/utils/groupProblems"

export default function TopicsSection({
    problems,
    completedSet,
}: any) {
    const grouped = groupByTopic(problems)

    return (
        <div className="p-6 max-w-6xl mx-auto">

            <h1 className="text-2xl font-bold mb-6">
                DSA Sheet
            </h1>

            {Object.keys(grouped)?.map((topic) => (
                <TopicAccordion
                    key={topic}
                    topic={topic}
                    problems={grouped[topic]}
                    completedSet={completedSet}
                />
            ))}
        </div>
    )
}
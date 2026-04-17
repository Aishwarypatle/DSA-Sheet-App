"use client"

import Navbar from "@/components/Navbar"
import ProfileSection from "@/components/ProfileSection"
import { useGetProblemsQuery } from "@/redux/api/problemApi"
import { useGetProgressQuery } from "@/redux/api/progressApi"

export default function ProfilePage() {
    const { data: problems = [] } = useGetProblemsQuery()
    const { data: progress = [] } = useGetProgressQuery()

    return (
        <div>
            <Navbar />

            <ProfileSection
                completed={progress.length}
                total={problems.length}
            />
        </div>
    )
}
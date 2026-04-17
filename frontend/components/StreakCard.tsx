"use client"

export default function StreakCard({
    streak,
}: {
    streak: number
}) {
    return (
        <div className="bg-[#111827] p-5 rounded-xl shadow-md flex items-center justify-between">

            {/* <div> */}
            <p className="text-gray-500 text-sm">Current Streak</p>
            <h2 className="text-2xl font-bold mt-1">
                {streak} Days 🔥
            </h2>
            {/* </div> */}

            {/* <div className="text-4xl">🔥</div> */}
        </div>
    )
}
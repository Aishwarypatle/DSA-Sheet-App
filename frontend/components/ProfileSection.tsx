"use client"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { logout } from "@/redux/slices/authSlice"
import Heatmap from "./Heatmap"

export default function ProfileSection({
    completed,
    total,
}: {
    completed: number
    total: number
}) {
    const percent = Math.round((completed / total) * 100)
    const user = useSelector((state: any) => state.auth.user)
    const dispatch = useDispatch()
    console.log({ user })

    return (
        <div className="flex justify-center p-6">
            <div className="bg-[#111827] text-gray-200 p-6 rounded-2xl shadow-xl w-full max-w-md">

                <div className="flex flex-col items-center">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt="avatar"
                        className="w-20 h-20 rounded-full border-2 border-blue-500 mb-3"
                    />

                    <h2 className="text-xl font-semibold">{user?.name}</h2>
                    <p className="text-gray-500 text-sm">{user?.email}</p>
                </div>

                <div className="my-5 border-t border-gray-700"></div>

                <div className="mt-4">
                    <p className="text-sm mb-2">Your Progress</p>

                    <div className="bg-gray-700 h-2 rounded">
                        <div
                            className="bg-emerald-500/30 hover:bg-emerald-400/60 h-2 rounded"
                            style={{ width: `${percent}%` }}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-sm text-gray-500">
                        🔥 Streak: {user?.streak || 0} days
                    </p>
                </div>

                <div className="mt-6">
                    <p className="text-sm text-gray-500 mb-2">
                        Activity (Last 7 Days)
                    </p>
                    <Heatmap />
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-[#0b1120] border-b border-gray-800 p-3 rounded-lg text-center">
                        <p className="text-gray-500 text-sm">Solved</p>
                        <p className="text-lg font-bold">{completed}</p>
                    </div>

                    <div className="bg-[#0b1120] border-b border-gray-800 p-3 rounded-lg text-center">
                        <p className="text-gray-500 text-sm">Remaining</p>
                        <p className="text-lg font-bold">{total - completed}</p>
                    </div>
                </div>

                <button
                    onClick={() => {
                        dispatch(logout())
                        localStorage.clear()
                        window.location.href = "/login"
                    }}
                    className="w-full mt-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
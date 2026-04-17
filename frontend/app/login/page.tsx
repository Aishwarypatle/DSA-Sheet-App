"use client"

import AuthForm from "@/components/AuthForm"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex bg-gradient-to-br from-[#111827] via-[#bg-[#0d1117] border-b border-gray-800] to-black text-gray-200">
            <div className="hidden md:flex w-1/2 items-center justify-center relative overflow-hidden">
                <div className="absolute w-96 h-96 bg-gradient-to-r from-indigo-500 to-violet-500 hover:bg-indigo-600 opacity-20 blur-3xl rounded-full top-20 left-20" />
                <div className="z-10 text-center px-10">
                    <h1 className="text-4xl font-bold mb-4">
                        Track Your DSA Journey 🚀
                    </h1>
                    <p className="text-gray-500">
                        Build consistency. Crack interviews.
                    </p>
                </div>
            </div>
            <div className="flex w-full md:w-1/2 items-center justify-center px-6">
                <AuthForm />
            </div>
        </div>
    )
}
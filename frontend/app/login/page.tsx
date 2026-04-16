"use client";

import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full top-20 left-20" />

        <div className="z-10 text-center px-10">
          <h1 className="text-4xl font-bold mb-4">
            Track Your DSA Journey 🚀
          </h1>
          <p className="text-gray-400">
            Build consistency. Crack interviews.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6">
        <AuthForm />
      </div>
    </div>
  );
}
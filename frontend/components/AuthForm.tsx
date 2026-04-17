"use client";

import { useState } from "react";
import { useLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [login] = useLoginMutation();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

    const handleSubmit = async () => {
        const res = await login({
            email: form.email,
            password: form.password,
    }).unwrap()

    localStorage.setItem("token", res.token);
    router.push("/dashboard");
  };

  return (
    <div className="w-full max-w-md p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-500/30">

      {/* Glass Card */}
      <div className="bg-[#0f172a]/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl">

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">
          {isLogin ? "Welcome Back 👋" : "Create Account"}
        </h2>

        <p className="text-gray-400 text-sm mb-6">
          {isLogin
            ? "Login to continue your journey"
            : "Start your DSA journey today"}
        </p>

        {/* Inputs */}
        <div className="space-y-4">

          <input
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#020617] border border-gray-700 
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 
            outline-none transition"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-[#020617] border border-gray-700 
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 
            outline-none transition"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg bg-[#020617] border border-gray-700 
              focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 
              outline-none transition"
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
                })
              }
            />
          )}
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 
          hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="px-3 text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Social (UI only) */}
        <div className="flex justify-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#020617] border border-gray-700 hover:border-blue-500 cursor-pointer">
            G
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#020617] border border-gray-700 hover:border-blue-500 cursor-pointer">
            F
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-6 text-center">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  )
}
"use client"

import { toast } from "react-toastify"
import { useState } from "react"
import { useLoginMutation, useRegisterMutation } from "@/redux/api/authApi"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { setCredentials } from "@/redux/slices/authSlice"


export default function AuthForm() {

    const [isLogin, setIsLogin] = useState(true)
    const [login] = useLoginMutation()
    const [register] = useRegisterMutation()
    const router = useRouter()
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
    })


    const handleSubmit = async () => {
        try {
            let res: any

            if (isLogin) {
                res = await login({
                    email: form.email,
                    password: form.password,
                }).unwrap()

                toast.success("Login successful 🎉")
            } else {
                res = await register({
                    name: form.name,
                    email: form.email,
                    password: form.password,
                }).unwrap()

                toast.success("Account created 🚀")
            }

            dispatch(
                setCredentials({
                    user: res.user,
                    token: res.token,
                })
            )

            localStorage.setItem("token", res.token)
            localStorage.setItem("user", JSON.stringify(res?.user))

            router.push("/dashboard")

        } catch (err: any) {
            toast.error(err?.data?.message || "Error")
        }
    }

    return (
        <div className="w-full max-w-md p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-500/30">
            <div className="bg-[#111827]/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-2">
                    {isLogin ? "Welcome Back 👋" : "Create Account"}
                </h2>

                <p className="text-gray-500 text-sm mb-6">
                    {isLogin
                        ? "Login to continue your journey"
                        : "Start your DSA journey today"}
                </p>

                <div className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 rounded-lg bg-[#0b1120] border-b border-gray-800 border border-gray-700 
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 
                            outline-none transition"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    name: e.target.value,
                                })
                            }
                        />
                    )}
                    <input
                        placeholder="Email"
                        className="w-full p-3 rounded-lg bg-[#0b1120] border-b border-gray-800 border border-gray-700 
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 
                        outline-none transition"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-lg bg-[#0b1120] border-b border-gray-800 border border-gray-700 
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 
                        outline-none transition"
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                    />

                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 
                    hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
                    disabled={!form.email || !form.password || (!isLogin && !form.name)}
                >
                    {isLogin ? "Login" : "Create Account"}
                </button>

                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-700" />
                    <span className="px-3 text-sm text-gray-500">or</span>
                    <div className="flex-1 h-px bg-gray-700" />
                </div>

                <p className="text-sm text-gray-500 mt-6 text-center">
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
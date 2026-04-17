"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const menuItems = [
    { label: "progress", path: "/dashboard" },
    { label: "topics", path: "/topics" },
    { label: "profile", path: "/profile" },
  ]

  return (
    <nav className="bg-[#0d1117] border-b border-gray-800 px-6 py-4 text-gray-200">
      <div className="flex justify-between items-center">

        <div
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-md text-sm font-bold">
            DSA
          </div>
          <span className="text-lg font-semibold tracking-wide">
            Tracker
          </span>
        </div>

        <div className="hidden md:flex gap-3">
          {menuItems?.map((item) => {
            const isActive = pathname === item.path

            return (
              <button
                key={item.label}
                onClick={() => router.push(item.path)}
                className={`px-4 py-2 rounded-lg text-sm capitalize border transition-all duration-200
                  
                  ${isActive
                    ? "bg-indigo-500/20 border-indigo-500 text-indigo-400"
                    : "border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 hover:bg-[#111827]"
                  }

                  active:scale-95
                `}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-3 md:hidden">
          {menuItems?.map((item) => {
            const isActive = pathname === item.path

            return (
              <button
                key={item.label}
                onClick={() => {
                  router.push(item.path)
                  setOpen(false)
                }}
                className={`px-4 py-2 rounded-lg text-sm capitalize border transition-all
                  
                  ${isActive
                    ? "bg-indigo-500/20 border-indigo-500 text-indigo-400"
                    : "border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
                  }
                `}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      )}
    </nav>
  )
}
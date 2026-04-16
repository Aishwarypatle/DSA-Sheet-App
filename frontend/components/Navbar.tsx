"use client";

import { useState } from "react";

export default function Navbar({
  active,
  setActive,
}: {
  active: string;
  setActive: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const menuItems = ["profile", "topics", "progress"];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">DSA Tracker</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <span
              key={item}
              className={`cursor-pointer capitalize ${
                active === item ? "text-green-400" : ""
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mt-4 flex flex-col gap-3 md:hidden">
          {menuItems.map((item) => (
            <span
              key={item}
              className={`cursor-pointer capitalize ${
                active === item ? "text-green-400" : ""
              }`}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </nav>
  )
}
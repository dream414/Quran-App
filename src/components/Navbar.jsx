import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    if (!q.trim()) return;
    navigate(`/?q=${encodeURIComponent(q.trim())}`);
    setQ("");
    setOpen(false);
  }

  return (
    <nav className="bg-cyan-300 shadow-sm border-amber-400 border-y-4">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <img src="/logoquran.png" alt="logo"
         className="w-15 h-15 object-cover rounded-md "/>
        <Link to="/" className="font-bold text-4xl hover:text-red-500">
          Quranic
        </Link>

        <form onSubmit={submit} className="hidden md:flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="border rounded px-3 py-2 w-64"
            placeholder="Surah یا لفظ تلاش کریں..."
          />
          <button className="bg-cyan-600 hover:bg-red-400  text-white px-3 py-2 rounded cursor-pointer transform transition duration-300 hover:scale-110">Search</button>
        </form>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 bg-green-600 text-white border rounded cursor-pointer transform transition duration-300 hover:scale-105">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <form onSubmit={submit} className="flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="border rounded px-3 py-2 flex-1"
              placeholder="Surah یا لفظ تلاش کریں..."
            />
            <button className="bg-red-700 text-white px-3 py-2 rounded cursor-pointer">Search</button>
          </form>
        </div>
      )}
    </nav>
  );
}

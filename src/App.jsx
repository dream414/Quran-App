import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Surah from "./pages/Surah";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surah/:id" element={<Surah />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="bg-gradient-to-r from-cyan-400 to-cyan-600  border-amber-400 border-t-4 py-4 shadow-inner">
  <div className="container mx-auto text-center text-sm text-white tracking-wide">
    <span className="font-semibold">Islamic Website Developer</span> "Read, Learn, and Reflect on the Qur'an"
  </div>
</footer>

    </div>
  );
}

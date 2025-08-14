import React from "react";

export default function VerseCard({ ayah, index }) {
  return (
    <div className="bg-white p-4 rounded shadow-sm mb-3 cursor-pointer hover:text-white hover:bg-amber-500 border-2 border-cyan-500 hover:shadow-lg 
      transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-right font-arabic text-2xl leading-relaxed ">
            {ayah.text}
          </div>
        </div>
        <div className="ml-4 text-red-500">
          <div className="text-sm">#{index}</div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function SurahCard({ surah }) {
  if (!surah) return null; // Defensive check

  return (
    <Link to={`/surah/${surah.number}`} className="group">
      <div
        className="bg-white p-4 rounded-lg shadow hover:shadow-lg transform transition 
          duration-300 hover:scale-105 hover:bg-cyan-500 cursor-pointer border-2 border-cyan-400 
          hover:border-amber-400 min-w-[320px] flex flex-col md:flex-row items-center md:items-start justify-between gap-4"
      >
        {/* Left side: Text */}
        <div className="flex-1">
          <h3 className="font-semibold group-hover:text-white transition">
            {surah.englishName}{" "}
            <span className="text-sm text-slate-500 group-hover:text-white transition">
              ({surah.englishNameTranslation})
            </span>
          </h3>
          <p className="text-sm text-slate-500 group-hover:text-white transition">
            آیات: {surah.numberOfAyahs}
          </p>
          <div
            className="text-2xl font-arabic group-hover:text-white  mt-2 
              transform transition-transform duration-300 hover:scale-110 active:scale-125"
          >
            {surah.name}
          </div>
        </div>

        {/* Right side: Quran Image */}
        <div className="flex-shrink-0">
          <img
            src="/quran.jpg" // اپنی قرآن کی تصویر کا path یہاں ڈالیں
            alt="Quran"
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md shadow-md border border-yellow-400"
          />
        </div>
      </div>
    </Link>
  );
}

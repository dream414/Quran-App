import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSurah } from "../api";
import VerseCard from "../components/VerseCard";

export default function Surah() {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchSurah(id)
      .then((res) => {
        setSurah(res.data.data);
      })
      .catch((err) => {
        console.error(err);
        setSurah(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading surah…</div>;
  if (!surah) return <div>Surah not found.</div>;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-red-600">
          {surah.englishName} — {surah.name}
        </h2>
        <p className="text-sm text-slate-600">
          Ayahs: {surah.numberOfAyahs} • Revelation Type: {surah.revelationType}
        </p>
      </div>

      <div>
        {surah.ayahs.map((ayah, i) => (
          <VerseCard key={ayah.number} ayah={ayah} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { fetchSurahList } from "../api";
import SurahCard from "../components/SurahCard";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const loc = useLocation();
  const params = new URLSearchParams(loc.search);
  const q = params.get("q") || "";

  useEffect(() => {
    setLoading(true);
    fetchSurahList()
      .then((res) => {
        setList(res.data.data || []);
      })
      .catch((err) => {
        console.error(err);
        setList([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = list.filter((s) => {
    if (!q) return true;
    const term = q.toLowerCase();
    return (
      s.englishName.toLowerCase().includes(term) ||
      s.name.includes(term) ||
      (s.englishNameTranslation || "").toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-red-500 ">Surah Index</h1>
      {loading ? (
        <div>Loading…</div>
      ) : (
        <>
          {q && (
            <p className="mb-4">
              Search results for: <strong>{q}</strong>
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s) => (
              <SurahCard key={s.number} surah={s} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

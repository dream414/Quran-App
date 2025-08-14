import axios from "axios";

const API_BASE = "https://api.alquran.cloud/v1";

export const fetchSurahList = () => axios.get(`${API_BASE}/surah`);
export const fetchSurah = (id) => axios.get(`${API_BASE}/surah/${id}`);

// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { api } from "../api/client";
import '../assets/css/Dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    api.get("/stats/summary").then(res => setStats(res.data));
  }, []);
  if (!stats) return <p>Loading...</p>;
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>Total students: {stats.totalStudents}</li>
        <li>Total books: {stats.totalBooks}</li>
        <li>Borrowed now: {stats.borrowedNow}</li>
      </ul>
    </div>
  );
}

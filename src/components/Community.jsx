import React from "react";
import './Community.css';

function Community({ history = [] }) {
  // Limit to last 10 updates
  const recentHistory = history.slice(0, 10);

  if (!recentHistory || recentHistory.length === 0) {
    return (
      <section className="communitycard" id="HistorySection">
        <h2>Recent Updates</h2>
        <ul id="HistoryList">
          <li>No updates yet</li>
        </ul>
      </section>
    );
  }

  return (
    <section className="communhistorycard" id="HistorySection">
      <h2 >Recent Updates</h2>
      <ul id="HistoryList">
        {recentHistory.map((h, i) => (
          <li key={i}>
            <strong>{h.status}</strong>: {h.location && h.location.street ? h.location.street : "Unknown street"} <em>({new Date(h.time).toLocaleString()})</em>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Community;
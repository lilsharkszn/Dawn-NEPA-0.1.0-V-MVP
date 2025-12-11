import React, { useState, useEffect } from "react";
import timeAgo from "../utils/time";
import { IconClock, IconMapPin } from "./Icons";
import MottoVideo from "../assets/videos/homelight.mp4";
import "./AddressForm.css"

function AddressForm({ onSaveLocation, recentStreets = [], onSelectRecent }) {
  const [area, setArea] = useState("");
  const [district, setDistrict] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [street, setStreet] = useState("");
  const [localRecent, setLocalRecent] = useState([]);

  // Load recent streets from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentStreets") || "[]");
    setLocalRecent(stored);
  }, []);

  const handleSave = () => {
    const missing = [];
    if (!area) missing.push("Region");
    if (!district) missing.push("District");
    if (!neighbourhood) missing.push("Neighbourhood");
    if (!street) missing.push("Street");

    if (missing.length) {
      window.alert(
        `Please fill the following field(s) before checking power status: ${missing.join(", ")}`
      );
      return;
    }

    const payload = { area, district, neighbourhood, street, status: "--", time: Date.now() };

    // Save to parent
    if (onSaveLocation) onSaveLocation(payload);

    // Save/update recent streets in localStorage (max 5)
    const stored = JSON.parse(localStorage.getItem("recentStreets") || "[]");
    const newStored = [payload, ...stored.filter(s => s.street !== street)].slice(0, 5);
    localStorage.setItem("recentStreets", JSON.stringify(newStored));
    setLocalRecent(newStored);

    // Navigate to status page
    window.location.hash = "#/status";
  };

  return (
    <>
      <section className="addressformcard" id="locationSetup">
        <h2>Set Your Location</h2>

        <form id="addressForm" onSubmit={(e) => e.preventDefault()}>
          <label>Choose Region:</label>
          <select id="areaSelect" value={area} onChange={(e) => setArea(e.target.value)}>
            <option value="">-- Select Area --</option>
            <option>Mainland</option>
            <option>Island</option>
            <option>Outskirts</option>
          </select>

          <label>Enter District:</label>
          <input
            type="text"
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="Ogba"
          />

          <label>Enter Neighbourhood:</label>
          <input
            type="text"
            id="neighbourhood"
            value={neighbourhood}
            onChange={(e) => setNeighbourhood(e.target.value)}
            placeholder="Haruna"
          />

          <label>Your Street:</label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Kasamu Street"
          />

          <button
            type="button"
            id="powerStatusBtn"
            onClick={handleSave}
            disabled={!area || !district || !neighbourhood || !street}
            aria-disabled={!area || !district || !neighbourhood || !street}
          >
            Power Status
          </button>
        </form>

        <div id="recentStreetsSection">
          <h3>Recent Streets</h3>
          <ul id="recentStreetsList" className="recent-streets">
            {localRecent.length === 0 && <li>No recent streets</li>}
            {localRecent.map((s, i) => {
              if (!s) return null;

              const time = s.time ? new Date(s.time).toLocaleString() : "--";
              const rel = s.time ? timeAgo(s.time) : "";
              const status = s.status || "--";
              const districtText = s.district ? s.district : "";
              const statusClass =
                status === "ON"
                  ? "status-badge on"
                  : status === "OFF"
                  ? "status-badge off"
                  : "status-badge unknown";

              return (
                <li
                  key={i}
                  className="recent-item"
                  onClick={() => onSelectRecent && onSelectRecent(s)}
                >
                  <div className="info">
                    <div className="street">{s.street}</div>
                    <div className="time">
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <IconMapPin className="icon" />
                        {districtText ? `${districtText} • ${time}` : time}
                      </span>
                      <br />
                      <span style={{ fontSize: 11, color: "#889" }}>
                        <IconClock className="icon" />
                        {rel}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className={statusClass}>{status}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="Motto">
        <video
          className="Motto-Video"
          src={MottoVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <div className="Motto-Text">
          How far, una get light? Let us know!
        </div>
      </section>
    </>
  );
}

export default AddressForm;
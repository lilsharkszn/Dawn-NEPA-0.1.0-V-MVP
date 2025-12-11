import React from "react";
import './PowerStatus.css';

function PowerStatus({ visible = false, location = null, powerStatus = "--", lastUpdated = null, onChangeLocation }) {
  if (!visible) return null;

  const locTitle = location ? `${location.street || ""} - ${location.neighbourhood || ""}` : "Your Location";

  return (
    <section className="powerstatcard" id="statusSection">
      <h2 id="locationTitle">{locTitle}</h2>

      <div id="bandDisplay" className="tag">{location && location.area ? location.area : ""}</div>

      <div id="statusDisplay" className="status-box">
        <p id="currentStatus">{powerStatus}</p>
        <small id="lastUpdated">Last updated: {lastUpdated ? new Date(lastUpdated).toLocaleString() : "--"}</small>
      </div>

      <button id="changeLocationBtn" className="secondary-btn" onClick={onChangeLocation}>
        Change Location
      </button>
    </section>
  );
}

export default PowerStatus;
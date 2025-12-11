import React from "react";
import './PowerOnOff.css';

function PowerOnOff({ visible = false, onLightOn, onLightOff, notification = "" }) {
  if (!visible) return null;

  return (
    <section className="poweronoffcard" id="updateControls">
      <h2>Update Light Status</h2>

      <button className="on-btn" id="lightOnBtn" onClick={onLightOn}>
        🔌 Light Came ON
      </button>
      <button className="off-btn" id="lightOffBtn" onClick={onLightOff}>
        ⚫ Light Went OFF
      </button>

      <div id="notificationBox">{notification}</div>
    </section>
  );
}

export default PowerOnOff;

import React, { useState, useEffect } from "react";
import PowerStatus from "./PowerStatus";
import PowerOnOff from "./PowerOnOff";
import Community from "./Community";

function StatusPage({ 
  location, 
  onChangeLocation, 
  onPowerOn, 
  onPowerOff, 
  notification: externalNotification = "", 
  history: externalHistory = [] 
}) {
  const [powerStatus, setPowerStatus] = useState("--");
  const [lastUpdated, setLastUpdated] = useState(null);
  const [history, setHistory] = useState(externalHistory);
  const [notification, setNotification] = useState(externalNotification);

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(""), 3000);
    return () => clearTimeout(timer);
  }, [notification]);

  // Log ON/OFF actions only
  const handleLightOn = () => {
    const now = Date.now();
    setPowerStatus("ON");
    setLastUpdated(now);

    setHistory(prev => [
      { status: "ON", location, time: now },
      ...prev
    ]);

    setNotification("Light turned ON");
    if (onPowerOn) onPowerOn();
  };

  const handleLightOff = () => {
    const now = Date.now();
    setPowerStatus("OFF");
    setLastUpdated(now);

    setHistory(prev => [
      { status: "OFF", location, time: now },
      ...prev
    ]);

    setNotification("Light turned OFF");
    if (onPowerOff) onPowerOff();
  };

  return (
    <main style={{ padding: "1rem", maxWidth: 1100, margin: "0 auto" }}>
      
      <PowerStatus
        visible={true}
        location={location}
        powerStatus={powerStatus}
        lastUpdated={lastUpdated}
        onChangeLocation={onChangeLocation}
      />

      <PowerOnOff 
        visible={true}
        onLightOn={handleLightOn}
        onLightOff={handleLightOff}
        notification={notification}
      />

      <Community history={history} />
    </main>
  );
}

export default StatusPage;
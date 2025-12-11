import React, { useEffect, useState } from "react";
import Header from "./Header";
import Landing from "./Landing";
import StatusPage from "./StatusPage";
import About from "./About";
import Feedback from "./Feedback";
import Contact from "./Contact";
import AddressForm from "./AddressForm";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import headerLogoO from "./HeaderLogoO";

function App() {
  // Routing
  const [route, setRoute] = useState(window.location.hash || "#/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [location, setLocation] = useState(null);

  // Recent streets for AddressForm
  const [recentStreets, setRecentStreets] = useState(
    JSON.parse(localStorage.getItem("recentStreets") || "[]")
  );

  // History log for StatusPage
  const [history, setHistory] = useState([]);

  // Hash routing
  useEffect(() => {
    const handleHash = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", handleHash);
    handleHash();
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Landing shown once per session
  useEffect(() => {
    if (route === "#/") {
      const shown = sessionStorage.getItem("landingShown");
      if (!shown) {
        sessionStorage.setItem("landingShown", "1");
        window.location.hash = "#/landing";
      }
    }
  }, [route]);

  // Theme toggle
  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Menu toggle
  const toggleMenu = () => setMenuOpen((s) => !s);
  const closeMenu = () => setMenuOpen(false);

  // Navigation helper
  const navigate = (hash) => {
    try {
      window.location.hash = hash;
    } catch (e) {}
  };

  // Status button handlers
  const handlePowerOn = () => {
    console.log("Power turned ON");
  };

  const handlePowerOff = () => {
    console.log("Power turned OFF");
  };

  // Change location from StatusPage
  const handleChangeLocation = () => {
    window.location.hash = "#/"; // Go back to AddressForm
  };

  // Add a "Checked" entry in history
  const addCheckedHistory = (loc) => {
    if (!loc) return;
    const now = Date.now();
    const entry = { status: "Checked", location: loc, time: now };
    setHistory(prev => [entry, ...prev]);
  };

  // Handle clicking a recent street
  const handleSelectRecent = (s) => {
    setLocation(s);
    addCheckedHistory(s); // log single "Checked" entry
    window.location.hash = "#/status";
  };

  return (
    <div className={`app-root ${theme}`}>
      <Header
        onToggleMenu={toggleMenu}
        menuOpen={menuOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <SideMenu open={menuOpen} onClose={closeMenu} navigate={navigate} />

      <main className="app-content app-content">
        {route === "#/landing" ? (
          <Landing
            headerLogoO={headerLogoO}
            onFinish={() => (window.location.hash = "#/")}
          />
        ) : route === "#/about" ? (
          <About />
        ) : route === "#/feedback" ? (
          <Feedback />
        ) : route === "#/contact" ? (
          <Contact />
        ) : route === "#/status" ? (
          <StatusPage
            location={location}
            onChangeLocation={handleChangeLocation}
            onPowerOn={handlePowerOn}
            onPowerOff={handlePowerOff}
            history={history} // pass history
          />
        ) : (
          <AddressForm
            onSaveLocation={(loc) => {
              setLocation(loc);

              // Add Checked log
              addCheckedHistory(loc);

              // Update recent streets from localStorage
              setRecentStreets(
                JSON.parse(localStorage.getItem("recentStreets") || "[]")
              );
            }}
            recentStreets={recentStreets}
            onSelectRecent={handleSelectRecent}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
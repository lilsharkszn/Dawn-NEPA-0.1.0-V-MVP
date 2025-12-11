import React, { useEffect, useRef } from "react";
import flickerVideo from "../assets/swingingbulb.mp4";
// import headerLogoO from "./HeaderLogoO";
import "./Landing.css";




export default function Landing({ onFinish, headerLogoO }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;

    const tryPlay = () => {
      const p = v.play();
      if (p && p.catch) p.catch(() => { if (onFinish) onFinish(); });
    };

    const onError = () => { if (onFinish) onFinish(); };

    v.addEventListener("canplay", tryPlay);
    v.addEventListener("error", onError);

    const timer = setTimeout(() => { if (onFinish) onFinish(); }, 5000); // 5s max

    return () => {
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("error", onError);
      clearTimeout(timer);
    };
  }, [onFinish]);

  const handleEnded = () => { if (onFinish) onFinish(); };
  const handleSkip = (e) => { if (e) e.stopPropagation(); if (onFinish) onFinish(); };

  return (
    <div
      className="landing-root"
      onClick={handleSkip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleSkip(); }}
    >
      <video
        ref={videoRef}
        className="landing-video"
        src={flickerVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
      />

      {/* Skip button */}
      <div className="landing-overlay">
        <button
          className="landing-skip"
          onClick={(e) => { e.stopPropagation(); handleSkip(); }}
        >
          Skip
        </button>
      </div>

      {/* Centered logo */}
      <div className="logo-flicker">
        <h1 className="landingLogo-text">Dawn NEPA!</h1>
      </div>
    </div>
  );
}
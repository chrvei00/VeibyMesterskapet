import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "./Landing.css"; // Create this CSS file for styling

const Landing: React.FC = () => {
  const [fadeInH1, setFadeInH1] = useState(false);
  const [fadeInP, setFadeInP] = useState(false);
  const [fadeInB, setFadeInB] = useState(false);

  useEffect(() => {
    const timerH1 = setTimeout(() => {
      setFadeInH1(true);
    }, 3000);
    const timerP = setTimeout(() => {
      setFadeInP(true);
    }, 5000);
    const timerB = setTimeout(() => {
      setFadeInB(true);
    }, 7000);

    // Clear the timer when the component unmounts
    return () => {
      clearTimeout(timerH1);
      clearTimeout(timerP);
      clearTimeout(timerB);
    };
  }, []);

  return (
    <div className="landing-page">
      <div className={`fade-in-text ${fadeInH1 ? "fade-in-t" : ""}`}>
        <h1>Velkommen til årets julegave fra Andreas, Magnus og Christian</h1>
        <p className={`fade-in-text ${fadeInP ? "fade-in-t" : ""}`}>
          Men før vi kan avsløre gaven må vi først må vi forsikre oss om at du
          er kvalifisert til å motta den.
        </p>
        <Button
          id={`${!fadeInB ? "hide-button" : "fade-in-button"}`}
          variant="contained"
        >
          Start testen
        </Button>
      </div>
    </div>
  );
};

export default Landing;

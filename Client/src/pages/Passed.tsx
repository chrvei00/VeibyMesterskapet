import React from "react";
import "./Passed.css";

const Passed: React.FC = () => {
  return (
    <div>
      <h1 className="passedText">Gratulerer, du har vist deg verdig!</h1>
      <h3 className="passedText">spill av videoen under</h3>
      <iframe
        src="https://player.vimeo.com/video/897473318?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        width="350"
        height="197"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Julegave 2023"
      ></iframe>
    </div>
  );
};

export default Passed;

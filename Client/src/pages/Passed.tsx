import React from "react";
import Video from "../components/Video";
import "./Passed.css";

const Passed: React.FC = () => {
  return (
    <div>
      <h1 className="passedText">
        Gratulerer, du har vist deg verdig, her er gaven
      </h1>
      <Video videoId={"dQw4w9WgXcQ"} />
    </div>
  );
};

export default Passed;

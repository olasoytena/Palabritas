import { useState } from "react";
import "../css/About.css";

export const About = () => {
  const [dividerPosition, setDividerPosition] = useState(50);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = (dividerPosition / 100) * window.innerWidth;

    const handleMouseMove = (event) => {
      const newWidth = ((startWidth + (event.clientX - startX)) / window.innerWidth) * 100;
      setDividerPosition(Math.max(10, Math.min(90, newWidth)));
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="about-container" onMouseDown={handleMouseDown}>
      <div className="left-section" style={{ width: `${dividerPosition}%` }}>
        <h1>Tena</h1>
      </div>
      <div className="divider"></div>
      <div className="right-section" style={{ width: `${100 - dividerPosition}%` }}>
        <h1>Eduardo</h1>
      </div>
    </div>
  );
};

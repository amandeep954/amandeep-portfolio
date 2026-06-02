import React from "react";
import { skills } from "../constants/portfolioData";

function Marquee() {
  return (
    <div className="marquee-wrap bg-bg2 border-y border-[var(--border)] py-3 overflow-hidden">
      <div className="marquee-inner">
        {skills.concat(skills).map((item, idx) => (
          <span key={`${item}-${idx}`} className="m-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;

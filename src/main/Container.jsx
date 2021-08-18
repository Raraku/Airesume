import React from "react";
import Intro from "./misc/intro";
import Experience from "./misc/experience";
import Stack from "./misc/stack";
import Education from "./misc/Education";

export default function Container() {
  return (
    <div>
      <div className="header-title">Aire.io</div>
      <div className="overlord">
        <Intro />
        <Stack />
        <Experience />
        <Education />
      </div>
      <div className="footer"></div>
    </div>
  );
}

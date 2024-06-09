import React from "react";
import avatar2 from "../../assets/images/avatar3.png";
import "./About.css";

function About() {
  return (
    <div className="aboutContainer" id="about">
      <img src={avatar2} />
      <div className="aboutInfo">
        <h1>More About Me</h1>
        <p>
          "Expressing my aim to pursue a career in engineering, I plan to begin
          my journey at university by specializing in web development. Focusing
          on the enhancement of design skills and aligning with relevant
          guidance is crucial to me. Equipped with training in web development
          and design, I dedicated a year to studying UI design and am currently
          enrolled in a 1.5-year web development course. Known for being highly
          motivated, friendly, empathetic, and determined, my passion lies in
          both design and development. Exploring color and design concepts
          brings me great pleasure."
        </p>
      </div>
    </div>
  );
}

export default About;

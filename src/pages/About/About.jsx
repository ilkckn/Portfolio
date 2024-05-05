import React from "react";
import avatar2 from "../../assets/images/avatar3.png";
import "./About.css";

function About() {
  return (
    <div className="aboutContainer" id="about">
      <img src={avatar2} style={{ width: "25rem" }} />
      <div className="aboutInfo">
        <h1>More About Me</h1>
        <p>
          My objective is to pursue a career in engineering, commencing at
          university as a web developer. I am keen to develop my design skills
          andprogress in line with the relevant guidance. I have received
          training in web development and design. I have spent one year studying
          UI design and am currently undertaking a 1.5-year web development
          course. I am a highly motivated, friendly, empathetic and determined
          individual. I am passionate about design and development. I derive
          great pleasure from exploring colour and design concepts.
        </p>
      </div>
    </div>
  );
}

export default About;

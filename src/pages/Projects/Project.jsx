import React from "react";
import project1 from "../../assets/images/projects/random-picker.jpg";
import project2 from "../../assets/images/projects/watch-ecommerce.jpg";
import "./Project.css";

function Project() {
  return (
    <>
      <div className="projectsContainer" id="projects">
        <div className="projectBoxes">

          <div className="webProjects">
            <div className="box">
              <a href="https://watche-commerce.onrender.com/" target="_blank">
                <img src={project2} alt="project2" />
              </a>
            </div>
            <div className="box">box</div>
            <div className="box">box</div>
          </div>

          <div className="smallProjects">
            <div className="box">
              <a href="https://group-random-picker.onrender.com/" target="_blank">
                <img src={project1} alt="" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Project;

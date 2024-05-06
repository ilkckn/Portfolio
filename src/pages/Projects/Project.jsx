import React from "react";
import project1 from "../../assets/images/projects/random-picker.jpg";
import project2 from "../../assets/images/projects/watch-ecommerce.jpg";
import project3 from "../../assets/images/projects/jewellery-ecommerce.jpg";
import project4 from "../../assets/images/projects/todo-list.jpg";
import "./Project.css";

function Project() {
  return (
    <>
      <div className="projectsContainer" id="projects">

        <div className="projectBoxes">

          <div className="webProjects">
            <h1>Web Projects</h1>
            <div className="projects">
              <div className="box">
                <a href="https://watche-commerce.onrender.com/" target="_blank"><img src={project2} alt="project2" /></a>
                <h3>Watch ECommerce-React</h3>
              </div>
              <div className="box">
                <a href="https://github.com/ilkckn/Jewellery-ECommerce" target="_blank"><img src={project3} alt="" /></a>
                <h3>Jewellery ECommerce-HTML & Css</h3>
              </div>
            </div>
          </div>

          <div className="smallProjects">
            <h1>Small Projects</h1>
            <div className="projects">
              <div className="box">
                <a href="https://group-random-picker.onrender.com/" target="_blank"><img src={project1} alt="" /></a>
                <h3>Random Picker Game-React</h3>
              </div>
              <div className="box">
                <a href="https://todo-list-njrx.onrender.com/" target="_blank"><img src={project4} alt="" /></a>
                <h3>ToDo List-React</h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Project;

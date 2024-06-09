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
              <div className="project1">
                <div className="box">
                  <a
                    href="https://watche-commerce.onrender.com/"
                    target="_blank"
                  >
                    <img src={project2} alt="project2" />
                  </a>
                  <h3>Watch ECommerce-React</h3>
                </div>
                <div className="projectInfos">
                  <h2>Watch Store</h2>
                  <p>
                    An online website for its customers, where they can host and
                    buy different types of watches. If you wish, you can search
                    for watches by type and apply different filters. It has a
                    user-friendly interface and a design that does not strain
                    the eyes.
                  </p>
                  <div className="languages">
                    <div className="language">
                      <p>react</p>
                      <p>css</p>
                    </div>
                    <div className="sourceCode">
                      <a
                        href="https://github.com/ilkckn/WatchE-Commerce.git"
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project1">
                <div className="box">
                  <a
                    href="https://watche-commerce.onrender.com/"
                    target="_blank"
                  >
                    <img src={project2} alt="project2" />
                  </a>
                  <h3>Watch ECommerce-React</h3>
                </div>
                <div className="projectInfos">
                  <h2>Watch Store</h2>
                  <p>
                    An online website for its customers, where they can host and
                    buy different types of watches. If you wish, you can search
                    for watches by type and apply different filters. It has a
                    user-friendly interface and a design that does not strain
                    the eyes.
                  </p>
                  <div className="languages">
                    <div className="language">
                      <p>react</p>
                      <p>css</p>
                    </div>
                    <div className="sourceCode">
                      <a
                        href="https://github.com/ilkckn/WatchE-Commerce.git"
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project1">
                <div className="box">
                  <a
                    href="https://watche-commerce.onrender.com/"
                    target="_blank"
                  >
                    <img src={project2} alt="project2" />
                  </a>
                  <h3>Watch ECommerce-React</h3>
                </div>
                <div className="projectInfos">
                  <h2>Watch Store</h2>
                  <p>
                    An online website for its customers, where they can host and
                    buy different types of watches. If you wish, you can search
                    for watches by type and apply different filters. It has a
                    user-friendly interface and a design that does not strain
                    the eyes.
                  </p>
                  <div className="languages">
                    <div className="language">
                      <p>react</p>
                      <p>css</p>
                    </div>
                    <div className="sourceCode">
                      <a
                        href="https://github.com/ilkckn/WatchE-Commerce.git"
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project1">
                <div className="box">
                  <a
                    href="https://ilkckn.github.io/Jewellery-ECommerce/"
                    target="_blank"
                  >
                    <img src={project3} alt="" />
                  </a>
                  <h3>Jewellery ECommerce-HTML & Css</h3>
                </div>
                <div className="projectInfos">
                  <h2>Jewellery Store</h2>
                  <p>
                    An online website for its customers, where they can host and
                    buy different types of jewellery. A compact and elegant
                    design was created, with a user-friendly interface and a
                    design that is easy on the eyes.
                  </p>
                  <div className="languages">
                    <div className="language">
                      <p>html5</p>
                      <p>css</p>
                    </div>
                    <div className="sourceCode">
                      <a href="https://github.com/ilkckn/Jewellery-ECommerce">Source Code</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="smallProjects">
            <h1>Small Projects</h1>
            <div className="projects">

              <div className="project1">
                <div className="box">
                  <a
                    href="https://group-random-picker.onrender.com/"
                    target="_blank"
                  >
                    <img src={project1} alt="" />
                  </a>
                  <h3>Random Picker Game-React</h3>
                </div>
                <div className="projectInfos">
                  <h2>Watch Store</h2>
                  <p>
                    An online website for its customers, where they can host and
                    buy different types of jewellery. A compact and elegant
                    design was created, with a user-friendly interface and a
                    design that is easy on the eyes.
                  </p>
                  <div className="languages">
                    <div className="language">
                      <p>html5</p>
                      <p>css</p>
                    </div>
                    <div className="sourceCode">
                      <a href="">Source Code</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project1">
                <div className="box">
                  <a
                    href="https://todo-list-njrx.onrender.com/"
                    target="_blank"
                  >
                    <img src={project4} alt="" />
                  </a>
                  <h3>ToDo List-React</h3>
                </div>
                <div className="projectInfos">
                  <h2>Watch Store</h2>
                  <p>
                    An online website for its customers, where they can host and
                    buy different types of jewellery. A compact and elegant
                    design was created, with a user-friendly interface and a
                    design that is easy on the eyes.
                  </p>
                  <div className="languages">
                    <div className="language">
                      <p>html5</p>
                      <p>css</p>
                    </div>
                    <div className="sourceCode">
                      <a href="">Source Code</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

import React from "react";
import "./Home.css";
import waving from '../../assets/images/waving.png'
import avatar from "../../assets/images/avatar.png";
import { IoMdPin } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo1 from "../../assets/images/logos/javascript-logo.png"
import logo2 from "../../assets/images/logos/html5-logo.png"
import logo3 from "../../assets/images/logos/css-logo.png"
import logo4 from "../../assets/images/logos/react-logo.png"
import logo5 from "../../assets/images/logos/scss-logo.png"
import logo6 from "../../assets/images/logos/mongodb-logo.png"
import logo7 from "../../assets/images/logos/node-logo.png"

function Home() {
  return (
    <div className="homeContainer" id="home">

      <div className="infos">
        <div className="h1-icon">
          <h1>fullstack react developer</h1>
          <img src={waving}/>
        </div>
        <div className="shortInfo">
          <p>Hi, I'm Musa Cekcen. A passionate Front-end React Developer based in Lörrach, Germany</p>
          <IoMdPin className="pin" />
        </div>
        <div className="socialContact">
          <a href="https://www.linkedin.com/in/musacekcen-webdeveloper/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/ilkckn" target="_blank"><FaGithub /></a>
        </div>
        <div className="techStack">
          <h3>Tech Stack</h3>
          <div className="logos">
            <img className="logo1" src={logo1} alt=""/>
            <img className="logo2" src={logo2} alt=""/>
            <img className="logo3" src={logo3} alt="" />
            <img className="logo4" src={logo4} alt=""/>
            <img className="logo5" src={logo5} alt=""/>
            <img className="logo6" src={logo6} alt=""/>
            <img className="logo7" src={logo7} alt=""/>
          </div>
        </div>
      </div>

      <div className="avatar">
        <img src={avatar} /> 
      </div>
    </div>
  );
}

export default Home;

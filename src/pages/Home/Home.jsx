import React from "react";
import "./Home.css";
import waving from '../../assets/images/waving.png'
import avatar from "../../assets/images/avatar.png";
import { IoMdPin } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div className="homeContainer" id="home">

      <div className="infos">
        <div className="h1-icon">
          <h1>fullstack react developer</h1>
          <img src={waving} style={{ width: "3.5rem"}} />
        </div>
        <div className="shortInfo">
          <p>Hi, I'm Musa Cekcen. A passionate Front-end React Developer based in Lörrach, Germany</p>
          <IoMdPin className="pin" />
        </div>
        <div className="socialContact">
          <a href="https://www.linkedin.com/in/musacekcen-webdeveloper/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/ilkckn" target="_blank"><FaGithub /></a>
        </div>
      </div>

      <div className="avatar">
        <img src={avatar} style={{ width: "24rem"}} /> 
      </div>
    </div>
  );
}

export default Home;

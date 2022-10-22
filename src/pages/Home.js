import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Adnan</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <GitHub />
          <Email />
          <LinkedIn />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React, NPM , BootStrap, MaterialUI ,
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, GraphQL, Laravel</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>Git, Github, Firebase, VS Code</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

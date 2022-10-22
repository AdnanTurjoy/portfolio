import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";

import "../styles/Home.css";

function Home() {
  // <Typical
  //               loop={Infinity}
  //               steps={[
  //                 "Junior Web Developer",
  //                 1500,
  //                 "Front End Developer",
  //                 1500,
  //                 "Full Stack Developer",
  //                 1500,
  //                 "MERN Stack Developer",
  //                 1500,
  //                 "React Dev Developer",
  //                 1500,
  //               ]}
  //             >

  //             </Typical>
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Adnan</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://github.com/AdnanTurjoy" target="_blank">
            <GitHub />
          </a>
          <a href="mailto:adel.md.adnan@gmail.com" target="_blank">
            <Email />
          </a>
          <a href="https://www.linkedin.com/in/adnan005/" target="_blank">
          <LinkedIn />
          </a>

          
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

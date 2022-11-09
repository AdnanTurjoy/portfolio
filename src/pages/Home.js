import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Adnan</h2>
        <div className="prompt">
          <p
            style={{
              paddingTop: "3rem",
              margin: "auto 0",
              fontWeight: "normal",
              marginBottom: "10%",
            }}
          >
            <span style={{ color: "#e9d35b", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "Front End Developer",
                  "React Developer",
                  "Junior Web Developer",
                  "Full Stack Web Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </p>
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
            <span>NodeJS, ExpressJS, Laravel</span>
          </li>
          <li className="item">
            <h2>Database</h2>
            <span>MongoDB, Mysql</span>
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

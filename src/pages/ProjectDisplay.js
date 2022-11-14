import React from "react";
import { useLocation, useParams } from "react-router-dom";

import "../styles/ProjectDisplay.css";
// import { ProjectList } from "../Data/ProjectList";
import { GitHub } from "@mui/icons-material";
import LaunchIcon from "@mui/icons-material/Launch";
function ProjectDisplay() {
  // const { id } = useParams();
  // const project = ProjectList[id];
  const location = useLocation();
  const { id, name, image, skill, link, live } = location.state;
  return (
    <div className="project">
      <h1> {name}</h1>
      <img src={image.url} />
      <p>
        <b>Skills:</b> {skill}
      </p>
      <div>
        <a href={link} target="_blank" style={{ marginRight: "15px" }}>
          <GitHub />
        </a>
        {"    "}
        <a href={live || "/"} target="_blank">
          <LaunchIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;

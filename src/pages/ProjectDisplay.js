import React from "react";
import { useParams } from "react-router-dom";

import "../styles/ProjectDisplay.css";
import { ProjectList } from "../Data/ProjectList";
import { GitHub } from "@mui/icons-material";
import LaunchIcon from "@mui/icons-material/Launch";
function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div>
        <a href={project.link} target="_blank" style={{ marginRight: "15px" }}>
          <GitHub />
        </a>
        {"    "}
        <a href={project.live} target="_blank">
          <LaunchIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;

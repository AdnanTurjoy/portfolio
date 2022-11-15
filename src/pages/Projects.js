import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ProjectItem from "../components/ProjectItem";
//import { ProjectList } from "../Data/ProjectList";

import "../styles/Projects.css";

function Projects() {
  const [projectList, setProjectList] = useState([]);
  const getProject = async () => {
    const projectList = await axios.get(
      "https://portfolio-adnan-160125.herokuapp.com/api/project-list"
    );
    setProjectList(projectList.data);
  };
  useEffect(() => {
    getProject();
  }, []);
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project, _id) => {
          return <ProjectItem id={project._id} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;

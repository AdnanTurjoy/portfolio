import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ProjectItem from "../components/ProjectItem";
//import { ProjectList } from "../Data/ProjectList";

import "../styles/Projects.css";
import { MoonLoader } from "react-spinners";
function Projects() {
  const [isLoading, setIsLoading] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const getProject = async () => {
    setIsLoading(true);
    const projectList = await axios.get(
      "https://portfolio-adnan-160125.herokuapp.com/api/project-list"
    );
    setProjectList(projectList.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getProject();
  }, []);
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      {isLoading && (
        <MoonLoader color="#21325e">
          size={100}
          loading={isLoading}
        </MoonLoader>
      )}

      <div className="projectList">
        {projectList.map((project, _id) => {
          return <ProjectItem id={project._id} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;

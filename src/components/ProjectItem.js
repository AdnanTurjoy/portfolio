import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProjectItem({ project, id }) {
  const { name, image, skill, link, live } = project;
  const navigate = useNavigate();
  return (
    <Link
      className="projectItem"
      // onClick={() => {
      //   navigate("/project/" + id);
      // }}
      to={"/project/" + id}
      state={{ id, name, image, skill, link, live }}
      data-aos="fade-up-right"
    >
      <div
        style={{ backgroundImage: `url(${image.url})` }}
        className="bgImage"
      />
      <h1> {name} </h1>
    </Link>
  );
}

export default ProjectItem;

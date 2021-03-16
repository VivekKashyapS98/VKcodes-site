import React from "react";
import { Link } from "gatsby";
import TBlogo from "../src/images/projectpics/tb_logo.jpeg";
import HPTlogo from "../src/images/projectpics/hpt_logo.jpg";
import POMlogo from "../src/images/projectpics/pom.jpeg";

export default function Projects() {
  return (
    <div className="skill-columns">
      <Link
        className="project-hover"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "10px",
          boxShadow: "2px 2px 2px 2px #555555",
          background: `url(${TBlogo}) center no-repeat`,
          backgroundSize: "300px",
          margin: "20px",
          textDecoration: "none",
        }}
        to="/project1"
      ></Link>
      <Link
        className="project-hover"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "10px",
          boxShadow: "2px 2px 2px 2px #555555",
          background: `url(${HPTlogo}) center no-repeat`,
          backgroundSize: "300px",
          margin: "20px",
          textDecoration: "none",
        }}
        to="/project2"
      ></Link>
      <Link
        className="project-hover"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "10px",
          boxShadow: "2px 2px 2px 2px #555555",
          background: `url(${POMlogo}) center no-repeat`,
          backgroundSize: "300px",
          margin: "20px",
          textDecoration: "none",
        }}
        to="/project3"
      ></Link>
    </div>
  );
}

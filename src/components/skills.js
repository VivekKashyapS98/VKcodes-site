import React from "react";
import Server from "../images/server.svg";
import Database from "../images/database.svg";
import UIDesign from "../images/ui-design.svg";

export default function Skills() {
  return (
    <div className="key-skills">
      <h1 style={{ color: "#001220" }}>Key Skills</h1>
      <div className="skill-columns">
        <div className="key-skill">
          <img
            className="img"
            style={{ width: "80px" }}
            src={UIDesign}
            alt="design"
          />
          <h2>Front-end Developer</h2>
          <p className="intro-about">
            I value simple content structure, and enjoy bringing ideas to life
            in the browser.
          </p>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>ReduxJS</li>
            <li>GatsbyJS</li>
            <li>NextJS</li>
            <li>MaterialUI</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="key-skill">
          <img
            className="img"
            style={{ width: "80px" }}
            src={Server}
            alt="design"
          />
          <h2>Back-end Developer</h2>
          <p className="intro-about">
            I like to code things from scratch, clean design patterns, and
            thoughtful interactions.
          </p>
          <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>Golang</li>
            <li>goFiber</li>
          </ul>
        </div>
        <div className="key-skill">
          <img
            className="img"
            style={{ width: "80px" }}
            src={Database}
            alt="design"
          />
          <h2>Database</h2>
          <p className="intro-about">
            I like designing schemas which are consistant and easy to interact
            with each other.
          </p>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

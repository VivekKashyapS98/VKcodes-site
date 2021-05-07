import React from "react";
import Linkedin from "../images/linkedin.svg";
import Github from "../images/github.svg";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";

export default function Intro() {
  return (
    <div className="mainpage-top">
      <div className="links">
        <a
          href="https://www.linkedin.com/in/vivek-s-886bb5144/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img"
            style={{ color: "white", width: "25px" }}
            src={Linkedin}
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/VivekKashyapS98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img"
            style={{ color: "white", width: "25px" }}
            src={Github}
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.facebook.com/vivek.kashyap.5492216"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img"
            style={{ color: "white", width: "25px" }}
            src={Facebook}
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/vivek.kashyap.s/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img"
            style={{ color: "white", width: "25px" }}
            src={Instagram}
            alt="Instagram"
          />
        </a>
        <a
          href="https://twitter.com/Vivek_S98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img"
            style={{ color: "white", width: "25px" }}
            src={Twitter}
            alt="Twitter"
          />
        </a>
      </div>
      <div className="intro-info">
        <span className="my-name">Hi! I'm </span>
        <span className="my-name" style={{ color: "#21fcab" }}>
          Vivek.
        </span>
        <br />
        <span className="my-name" style={{ padding: "0 0 0 80px" }}>
          I'm a{" "}
        </span>
        <span className="my-name" style={{ color: "#21fcab" }}>
          Web Developer..
        </span>
      </div>
      <div className="intro-about">
        <p className="para-1">
          A highly focused, getting things done in customer oriented manner.
        </p>
        <p className="para-2">
          End result oriented developer and designer, figuring out the best
          solution to the given software problem.
        </p>
        <p className="para-3">
          Handling the issues wisely by investigating deep into the problem and
          using resources to it's best.
        </p>
        <p className="para-4">
          This quote describes me better: "Simplicity is the greatest
          sophistication (simple == superb)"
        </p>
      </div>
    </div>
  );
}

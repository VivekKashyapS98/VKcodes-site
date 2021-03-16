import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../../main.css";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "POM_01.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "POM_02.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "POM_03.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="projects">
      <h1>HotPopTime</h1>
      <p>
        A Fullstack Pomodoro Application with authentication and authorization
        using JWT. Any number of tasks can be added and ran sequentialy. This
        project was specifically built to explore and get used to Typescript
        (with React).
      </p>
      <div style={{ margin: "0 10px" }}>
        <h4>Technologies Used:</h4>
        <ul>
          <li>Typescript</li>
          <li>React.js</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div style={{ width: "100%" }}>
        <Img fluid={data.img1.childImageSharp.fluid} alt="HotPopTime image 1" />
        <Img fluid={data.img2.childImageSharp.fluid} alt="HotPopTime image 2" />
        <Img fluid={data.img3.childImageSharp.fluid} alt="HotPopTime image 3" />
      </div>
      <a
        className="visit-site"
        href="https://pomodoro-full-stack-app.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 style={{ color: "white" }}>Visit Pomodoro</h3>
      </a>
    </div>
  );
};

import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "tb_logo.jpeg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img2: file(relativePath: { eq: "hpt_logo.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img3: file(relativePath: { eq: "pom.jpeg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className="skill-columns">
      <Link className="project-hover" to="/project1">
        <Img
          style={{
            borderRadius: "10px",
            margin: "20px",
            boxShadow: "2px 2px 2px 2px #555555",
            textDecoration: "none",
          }}
          fixed={data.img1.childImageSharp.fixed}
          alt="TweetBook"
        />
      </Link>
      <Link className="project-hover" to="/project2">
        <Img
          style={{
            borderRadius: "10px",
            boxShadow: "2px 2px 2px 2px #555555",
            margin: "20px",
            textDecoration: "none",
          }}
          fixed={data.img2.childImageSharp.fixed}
          alt="HotPopTime"
        />
      </Link>
      <Link className="project-hover" to="/project3">
        <Img
          style={{
            borderRadius: "10px",
            boxShadow: "2px 2px 2px 2px #555555",
            margin: "20px",
            textDecoration: "none",
          }}
          fixed={data.img3.childImageSharp.fixed}
          alt="Pomodoro"
        />
      </Link>
    </div>
  );
}

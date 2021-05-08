import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../../main.css";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "tb1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "tb2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "tb3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4: file(relativePath: { eq: "tb4.png" }) {
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
      <h1>TweetBook</h1>
      <p>A social media clone</p>
      <div>
        <h4>Technologies Used:</h4>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript(React.js, Redux,js)</li>
          <li>MaterialUI</li>
          <li>Node.js, Express.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div style={{ width: "100%" }}>
        <Img fluid={data.img1.childImageSharp.fluid} alt="TweetBook image 1" />
        <Img fluid={data.img2.childImageSharp.fluid} alt="TweetBook image 2" />
        <Img fluid={data.img3.childImageSharp.fluid} alt="TweetBook image 3" />
        <Img fluid={data.img4.childImageSharp.fluid} alt="TweetBook image 4" />
      </div>
      <a
        className="visit-site"
        href="https://tweetbook-in.herokuapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 style={{ color: "white" }}>Visit TweetBook</h3>
      </a>
    </div>
  );
};

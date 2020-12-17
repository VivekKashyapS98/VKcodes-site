import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import '../../main.css';

export default () => {
  const data = useStaticQuery(graphql`
  query {
      img1: file(relativePath: {eq: "hpt1.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: {eq: "hpt2.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: {eq: "hpt3.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      img4: file(relativePath: {eq: "hpt4.png"}) {
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
          <p>Explore the latest and gratest Movies and TV shows right away. HotPopTime helps you to stay up-to-date. Liked a Movie/TV show? Then know the similar ones just by scrolling towards the bottom of the movie/show.</p>
          <div style={{margin: '0 10px'}}>
            <h4>Technologies Used:</h4>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript(React.js)</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div style={{width: '100%'}}>
            <Img
              fluid={data.img1.childImageSharp.fluid}
              alt="HotPopTime image 1"
            />
            <Img
              fluid={data.img2.childImageSharp.fluid}
              alt="HotPopTime image 2"
            />
            <Img
              fluid={data.img3.childImageSharp.fluid}
              alt="HotPopTime image 3"
            />
            <Img
              fluid={data.img4.childImageSharp.fluid}
              alt="HotPopTime image 4"
            />
          </div>
          <a className="visit-site" href="https://hotpoptime-in.netlify.app" target="_blank" rel="noopener noreferrer"><h3 style={{color: 'white'}}>Visit HotPopTime</h3></a>
        </div>
    );
}
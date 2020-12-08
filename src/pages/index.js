import React from "react";
import Img from "gatsby-image";
import Server from '../images/server.svg';
import Database from '../images/database.svg';
import UIDesign from '../images/ui-design.svg';
import { graphql } from 'gatsby';
import '../../main.css';

export default function Home({data}) {
  return <React.Fragment>
    <div className="mainpage-top">
      <div className="intro-info">
        <span className="my-name">Hi! I'm </span><span className="my-name" style={{color: '#21fcab'}}>Vivek.</span><br />
        <span className="my-name" style={{padding:'0 0 0 80px'}}>I'm a </span><span className="my-name" style={{color: '#21fcab'}}>Web Developer..</span>
      </div>
      <div className="intro-about">
        <p className="para-1">A highly focused, getting things done in customer oriented manner.</p>
        <p className="para-2">End result oriented developer and designer, figuring out the best solution to the given software problem.</p>
        <p className="para-3">Handling the issues wisely by investigating deep into the problem and using resources to it's best.</p>
        <p className="para-4">This quote best describes me: "Simplicity is the gratest sophestication (simple == superb)"</p>
      </div>
    </div>
    <div className="key-skills">
      <h1 style={{color: '#001220'}}>Key Skills</h1>
      <div className="skill-columns">
        <div className="key-skill">
          <img style={{width: '80px'}} src={UIDesign} alt="design" />
          <h2>Front-end Developer</h2>
          <p className="intro-about">I value simple content structure, and enjoy bringing ideas to life in the browser.</p>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Redux.js</li>
            <li>MaterialUI</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="key-skill">
          <img style={{width: '80px'}} src={Server} alt="design" />
          <h2>Back-end Developer</h2>
          <p className="intro-about">I like to code things from scratch, clean design patterns, and thoughtful interactions.</p>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Mongoose.js</li>
          </ul>
        </div>
        <div className="key-skill">
          <img style={{width: '80px'}} src={Database} alt="design" />
          <h2>Database</h2>
          <p className="intro-about">I like designing schemas which are consistant and easy to interact with each other.</p>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
    <br />
    <div className="projects">
      <h1>My Recent Work</h1>
      <div className="projects">
        <h2>TweetBook</h2>
        <p>A social media clone</p>
        <div>
          <h4>Technologies Used:</h4>
          <ul>
            <li><b>Front-end:</b> JavaScript(React.js, Redux,js), HTML/CSS, MaterialUI.</li>
            <li><b>Back-end:</b> Node.js, Express.js.</li>
            <li><b>Database:</b> MongoDB</li>
          </ul>
        </div>
      </div>
      <div className="Projects">
        
      </div>
    </div>
  </React.Fragment>
}

export const query = graphql`
  query {
    file(relativePath: { eq: "ui-design.svg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
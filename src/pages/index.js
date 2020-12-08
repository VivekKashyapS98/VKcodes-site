import React from "react";
import Server from '../images/server.svg';
import Linkedin from '../images/linkedin.svg';
import Github from '../images/github.svg';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';
import Database from '../images/database.svg';
import UIDesign from '../images/ui-design.svg';
import '../../main.css';

export default function Home({data}) {
  return <React.Fragment>
    <div className="mainpage-top">
    <div className="links">
      <a href="https://www.linkedin.com/in/vivek-s-886bb5144/" target="_blank" rel="noopener noreferrer"><img style={{color: 'white', width: '25px'}} src={Linkedin} alt="LinkedIn"/></a>
      <a href="https://github.com/VivekKashyapS98" target="_blank" rel="noopener noreferrer"><img style={{color: 'white', width: '25px'}} src={Github} alt="GitHub"/></a>
      <a href="https://www.facebook.com/vivek.kashyap.5492216" target="_blank" rel="noopener noreferrer"><img style={{color: 'white', width: '25px'}} src={Facebook} alt="Facebook"/></a>
      <a href="https://www.instagram.com/vivek.kashyap.s/" target="_blank" rel="noopener noreferrer"><img style={{color: 'white', width: '25px'}} src={Instagram} alt="Instagram"/></a>
      <a href="https://twitter.com/Vivek_S98" target="_blank" rel="noopener noreferrer"><img style={{color: 'white', width: '25px'}} src={Twitter} alt="Twitter"/></a>
    </div>
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
        <div style={{margin: '0 10px'}}>
          <h4>Technologies Used:</h4>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript(React.js, Redux,js)</li>
            <li>MaterialUI</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <a href="https://tweetbook-in.herokuapp.com" target="_blank" rel="noopener noreferrer">visit TweetBook</a>
        <iframe title="TweetBook" style={{width: '100%',height: '500px', borderRadius: '10px'}} src="https://tweetbook-in.herokuapp.com/show/" />
      </div>
      <br />
      <div className="projects">
        <h2>HotPopTime</h2>
        <p>A Movie and TV site</p>
        <div style={{margin: '0 10px'}}>
          <h4>Technologies Used:</h4>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript(React.js)</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <a href="https://hotpoptime-in.netlify.app" target="_blank" rel="noopener noreferrer">visit HotPopTime</a>
        <iframe title="HotPopTime" style={{width: '100%',height: '600px', borderRadius: '10px'}} src="https://hotpoptime-in.netlify.app" />
      </div>
    </div>
  </React.Fragment>
}
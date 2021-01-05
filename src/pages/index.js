import React from "react";
import Server from '../images/server.svg';
import Linkedin from '../images/linkedin.svg';
import Github from '../images/github.svg';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';
import Database from '../images/database.svg';
import UIDesign from '../images/ui-design.svg';
import { Link } from "gatsby";
import TBlogo from '../images/projectpics/tb_logo.jpeg';
import HPTlogo from '../images/projectpics/hpt_logo.jpg';
import Vivek from '../images/vivek.jpeg';
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
        <p className="para-4">This quote describes me better: "Simplicity is the gratest sophestication (simple == superb)"</p>
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
      <div className="skill-columns">
        <Link
          className="project-hover"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '10px',
            boxShadow: '2px 2px 2px 2px #555555',
            background: `url(${TBlogo}) center no-repeat`,
            backgroundSize: '300px',
            margin: '20px',
            textDecoration: 'none'
          }}
          to="/project1"
        >
        </Link>
        <Link
          className="project-hover"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '10px',
            boxShadow: '2px 2px 2px 2px #555555',
            background: `url(${HPTlogo}) center no-repeat`,
            backgroundSize: '300px',
            margin: '20px',
            textDecoration: 'none'
          }}
          to="/project2"
        >
        </Link>
      </div>
    </div>
    <div className="projects" style={{margin: '80px 0'}}>
          <h2>Intrested in collboraton ?</h2>
          <p>I'm always ready to invest my time on new intresting projects and opportunities.</p>
          <a 
            className="visit-site" 
            href="mailto:vivekyeskashyap@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
              <h3 style={{color: 'white'}}>
                Start a conversation
              </h3>
              <span>
                <svg 
                  className='mail-me' 
                  aria-hidden="true" 
                  focusable="false" 
                  data-prefix="far" 
                  data-icon="envelope" 
                  role="img" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 512">
                    <path 
                      fill="currentColor" 
                      d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z">
                    </path>
                </svg>
                </span>
          </a>
    </div>
    <footer>
      <img className="vivek-image" src={Vivek} alt="Vivek S" />
      <div className="projects">
          <h1 className="sign" style={{color: 'white'}}>Vivek S</h1>
          <h4 style={{color: 'white'}}>Learn, let learn... Grow, let grow...</h4>
          <p style={{color: 'white', fontSize: 'small', fontWeight: 'lighter'}}>Handcrafted by me <svg class="mail-me" style={{width: '15px'}} aria-hidden="true" focusable="false" data-prefix="far" data-icon="copyright" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"></path></svg><b style={{color: 'white'}}>Vivek Kashyap</b></p>
      </div>
    </footer>
  </React.Fragment>
}

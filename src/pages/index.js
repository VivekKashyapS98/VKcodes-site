import React from "react";
import '../../main.css';

export default function Home() {
  return <React.Fragment>
    <div className="mainpage-top">
      <div className="intro-info">
        <span className="my-name">Hi! I'm </span><span className="my-name" style={{color: '#21fcab'}}>Vivek.</span><br />
        <span className="my-name" style={{padding:'0 0 0 80px'}}>I'm a </span><span className="my-name" style={{color: '#21fcab'}}>Web Developer..</span>
      </div>
      <div className="intro-about" style={{width: '350px'}}>
        <p>A highly focused, getting things done in customer oriented manner.</p>
        <p>End result oriented developer and designer, figuring out the best solution to the given software problem.</p>
        <p>Handling the issues wisely by investigating deep into the problem and using resources to it's best.</p>
        <p>This quote best describes me: "Simplicity is the gratest sophestication (simple == superb)"</p>
      </div>
    </div>
  </React.Fragment>
}

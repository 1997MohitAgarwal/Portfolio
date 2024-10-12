import React from "react"

export default function Skills() {
  return (
    <div id="skills">
      <h3 className="mt-5 pt-3">Skills<hr /></h3>
      <div style={{marginBottom:"50px"}} className="containerbox">
      <img className="rounded" width="350" src="/assets/images/main.gif"></img>
      <div className="box my-auto mx-auto">
        <div className="w-25">
         <img width="70" height="50" src="/assets/images/react-removebg-preview.png"></img>
         <p style={{fontSize:"15px"}}>React</p>
        </div>
         <div  className="w-25">
         <img width="50" height="50" src="/assets/images/html-removebg-preview.png"></img>
          <p style={{fontSize:"15px"}}>HTML</p>
        </div>
         <div  className="w-25">
         <img width="70" height="50" src="/assets/images/js-removebg-preview.png"></img>
          <p style={{fontSize:"15px"}}>JavaScript</p>
        </div>
         <div  className="w-25">
         <img width="50" height="50" src="/assets/images/css-removebg-preview.png"></img>
          <p style={{fontSize:"15px"}}>CSS</p>
        </div>
         <div  className="w-25">
         <img width="80" height="50" src="/assets/images/boo-removebg-preview.png"></img>
          <p style={{fontSize:"15px"}}>Bootstrap</p>
        </div>
         <div  className="w-25">
         <img width="50" height="50" src="/assets/images/redux1-removebg-preview.png"></img>
          <p style={{fontSize:"15px"}}>Redux</p>
        </div>
        <div  className="w-25">
         <img width="50" height="50" src="/assets/images/csstail-removebg-preview.png"></img>
          <p style={{fontSize:"15px"}}>Tailwind</p>
        </div>
         <div  className="w-25">
         <img width="50" height="50" src="/assets/images/nextjs-removebg-preview.png"></img>
          <p style={{fontSize:"15px"}}>Next Js</p>
        </div>
        <div  className="w-25">
         <img width="100" height="50" src="/assets/images/git-removebg-preview.png"></img>
          <p style={{fontSize:"15px"}}>Git</p>
        </div>
      </div>
      </div>
    </div>
  )}
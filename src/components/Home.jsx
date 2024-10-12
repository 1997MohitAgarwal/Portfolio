import React from "react"

export default function Home() {
  return (
    <div id="home">
      <div class="filter"></div>
      <section class="intro">
        <img className="img rounded-circle p-2 border border-primary" src="/assets/images/profile.jpg" alt="profile"></img>
        <h4 className="mt-3">Hi<span><img width="50" src="/assets/images/moving1.gif"/></span>I am Mohit Agarwal</h4>
        <h4><strong>FRONTEND DEVELOPER</strong></h4>
        <button className="float"><a className="link" href="Mohit2yrsResume.pdf" download >Download CV</a></button>
        <h5>Passionate and Enthusiast Frontend Developer</h5>
        <p className="mb-2">INNOVATION IS MY PASSION !!</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/mohit-agarwal-099744235/" target="_blank"><i class='fab fa-linkedin'></i></a>
          <a href="https://twitter.com/Mohit16081997" target="_blank"><i class='fab fa-twitter'></i></a>
          <a href="https://github.com/stupendo1238" target="_blank"><i class='fab fa-github'></i></a>
        </div>

      </section>
    </div>

  )
}
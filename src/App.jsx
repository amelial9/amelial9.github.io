import { useState } from 'react'
import './App.css'

import IconLink from './components/IconLink'
import Experiences from './components/experiences/Experiences'
import Education from './components/Education'
import VerticalNav from './components/VerticalNav'
import Projects from './components/projects/Projects'

import portraitPic from './assets/portrait.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import email from './assets/email.svg'

function App() {
  return (
    <>
      <VerticalNav />
      
      <div className="main-content" >
        <div className="introContainer" id="about">

          <div className="sec1">
            <img src={portraitPic} className="portrait" alt="Amelia notion portrait pic" />
            <p className="name">Amelia (Xiang) Li</p>
            <p>Informatics @ University of Washington</p>
            <div className="icons">
              <IconLink href="https://www.linkedin.com/in/amelial9/" src={linkedin} alt="LinkedIn link" />
              <IconLink href="https://github.com/amelial9" src={github} alt="GitHub link" />
              <IconLink href="mailto:amelial9@uw.edu" src={email} alt="Email link" />
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="sec2">
            <h1>Hi! I'm Amelia 👋</h1>
            <p className="intro">
              I'm a second-year <a href="https://ischool.uw.edu/programs/informatics/what-is-informatics" target="_blank">Informatics</a> student at the University of Washington <a href="https://ischool.uw.edu/about" target="_blank">iSchool</a> with a passion for transforming data and technology into meaningful solutions. 
              I'm a builder of everything from useful web apps to wonderfully questionable side projects, and I thrive on bringing ideas to life through code. 
            </p>
            <p>
              Right now I'm diving deeper into full-stack development and data-driven projects, creating prouducts that combine throughtful design with data-backed decisions.
              I'm especially excited about working at the intersection of software engineering, machine learning and data science, where I can help develop tools that are both innovative and impactful.
            </p>
            <p>
              Outside of code, you'll probably catch me rewatching <i>Hamilton</i> or <i>SIX</i>, and I firmly believe they make the best background music for working and debugging.
            </p>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        
        <section id="experiences">
          <Experiences />
        </section>

        <br></br>
        <br></br>
        <br></br>

        <section id="education">
          <Education />
        </section>

        <br></br>
        <br></br>
        <br></br>

        <section id="projects">
          <Projects />
        </section>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <footer style={{ textAlign: 'center', padding: '10px', fontSize: '14px', color: '#473C35' }}>
          <p>© 2025 Amelia Li</p>
        </footer>
      </div>
    </>
  )
}

export default App

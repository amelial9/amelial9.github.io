import { Typewriter } from 'react-simple-typewriter';
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
            <p>CS + Info @ University of Washington</p>
            <div className="icons">
              <IconLink href="https://www.linkedin.com/in/amelial9/" src={linkedin} alt="LinkedIn link" />
              <IconLink href="https://github.com/amelial9" src={github} alt="GitHub link" />
              <IconLink href="mailto:amelial9@uw.edu" src={email} alt="Email link" />
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="sec2">
            <h1>
              Hi! 👋 I'm Amelia, <br></br> {' '}
              <span className="typing-span" style={{ color: 'black', fontWeight: 'bold' }}>
                <Typewriter
                  words={['a developer', 'a CS + INFO student', 'an organized planner', 'a boba + coffee enthusiast']}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="intro">
              🎓 I'm a third-year CS and Informatics student at the University of Washington with a love for building thoughtful, user-centered tech. 
              I'm a builder of everything from practical tools to wonderfully questionable side projects, and I thrive at the intersection of software engineering and product thinking. 
            </p>
            <p>
              💡 Outside of code, you'll probably catch me rewatching <i>Hamilton</i> or <i>SIX</i>, and I firmly believe they make the best background music for working and debugging.
            </p>
            <br></br>
            <i style={{fontSize: '15px', color: '#473C35', display: 'block', textAlign: 'left', marginLeft: '30px'}}>
             ⚙️ Full-Stack Dev • 🧠 Product Thinking • 🧋 Boba Dev Hours
            </i>
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

        <section id="projects">
          <Projects />
        </section>

        <br></br>

        <section id="education">
          <Education />
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

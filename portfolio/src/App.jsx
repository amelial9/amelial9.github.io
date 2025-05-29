import { useState } from 'react'
import portraitPic from './assets/portrait.svg'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <div className="logo">
            <h1><a href="https://ameliali.com/">Amelia Li</a></h1>
        </div>
      </nav>
      <div className="introContainer">
        <div className="sec1">
          <img src={portraitPic} className="portrait" alt="Amelia notion portrait pic" />
          <p class="name">Xiang (Amelia) Li</p>
          <p>Informatics @ University of Washington</p>
        </div>
        <div className="sec2">

        </div>
      </div>
    </>
  )
}

export default App

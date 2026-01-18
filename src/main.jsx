import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import catCursor from './assets/cursor/catcursor1-48.png'
import catCursorHover from './assets/cursor/catcursor2-48.png'

// Set cursor image as CSS variable with hotspot coordinates (24, 24 is center of 48x48)
document.documentElement.style.setProperty('--cursor-image', `url(${catCursor}) 24 24`)
document.documentElement.style.setProperty('--cursor-image-hover', `url(${catCursorHover}) 24 24`)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

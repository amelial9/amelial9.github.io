import { Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './pages/Home'
import Research from './pages/Research'
import Fun from './pages/Fun'
import Archive from './pages/Archive'
import MusicArchive from './pages/MusicArchive'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/fun" element={<Fun />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/archive/music" element={<MusicArchive />} />
    </Routes>
  )
}

export default App

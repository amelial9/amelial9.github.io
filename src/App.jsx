import { Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home'
import Research from './components/Research'
import Fun from './components/Fun'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/fun" element={<Fun />} />
    </Routes>
  )
}

export default App

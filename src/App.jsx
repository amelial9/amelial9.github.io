import { Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home'
import Research from './components/Research'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/research" element={<Research />} />
    </Routes>
  )
}

export default App

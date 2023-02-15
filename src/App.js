import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App

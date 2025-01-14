import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Nav/Navbar'
import Home from './Components/Pages/Home'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App
 
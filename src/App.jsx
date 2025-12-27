
import './App.css'

import { Routes, Route } from "react-router-dom";
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

import HomePage from './Home'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     


      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
     

      </Routes>


    </>
  )
}

export default App

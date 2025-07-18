import Home from './Components/Home'
import Contact from "./Components/Contact"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import About from './Components/About'
import Certificate from './Components/Certificate'
import Project from './Pages/Project'


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/certificate" element={<Certificate />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

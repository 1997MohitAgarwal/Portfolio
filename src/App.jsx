import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Skills from './components/Skills'
import Education from './components/Education'
export default function App() {
  return (
   <>
     <Navbar/>
     <Home/>
     <Education/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
   </>
  )
}

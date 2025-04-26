import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/resume' element={<Resume/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App

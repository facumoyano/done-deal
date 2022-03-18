import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Services from './pages/services'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

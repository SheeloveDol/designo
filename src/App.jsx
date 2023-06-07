import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { WebDesign } from './pages/WebDesign'
import { AppDesign } from './pages/AppDesign'
import { GraphicDesign } from './pages/GraphicDesign'
import { About } from './pages/About'
import { Locations } from './pages/Locations'
import { Contact } from './pages/Contact'
import { Navbar } from './components/Navbar'
import { MobileMenuModal } from './components/MobileMenuModal';



function App() {
  
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
      setOpen(!open);
  }

  return (
    <div>
      <Navbar open={open} handleOpen={handleOpen} />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/webDesign"  element={<WebDesign />} />
        <Route path="/appDesign"  element={<AppDesign />} />
        <Route path="/graphicDesign"  element={<GraphicDesign />} />
        <Route path="/about"  element={<About />} />
        <Route path="/locations"  element={<Locations />} />
        <Route path="/contact"  element={<Contact />} /> 
      </Routes>
      <MobileMenuModal open={open} />
    </div>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CarruselEquipos from './components/CarruselEquipos'
import Nosotros from './components/Nosotros'
import PorQueNB from './components/PorQueNB'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import EquiposPage from './pages/EquiposPage'
import CategoriaPage from './pages/CategoriaPage'
import ContactoPage from './pages/ContactoPage'
import NosotrosPage from './pages/NosotrosPage'
import ScrollToTop from './components/ScrollToTop'

function Inicio() {
  return (
    <>
      <Hero />
      <CarruselEquipos />
      <Nosotros />
      <PorQueNB />
      <Contacto />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/equipos" element={<EquiposPage />} />
        <Route path="/equipos/:slug" element={<CategoriaPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Locais from './pages/LocaisDMundo'
import Ope from './pages/Operacoes'

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/LocaisDMundo' element={<Locais/>}/>
    <Route path='/Operacoes' element={<Ope/>}/>
    </Routes>
    <Footer/>
     </>
  )
}

export default App

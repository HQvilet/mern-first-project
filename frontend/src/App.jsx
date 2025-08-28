// import { useState } from 'react'
import Navbar from './Navbar.jsx'
import CreatePage from './CreatePage.jsx'
import ProductCard from './components/Card.jsx'
import HomePage from './HomePage.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <div>a</div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
      </Routes>
    </>
  )
}
export default App

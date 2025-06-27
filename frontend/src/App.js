import React from 'react'
import Login from './component/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './component/Signup'
import Home from './component/Home'
import Testimonial from './component/Testimonial'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/Home" element={ <Home />} />
        <Route path="/Testimonial" element={ <Testimonial />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
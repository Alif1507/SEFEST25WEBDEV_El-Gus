import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes, Route } from 'react-router'
import Home from './Home.jsx'
import Mental from './Mental.jsx'
import Gaya from './Gaya.jsx'
import Akses from './Akses.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mental' element={<Mental />} />
      <Route path='/gaya' element={<Gaya />} />
      <Route path='/akses' element={<Akses />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

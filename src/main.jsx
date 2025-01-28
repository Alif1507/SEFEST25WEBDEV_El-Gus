import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes, Route } from 'react-router'
import Home from './Home.jsx'
import Mental from './Mental.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mental' element={<Mental />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

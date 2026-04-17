import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Level1_1 from './challenges/Level1_1.tsx'
import L1_1C from './clears/L1_1C.tsx'
import Header from './components/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/level1-1" element={<Level1_1 />} />
        <Route path="/level1-1/clear" element={<L1_1C />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

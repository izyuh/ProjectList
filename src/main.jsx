import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './main.css'

import Header from './Header/Header.jsx'
import Hero from './Hero/hero.jsx'
import About from './About/about.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
  </StrictMode>,
)

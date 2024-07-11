import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home.tsx'
import Projects from './projects/projects.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <Projects />
  </React.StrictMode>,
)

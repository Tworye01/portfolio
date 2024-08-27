import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Projects from './projects/projects';
import './index.css';
import Contacts from './contact/contact';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/contact" element={<Contacts/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

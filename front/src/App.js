// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Productos from './pages/productos';

const App = () => (
  <>
    <Navbar />
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  </>
);

export default App;

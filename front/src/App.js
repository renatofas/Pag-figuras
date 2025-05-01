// src/App.js
import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Productos from './pages/productos';
import ProductoDetalle from './pages/ProductoDetalle';

const App = () => (
  <div className="App">
    <Navbar />
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} /> {/* ✅ ESTA ES LA CLAVE */}
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;

// src/components/navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Botón de menú solo visible en móvil */}
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        ☰
      </button>

      {/* Logo + texto centrado */}
      <div className="navbar-center">
        <img src="/logo2.PNG" alt="Logo" />
        <span>QueLindo Store</span>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link></li>
        <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

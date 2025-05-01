// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Figuras de Cerámica · Hechas a mano con amor</p>
      <p>
        Contacto: <a href="mailto:ventas@tupagina.cl">ventas@tupagina.cl</a> · 
        <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer"> WhatsApp</a>
      </p>
    </footer>
  );
};

export default Footer;

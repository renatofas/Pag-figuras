// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Figuras de Cerámica · Hechas a mano con amor</p>
      <p>
        Contacto: <a href="tel:+56994685092">+56 9 9468 5092</a> · 
        <a href={`https://wa.me/+56994685092?text=Hola, queria contactar con usted porque `}
        target="_blank" rel="noopener noreferrer"> WhatsApp</a>
      </p>
    </footer>
  );
};

export default Footer;

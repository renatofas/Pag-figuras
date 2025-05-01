// src/pages/Home.js
import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <div className="home-carousel">
      <ImageCarousel />
    </div>
    <div className="home-description">
      <h1>Figuras de Cerámica Pintadas a Mano</h1>
      <p>
        Explora nuestra colección de figuras decorativas hechas en cerámica y pintadas a mano con colores vivos.
        Cada pieza es única, ideal para regalar o embellecer tus espacios con arte.
      </p>
    </div>
  </div>
);

export default Home;

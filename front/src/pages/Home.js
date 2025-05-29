// src/pages/Home.js
import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import './Home.css';
import '../components/ImageCarousel.css';

const Home = () => (
  <div>
    <div className="carousel-container">
      <ImageCarousel />
      <div className="carousel-text">
        <h2>Figuras de Cerámica Pintadas a Mano</h2>
        <p>
          Explora nuestra colección de figuras decorativas hechas en cerámica y pintadas a mano con colores vivos.
          Cada pieza es única, ideal para regalar o embellecer tus espacios con arte.
        </p>
      </div>
    </div>

    <section className="home-section">
      <h2>¡Bienvenidos a Qué Lindo!</h2>
      <p>
        Aquí encontrarás creaciones hechas con amor y dedicación. Desde figuras de cerámica pintadas a mano con colores vibrantes,
        hasta originales regalos con peluches y sorpresas englobadas en globos gigantes para celebrar momentos únicos.
        Cada pieza está hecha artesanalmente, pensada para regalar sonrisas y amor.
      </p>
    </section>

    <section className="home-section">
      <h2>Sobre mí / Sobre Qué Lindo</h2>
      <p>
        Qué Lindo nace del deseo de crear detalles especiales, únicos e inolvidables. Cada figura de cerámica está pintada a mano
        con pintura acrílica y terminado con resina, cuidando cada trazo, cada color, dando brillo y vida a cada producto.
        Nuestros globos englobados combinan ternura, creatividad y delicadeza: peluches adorables, dulces y sorpresas, presentados
        dentro de globos gigantes ideales para sorprender en cualquier ocasión: nacimientos, cumpleaños, Día del Amor, Día del Niño y más.
        Hecho con manos, pensado con el corazón.
      </p>
    </section>

    <section className="home-section">
      <h2>Categoría: Cerámicas pintadas a mano</h2>
      <p>
        Figuras únicas y coloridas hechas de cerámica, pintadas completamente a mano. Desde animalitos hasta personajes tiernos,
        cada pieza es especial y está lista para decorar tus espacios o convertirse en un regalo memorable para esa persona especial.
      </p>
    </section>

    <div className="home-highlight">
      “Regalar algo lindo es fácil, regalar algo único es arte.” — Qué Lindo.
    </div>
  </div>
);

export default Home;

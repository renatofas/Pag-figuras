// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css'; // opcional para estilos

const ProductCard = ({ name, price, image, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
      <a
        href={`https://wa.me/56XXXXXXXXX?text=Hola, me interesa el producto: ${name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Contactar por WhatsApp
      </a>
    </div>
  );
};

export default ProductCard;

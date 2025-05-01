// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, images, description }) => (
  <div className="product-card">
    <Link to={`/producto/${id}`}>
      <img src={images[0]} alt={name} /> {/* ✅ corregido */}
    </Link>
    <h3>{name}</h3>
    <p>{description}</p>
    <strong>${price}</strong>
    <a
      href={`https://wa.me/56912345678?text=Hola, me interesa el producto: ${name}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Contactar por WhatsApp
    </a>
  </div>
);

export default ProductCard;

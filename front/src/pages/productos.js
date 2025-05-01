// src/pages/Productos.js
import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    name: 'Figura Goku',
    price: 19990,
    image: '/images/goku.jpg',
    description: 'Figura articulada de Goku Super Saiyajin',
  },
  {
    name: 'Figura Luffy',
    price: 17990,
    image: '/images/luffy.jpg',
    description: 'Figura coleccionable de Luffy Gear 5',
  },
];

const Productos = () => (
  <div className="product-grid">
    {products.map((prod, idx) => (
      <ProductCard key={idx} {...prod} />
    ))}
  </div>
);

export default Productos;

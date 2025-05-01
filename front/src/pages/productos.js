// src/pages/Productos.js
import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Productos = () => (
  <div className="product-grid">
    {products.map((prod) => (
      <ProductCard key={prod.id} {...prod} />
    ))}
  </div>
);

export default Productos;

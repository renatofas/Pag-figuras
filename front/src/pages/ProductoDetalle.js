// src/pages/ProductoDetalle.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProductoDetalle.css';
import products from '../data/products';

const ProductoDetalle = () => {
  const { id } = useParams();

  console.log("🔎 ID recibido desde la URL:", id);
  console.log("📦 Lista de productos:", products);

  const producto = products.find(p => p.id.toString() === id?.toString());
  console.log("✅ Producto encontrado:", producto);

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="producto-detalle">
      <h1>{producto.name}</h1>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {producto.images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Vista ${index + 1} de ${producto.name}`} />
          </div>
        ))}
      </Carousel>
      <p>{producto.description}</p>
      <strong>${producto.price}</strong>
      <a
        className="btn-whatsapp"
        href={`https://wa.me/56912345678?text=Hola, me interesa el producto: ${producto.name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Contactar por WhatsApp
      </a>
    </div>
  );
};

export default ProductoDetalle;

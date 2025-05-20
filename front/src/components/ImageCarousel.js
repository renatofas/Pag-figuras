// src/components/ImageCarousel.js
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './ImageCarousel.css';


const ImageCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1746124987/WhatsApp_Image_2025-05-01_at_14.26.30_n7cepp.jpg" alt="Figura de cerámica colorida 1" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1746124988/WhatsApp_Image_2025-05-01_at_14.26.31_1_ww9b4h.jpg" alt="Figura de cerámica colorida 2" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1746124988/WhatsApp_Image_2025-05-01_at_14.26.31_1_ww9b4h.jpg" alt="Figura de cerámica colorida 3" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;

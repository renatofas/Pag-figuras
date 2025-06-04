// src/components/ImageCarousel.js
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './ImageCarousel.css';

const ImageCarousel = () => {
  return (
    <div className="carousel-image">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003696/WhatsApp_Image_2025-05-31_at_14.55.53_qx8kjx.jpg" alt="Figura de cerámica colorida 1" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003596/WhatsApp_Image_2025-06-01_at_20.34.59_kbpyjt.jpg" alt="Figura de cerámica colorida 2" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003595/WhatsApp_Image_2025-06-01_at_20.34.59_1_fjpnpq.jpg" alt="Figura de cerámica colorida 3" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003594/WhatsApp_Image_2025-06-01_at_20.34.58_2_resggk.jpg" alt="Figura de cerámica colorida 1" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003595/WhatsApp_Image_2025-06-01_at_20.34.58_ezgkjg.jpg" alt="Figura de cerámica colorida 1" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003595/WhatsApp_Image_2025-06-01_at_20.34.59_3_ssoiy1.jpg" alt="Figura de cerámica colorida 1" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003595/WhatsApp_Image_2025-06-01_at_20.35.00_1_jft58g.jpg" alt="Figura de cerámica colorida 1" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003594/WhatsApp_Image_2025-06-01_at_20.35.00_garwdv.jpg" alt="Figura de cerámica colorida 1" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003595/WhatsApp_Image_2025-06-01_at_20.34.58_1_kx50ys.jpg" alt="Figura de cerámica colorida 1" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003594/WhatsApp_Image_2025-06-01_at_20.34.58_3_yl8k39.jpg" alt="Figura de cerámica colorida 1" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003594/WhatsApp_Image_2025-06-01_at_20.34.59_2_tjmgbr.jpg" alt="Figura de cerámica colorida 1" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

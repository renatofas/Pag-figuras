const products = [
    {
      id: '1',
      name: 'Perro Poodle',
      price: 35000,
      description: '22x21 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003702/WhatsApp_Image_2025-06-01_at_20.34.56_ingjh3.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003702/WhatsApp_Image_2025-06-01_at_20.34.56_ingjh3.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003689/WhatsApp_Image_2025-06-01_at_20.34.55_2_zltj9t.jpg'
      ]
    },
    {
      id: '2',
      name: 'Perro Poodle',
      price: 35000,
      description: '22x21 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003698/WhatsApp_Image_2025-06-01_at_20.34.57_kuzcbr.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003698/WhatsApp_Image_2025-06-01_at_20.34.57_2_lcvzs9.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003698/WhatsApp_Image_2025-06-01_at_20.34.57_1_f6mike.jpg'
      ]
    },
    {
      id: '3',
      name: 'Elefante',
      price: 46900,
      description: '19x33 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003697/WhatsApp_Image_2025-06-01_at_20.34.52_rjmtkh.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003696/WhatsApp_Image_2025-06-01_at_20.34.52_1_t2sgtk.jpg'
      ]
    },
    {
      id: '4',
      name: 'Elefante',
      price: 46900,
      description: '19x33 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003695/WhatsApp_Image_2025-06-01_at_20.34.52_3_vuxfyd.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003694/WhatsApp_Image_2025-06-01_at_20.34.52_2_ju6ctt.jpg'
      ]
    },
    {
      id: '5',
      name: 'Elefante',
      price: 46900,
      description: '19x33 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003693/WhatsApp_Image_2025-06-01_at_20.34.53_enonuw.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003693/WhatsApp_Image_2025-06-01_at_20.34.53_1_z5pigr.jpg'
      ]
    },
    /*{
      id: '6',
      name: 'Perro salchicha ',
      price: 29000,
      description: '20x14 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1748193800/WhatsApp_Image_2025-05-23_at_21.49.04_izlr0a.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1748193800/WhatsApp_Image_2025-05-22_at_13.54.11_1_rt6pyj.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1748193800/WhatsApp_Image_2025-05-22_at_13.54.11_yzfkvv.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1748193800/WhatsApp_Image_2025-05-22_at_13.54.12_1_cwn5ga.jpg'
      ]
    }, */
    {
      id: '7',
      name: 'Perro salchicha ',
      price: 29000,
      description: '20x14 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003701/WhatsApp_Image_2025-06-01_at_20.34.56_1_qjk54s.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003700/WhatsApp_Image_2025-06-01_at_20.34.56_2_h6tyxq.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003699/WhatsApp_Image_2025-06-01_at_20.34.56_3_vh8p3t.jpg'
      ]
    },
    {
      id: '8',
      name: 'Corazón',
      price: 25000,
      description: '15x15 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003693/WhatsApp_Image_2025-06-01_at_20.34.53_2_ysep4f.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003692/WhatsApp_Image_2025-06-01_at_20.34.54_ducoqj.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003692/WhatsApp_Image_2025-06-01_at_20.34.53_3_htkxr2.jpg'
      ]
    },
    {
      id: '9',
      name: 'Corazón',
      price: 25000,
      description: '15x15 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003691/WhatsApp_Image_2025-06-01_at_20.34.54_3_mohweq.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003689/WhatsApp_Image_2025-06-01_at_20.34.54_1_uqocji.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1749003689/WhatsApp_Image_2025-06-01_at_20.34.54_2_gyqpxb.jpg'
      ]
    },
    {
      id: '10',
      name: 'Globo burbuja',
      price: 8900,
      description: 'Personalizado',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1750387927/WhatsApp_Image_2025-06-19_at_15.25.50_rq37fl.jpg'
      ]
    },
    {
      id: '11',
      name: 'Globo burbuja Baby',
      price: 46990,
      description: 'Conjunto incluye Peluche y Manta',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1751029799/WhatsApp_Image_2025-06-21_at_11.59.48_tik4u4.jpg'
      ]
    },
    {
      id: '12',
      name: 'Hermoso peluche con golosinas',
      price: 28990,
      description: 'Personalizado',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1751029804/WhatsApp_Image_2025-06-23_at_17.10.02_1_eczmoe.jpg'
      ]
    },
    {
      id: '13',
      name: 'Toro español grande',
      price: 120000,
      description: '32x44 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1752450437/WhatsApp_Image_2025-07-09_at_22.27.20_evlyod.jpg'
      ]
    },
    {
      id: '14',
      name: 'Perro salchicha',
      price: 29000,
      description: '20x14 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1753634958/WhatsApp_Image_2025-07-26_at_13.54.00_hfura3.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1753634983/WhatsApp_Image_2025-07-26_at_13.54.00_1_jsfebq.jpg'
      ]
    },
    {
      id: '15',
      name: 'Gato mediano',
      price: 31000,
      description: '12x29 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1753635066/WhatsApp_Image_2025-07-26_at_13.56.11_ln3rj1.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1753635071/WhatsApp_Image_2025-07-26_at_13.56.12_sxi56l.jpg'
      ]
    },
    {
      id: '16',
      name: 'Pera',
      price: 23000,
      description: '18x11 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1753635128/WhatsApp_Image_2025-07-26_at_13.57.48_jmynu2.jpg'
      ]
    },
    {
      id: '17',
      name: 'Manzana',
      price: 23000,
      description: '18x11 cm',
      images: [
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1753635179/WhatsApp_Image_2025-07-26_at_13.58.59_1_zp6tvl.jpg',
        'https://res.cloudinary.com/dhvxcx2d2/image/upload/v1753635183/WhatsApp_Image_2025-07-26_at_13.58.59_gvht3o.jpg'
      ]
    },
  ];
  
  export default products;
  
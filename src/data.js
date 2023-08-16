// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';


export const navigation = [
  {
    name: 'home',
    href: '/home',
  },
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'features',
    href: '/features',
  },
  {
    name: 'contact',
    href: '/contact',
  },
];

export const hero = {
  title: 'Introducing Airpods Max',
  subtitle:
    'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.',
  buttonText: 'Shop Now',
};

export const stats = [
  {
    value: '2',
    text: 'Year Experience',
  },
  {
    value: '1',
    text: 'Opened in the country',
  },
  {
    value: '4k+',
    text: 'Pods sold',
  },
  {
    value: '26+',
    text: 'Variant Airpods',
  },
];

export const features = {
  image: <Features2Img />,
  title: 'A radically original composition',
  subtitle:
    'The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit that creates the optimal acoustic seal for many different head shapes — fully immersing you in every sound.',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Breathable headband',
      subtitle:
        'The canopy spanning the headband is made from a breathable knit mesh, distributing weight to reduce on‑head pressure.',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Stainless steel frame',
      subtitle:
        'The stainless steel frame is wrapped with a soft-to-the-touch material for a remarkable combination of strength, flexibility, and comfort.',
    },
  ],
  feature2: {
    image: <Features1Img />,
    title: 'A radically original composition',
    subtitle:
      'The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit that creates the optimal acoustic seal for many different head shapes — fully immersing you in every sound',
  },
};

export const newInStore = {
  title: 'New colors In Store Now',
  subtitle: 'Get the latest items immediately with promo prices',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'Pink',
      image: <ChairImg />,
    },
    {
      name: 'Silver',
      image: <BedImg />,
    },
    {
      name: 'Olive',
      image: <CupboardImg />,
    },
    {
      name: 'Dark Metal',
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: 'All Products',
  subtitle:
    'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Airpod 2nd Gen',
          price: 1075,
          oldPrice: 1282,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Airpod 3rd Gen',
          price: 1550,
          oldPrice: 1770,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Airpod Pro 3rd Gen',
          price: 2005,
          oldPrice: 2220,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Airpod Pro 2nd Gen',
          price: 1175,
          oldPrice: 1282,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Airpod Max',
          price: 3200,
          oldPrice: 3610,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Bose QC45 QuietComfort',
          price: 645,
          oldPrice: 950,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Sony WF-C500 true wireless',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Supra NERO-TX true wireless',
          price: 625,
          oldPrice: 840,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Samsung Galaxy Buds2 Pro',
          price: 1105,
          oldPrice: 1220,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'JBL Reflect Aero True Wireless',
          price: 1275,
          oldPrice: 1582,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Airpod 2nd Gen',
          price: 1075,
          oldPrice: 1282,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Airpod 3rd Gen',
          price: 1550,
          oldPrice: 1770,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Airpod Pro 3rd Gen',
          price: 2005,
          oldPrice: 2220,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Airpod Pro 2nd Gen',
          price: 1175,
          oldPrice: 1282,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Airpod Max',
          price: 3200,
          oldPrice: 3610,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Bose QC45 QuietComfort',
          price: 645,
          oldPrice: 950,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Sony WF-C500 true wireless',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Supra NERO-TX true wireless',
          price: 625,
          oldPrice: 840,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Samsung Galaxy Buds2 Pro',
          price: 1105,
          oldPrice: 1220,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'JBL Reflect Aero True Wireless',
          price: 1275,
          oldPrice: 1582,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'What people are saying about us',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula Pfeffer',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
  ],
};

export const newsletter = {
  title: 'Get more discount Off your order',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'FurniShop 2022 - All Rights Reserved.',
};

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import NewItems from './components/NewItems';
import FeatureSecond from './components/FeatureSecond';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
function App() {
  return (
    <div className='w-full max-w-[1680px] mx-auto bg-white'>
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeatureSecond />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

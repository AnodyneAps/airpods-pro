import React from 'react'
// import data 
import { products } from '../data';
// import related components
import ProductSlider from '../components/ProductSlider'
const Products = () => {
// destructure data
const { title, subtitle } = products;
  return (
    <section className="section">
        <div className="container mx-auto">
          <div>
            <h2 className='title'>{title}</h2>
            <p className='mb-[50px]'>{subtitle}</p>
            {/* product slider */}
            <ProductSlider />
          </div>
        </div>
    </section>
  )
}

export default Products
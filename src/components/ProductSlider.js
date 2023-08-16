import React from 'react'
// import swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';

//import required modules
import { Navigation, Pagination } from 'swiper';

//import data 
import { products } from '../data';

//import icons
import { HiPlus } from 'react-icons/hi';



const ProductSlider = () => {
  // destructure products
  const { pages } = products;
  return (
      <Swiper modules={[Pagination, Navigation]} pagination={{clickable: true }} navigation={true} className='productSlider min-h-[1300px]'>
          {pages.map((page, index) =>{
              return (
                      <SwiperSlide key={index}>
                        <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[25px]'>
                          {page.productList.map((product, index) =>{
                              //destructure product here 
                            const {image, name, price, oldPrice } = product;
                          return (
                                <div className='w-full max-w-[290px] h-[380px] text-left' key={index}>
                                  <div className='border hover:border-accent rounded-[15px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[16px] relative transition '>
                                      <img src={image.type} alt={name} />
                                      <div className='absolute bottom-3 right-[22px] bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition'>
                                        <HiPlus className='text-xl text-primary'/>
                                      </div>
                                  </div>
                                  <div className='font-semibold lg:text-lg'>{name}</div>
                                    <div className='flex items-center gap-x-4'>
                                      <div>$ { price }</div>
                                      <div className='text-[15px] text-gray-400 line-through'>$ { oldPrice }</div>
                                    </div>
                                </div>
                              )
                          })}
                        </div>
                      </SwiperSlide>
                      )
          })}
      </Swiper>
  )
}

export default ProductSlider
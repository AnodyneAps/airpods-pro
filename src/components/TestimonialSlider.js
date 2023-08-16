import React from 'react'
// import swiper 
import {Swiper, SwiperSlide} from 'swiper/react'

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../slider.css';

// import swiper modules
import { Autoplay, Navigation } from 'swiper';

//import data from data
import { testimonial } from '../data';
const TestimonialSlider = () => {
  return (
    <Swiper className='testimonialSlider' modules={[Navigation, Autoplay]} navigation={true} autoplay={true} >
      {testimonial.persons.map((person, index)=>{
      //destructure person
       const { avatar,name, occupation , message } = person;
        return (
              <SwiperSlide key={index}>
                <div className='flex flex-col min-h-[240px]'>
                  <div className='flex items-center gap-x-5 mb-9'>
                  {/* Avatar */}
                    <img src={avatar.type} alt="avatar" />
                    <div>
                      <div className='text-xl font-semibold'>{name}</div>
                      <div className='text-gray-500 text-small'>{occupation}</div>
                    </div>
                    </div>
                    {/* testiminial message  */}
                   <div className='text-xl max-w-[570px]'>{message}</div>
                </div>
              </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestimonialSlider
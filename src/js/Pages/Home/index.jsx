import React from "react";
import {Image} from 'react-bootstrap'
import One from '../../../utilas/1.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {PathImage} from '../../../utilas/pathImage'

// Import Swiper styles
import 'swiper/css';
const Home = () => {
  return (
    <div className="Home">
      <h2>Home </h2>
      <Image   src={One}   className='Image'  />


       <div>

         <div    className="margin"  />
       <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {PathImage?.map((item,index)=>{
        return     <SwiperSlide key={index}>
           <Image   src={item?.image}   className='Image'  />
        </SwiperSlide>
      })}
  
      

    </Swiper>
       </div>
    </div>
  );
};

export default Home;

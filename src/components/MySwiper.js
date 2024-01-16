import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

import '../App.css'

function MySwiper() {
  return (
    <>
    <h2 className='text-center mb-5 fw-bold text-warning'>Look More Stylish</h2>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./assets/images/swiper-img-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/swiper-img-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/swiper-img-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/swiper-img-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/swiper-img-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/swiper-img-6.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MySwiper;

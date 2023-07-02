import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import sl1 from '../../../../../assets/slider/sl1.jpg'
import sl2 from '../../../../../assets/slider/sl2.jpg'
import sl3 from '../../../../../assets/slider/sl3.jpg'
import sl4 from '../../../../../assets/slider/sl4.jpg'
import sl5 from '../../../../../assets/slider/sl5.jpg'
import sl6 from '../../../../../assets/slider/sl6.jpg'
import { FaTag } from 'react-icons/fa';



const Slider = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-12"
        >
            <SwiperSlide>
                <img className='lg:h-96 absolute' src={sl1} alt="" />
                <div className='flex items-center bg-blue-400 rounded-2xl p-2  w-24 mt-6 ml-4 text-white relative'><FaTag className='ml-2'></FaTag>
                    <p className=''>&nbsp; Easy</p></div>
            </SwiperSlide>
            <SwiperSlide><img className='lg:h-96 absolute' src={sl2} alt="" />
            <div className='flex items-center relative bg-green-600 rounded-2xl p-2  w-24 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Vegan</p>
                            </div>
            </SwiperSlide>
            <SwiperSlide><img className='lg:h-96 absolute' src={sl3} alt="" />
            <div className='flex items-center relative bg-green-400 rounded-2xl p-2  w-28 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Recipes</p>
                            </div>
            </SwiperSlide>
            <SwiperSlide><img className='lg:h-96 absolute' src={sl4} alt="" />
            <div className='flex items-center relative bg-blue-400 rounded-2xl p-2  w-28 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Chicken</p></div>
            </SwiperSlide>
            <SwiperSlide><img className='lg:h-96 absolute' src={sl5} alt="" />
            <div className='flex items-center relative bg-orange-400 rounded-2xl p-2  w-24 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Pasta</p></div>
            </SwiperSlide>
            <SwiperSlide><img className='lg:h-96 ' src={sl6} alt="" />
            
            </SwiperSlide>
            
            


        </Swiper>

    );
};

export default Slider;
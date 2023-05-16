import React from 'react';
import banner from '../../../assets/bg.jpg'
const Banner = () => {
    return (
        <div>
            <div className="relative mt-8">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img className='w-full h-auto' src={banner} alt="" />

                <div className="absolute top-0 left-0 w-full h-full lg:mt-72 lg:ml-20 mt-8">
                    <h1 className="text-white lg:text-[70px] font-bold">Welcome to SpiceHouse!<br></br> Find our best recipes</h1>
                    <p className='text-white lg:text-3xl mb-4'>Get inspired by various recipes from my expert experiences. <br></br>From quick healthy meals to family suppers.</p>
                    <button className='bg-[#F9A51A] p-4 text-white mt-4'>SUBSCRIBE NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
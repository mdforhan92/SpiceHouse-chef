import React from 'react';
import ch1 from '../../../assets/ch1.jpg'
import ch2 from '../../../assets/ch2.jpg'
import ch3 from '../../../assets/ch3.jpg'
import ch4 from '../../../assets/ch4.jpg'
const ChefExhibition = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-semibold mt-8 mb-4'>Chef Exhibition</h2>
            <div className="carousel lg:w-2/4 items-center mb-4 mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={ch1} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={ch2} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={ch3} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={ch4} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefExhibition;
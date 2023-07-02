import React from 'react';
import rec1 from '../../../../../assets/RecipeCard/rec1.jpg'
import rec3 from '../../../../../assets/RecipeCard/rec6.jpg'
import rec2 from '../../../../../assets/RecipeCard/rec3.jpg'
import { FaRegClock, FaTag } from 'react-icons/fa';
const BestChicken = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold mt-16 text-center'>Best chicken recipes</h1>
            <div className='divider opacity-70 mb-8'></div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-8'>
                {/* div 1  */}
                <div className='col-span-2'>
                    <div className='mb-4'>
                        <div className="card card-side bg-base-100">
                            <figure><img className='h-80 hover:opacity-70' src={rec1} alt="Movie" /></figure>
                            <div className="card-body">
                            <div className='flex items-center bg-blue-400 rounded-2xl p-2  w-24 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Easy</p></div>
                            <h2 className="text-3xl font-semibold hover:text-yellow-700">Almond Flour Pancakes</h2>
                            <div className='flex'>
                                <div className='text-slate-400 italic text-lg'>
                                    <p>June 7,2021</p>
                                </div>
                                <div className='flex items-center text-slate-400 italic text-lg ml-16'>
                                <FaRegClock></FaRegClock><p>&nbsp;23 min Cook</p>
                                </div>
                            </div>
                            <p className='text-xl'>Then we are layering the puff pastry with a quick schmear of creamy Swiss-ified cheese sauce, an egg, and some diced ham….</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card card-side bg-base-100">
                            <figure><img className='h-80 hover:opacity-70' src={rec2} alt="Movie" /></figure>
                            <div className="card-body">
                            <div className='flex'>
                        <div className='flex items-center bg-blue-400 rounded-2xl p-2  w-24 mt-6 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Easy</p>
                            </div>
                            <div className='flex items-center bg-green-600 rounded-2xl p-2  w-24 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Vegan</p>
                            </div>
                        </div>
                            <h2 className="text-3xl font-semibold hover:text-yellow-700">Spicy Serrano Pineapple Margarita</h2>
                            <div className='flex'>
                                <div className='text-slate-400 italic text-lg'>
                                    <p>June 7,2021</p>
                                </div>
                                <div className='flex items-center text-slate-400 italic text-lg ml-16'>
                                <FaRegClock></FaRegClock><p>&nbsp;53 min Cook</p>
                                </div>
                            </div>
                            <p className='text-xl'>Then we are layering the puff pastry with a quick schmear of creamy Swiss-ified cheese sauce, an egg, and some diced ham….</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* div 2  */}
                <div>
                    <div className="card card-compact bg-base-100 border">
                        <figure><img className='h-48 w-full' src={rec3} alt="Shoes" /></figure>
                        <div className='flex items-center bg-orange-400 rounded-2xl p-2  w-24 mt-6 ml-8 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Pasta</p></div>
                        <div className="card-body">
                            <h2 className="text-3xl font-semibold mt-2 mb-4 hover:text-yellow-700">Broccoli Slaw</h2>
                            <div className='flex mb-5'>
                                <div className='text-slate-400 italic text-lg'>
                                    <p>June 7,2021</p>
                                </div>
                                <div className='flex items-center text-slate-400 italic text-lg ml-16'>
                                <FaRegClock></FaRegClock><p>&nbsp;16 min Cook</p>
                                </div>
                            </div>
                            <p className='text-xl mb-8'>Then we are layering the puff pastry with a quick schmear of creamy Swiss-ified cheese sauce, an egg, and some diced ham….</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BestChicken;
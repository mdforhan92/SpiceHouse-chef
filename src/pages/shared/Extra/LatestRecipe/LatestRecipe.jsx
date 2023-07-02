import React from 'react';
import rec1 from '../../../../assets/RecipeCard/rec1.jpg'
import rec2 from '../../../../assets/RecipeCard/rec2.jpg'
import rec3 from '../../../../assets/RecipeCard/rec3.jpg'
import rec4 from '../../../../assets/RecipeCard/rec4.jpg'
import rec5 from '../../../../assets/RecipeCard/rec5.jpg'
import rec6 from '../../../../assets/RecipeCard/rec6.jpg'
import rec7 from '../../../../assets/RecipeCard/rec7.jpg'
import rec8 from '../../../../assets/RecipeCard/rec8.jpg'
import { FaTag, FaRegClock } from "react-icons/fa";
const LatestRecipe = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold mt-16'>The Latest Recipe</h1>
            <div className='divider opacity-70 mb-8'></div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {/* card 1  */}
                <div className=''>
                    <div className="card card-compact bg-base-100 shadow-xl h-[490px]">
                        <figure><img className='h-48 w-full' src={rec1} alt="Shoes" /></figure>
                        <div className='flex items-center bg-blue-400 rounded-2xl p-2  w-24 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Easy</p></div>
                        <div className="card-body">
                            <h2 className="text-3xl font-semibold mt-2 mb-4 hover:text-yellow-700">Almond Flour Pancakes</h2>
                            <div className='flex'>
                                <div className='text-slate-400 italic text-lg'>
                                    <p>June 7,2021</p>
                                </div>
                                <div className='flex items-center text-slate-400 italic text-lg ml-16'>
                                <FaRegClock></FaRegClock><p>&nbsp;23 min Cook</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* card 2  */}
                <div className=''>
                    <div className="card card-compact bg-base-100 shadow-xl h-[490px]">
                        <figure><img className='h-48 w-full' src={rec2} alt="Shoes" /></figure>
                        <div className='flex items-center bg-blue-400 rounded-2xl p-2  w-24 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Easy</p></div>
                        <div className="card-body">
                            <h2 className="text-3xl font-semibold mt-2 mb-4 hover:text-yellow-700">Homemade Oatmeal Chocolate Chip Cookie Crisp Cereal</h2>
                            <div className='flex'>
                                <div className='text-slate-400 italic text-lg'>
                                    <p>June 8,2021</p>
                                </div>
                                <div className='flex items-center text-slate-400 italic text-lg ml-16'>
                                <FaRegClock></FaRegClock><p>&nbsp;75 min Cook</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* card 3  */}
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl h-[490px]">
                        <figure><img className='h-48 w-full' src={rec3} alt="Shoes" /></figure>
                        <div className='flex'>
                        <div className='flex items-center bg-blue-400 rounded-2xl p-2  w-24 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Easy</p>
                            </div>
                            <div className='flex items-center bg-green-600 rounded-2xl p-2  w-24 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Vegan</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="text-3xl font-semibold mt-2 mb-4 hover:text-yellow-700">Spicy Serrano Pineappple Margarita</h2>
                            <div className='flex'>
                                <div className='text-slate-400 italic text-lg'>
                                    <p>June 7,2021</p>
                                </div>
                                <div className='flex items-center text-slate-400 italic text-lg ml-16'>
                                <FaRegClock></FaRegClock><p>&nbsp;53 min Cook</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* card 4  */}
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl h-[490px]">
                        <figure><img className='h-48 w-full' src={rec4} alt="Shoes" /></figure>
                        <div className='flex items-center bg-blue-400 rounded-2xl p-2  w-28 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Chicken</p></div>
                        <div className="card-body">
                            <h2 className="text-3xl font-semibold mt-2 mb-4 hover:text-yellow-700">Taiwanese Popcorn Chicken</h2>
                            <div className='flex'>
                                <div className='text-slate-400 italic text-lg'>
                                    <p>June 1,2021</p>
                                </div>
                                <div className='flex items-center text-slate-400 italic text-lg ml-16'>
                                <FaRegClock></FaRegClock><p>&nbsp;32 min Cook</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* card 5  */}
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl h-[490px]">
                        <figure><img className='h-48 w-full' src={rec5} alt="Shoes" /></figure>
                        <div className='flex items-center bg-blue-400 rounded-2xl p-2  w-28 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Chicken</p></div>
                        <div className="card-body">
                            <h2 className="text-3xl font-semibold mt-2 mb-4 hover:text-yellow-700">Sheet Pan Cheesy Poblano corn Enchiladas</h2>
                            <div className='flex'>
                                <div className='text-slate-400 italic text-lg'>
                                    <p>June 7,2021</p>
                                </div>
                                <div className='flex items-center text-slate-400 italic text-lg ml-16'>
                                <FaRegClock></FaRegClock><p>&nbsp;50 min Cook</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* card 6  */}
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl h-[490px]">
                        <figure><img className='h-48 w-full' src={rec6} alt="Shoes" /></figure>
                        <div className='flex items-center bg-orange-400 rounded-2xl p-2  w-24 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Pasta</p></div>
                        <div className="card-body">
                            <h2 className="text-3xl font-semibold mt-2 mb-4 hover:text-yellow-700">Broccoli Slaw</h2>
                            <div className='flex'>
                                <div className='text-slate-400 italic text-lg'>
                                    <p>June 7,2021</p>
                                </div>
                                <div className='flex items-center text-slate-400 italic text-lg ml-16'>
                                <FaRegClock></FaRegClock><p>&nbsp;16 min Cook</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* card 7  */}
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl h-[490px]">
                        <figure><img className='h-48 w-full' src={rec7} alt="Shoes" /></figure>
                        <div className='flex items-center bg-blue-400 rounded-2xl p-2  w-24 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Easy</p></div>
                        <div className="card-body">
                            <h2 className="text-3xl font-semibold mt-2 mb-4 hover:text-yellow-700">10 Taco Tuesday Recipes fpr You If You Love Tacos</h2>
                            <div className='flex'>
                                <div className='text-slate-400 italic text-lg'>
                                    <p>June 7,2021</p>
                                </div>
                                <div className='flex items-center text-slate-400 italic text-lg ml-16'>
                                <FaRegClock></FaRegClock><p>&nbsp;23 min Cook</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* card 8  */}
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl h-[490px]">
                        <figure><img className='h-48 w-full' src={rec8} alt="Shoes" /></figure>
                        <div className='flex items-center bg-pink-400 rounded-2xl p-2  w-24 mt-6 ml-4 text-white'><FaTag className='ml-2'></FaTag>
                            <p className=''>&nbsp; Basics</p></div>
                        <div className="card-body">
                            <h2 className="text-3xl font-semibold mt-2 mb-4 hover:text-yellow-700">The Ultimate Guide to Fish sauce</h2>
                            <div className='flex'>
                                <div className='text-slate-400 italic text-lg'>
                                    <p>May 13,2021</p>
                                </div>
                                <div className='flex items-center text-slate-400 italic text-lg ml-16'>
                                <FaRegClock></FaRegClock><p>&nbsp;50 min Cook</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='text-center mt-8'>
            <button className="btn btn-primary">Load More</button>
            </div>
        </div>
    );
};

export default LatestRecipe;
import React from 'react';
import rec1 from '../../../../../assets/RecipeCard/rec1.jpg'
import rec2 from '../../../../../assets/RecipeCard/rec3.jpg'
import rec3 from '../../../../../assets/RecipeCard/rec6.jpg'
const NextWeek = () => {
    return (
        <>
            <h1 className='text-4xl font-bold mt-16 text-center'>What to Make Next Week</h1>
            <div className='divider opacity-70 mb-8'></div>
            
            <div className='flex min-h items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                    <div className="">
                        <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={rec1} alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                    <h1 className='text-3xl font-bold text-white -mt-12'>Almond Flour Pancakes</h1> 
                    <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci asperiores iure?</p> 
                    <button className='rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>See More</button>  
                    </div> 
                </div>
                <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                    <div className="h-96 w-72">
                        <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={rec2} alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                    <h1 className='text-3xl font-bold text-white -mt-12'>Spicy Serrano Pineapple Margarita</h1> 
                    <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci asperiores iure?</p> 
                    <button className='rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>See More</button>  
                    </div> 
                </div>
                <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                    <div className="h-96 w-72">
                        <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={rec3} alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                    <h1 className='text-3xl font-bold text-white -mt-12'>Broccoli Slaw</h1> 
                    <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci asperiores iure?</p> 
                    <button className='rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>See More</button>  
                    </div> 
                </div>
                </div>
                <div className="fixed bottom-16">
                    
                </div>
            </div>
        </>
    );
};

export default NextWeek;
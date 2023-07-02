import React from 'react';
import rec1 from '../../../../../assets/RecipeCard/rec1.jpg'
const NextWeek = () => {
    return (
        <>
            <h1 className='text-4xl font-bold mt-16'>What to Make Next Week</h1>
            <div className='divider opacity-70 mb-8'></div>
            
            <div className='flex min-h items-center justify-center bg-neutral-900'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                    <div className="h-96 w-72">
                        <img className='h-full w-full object-cover' src={rec1} alt="" />
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
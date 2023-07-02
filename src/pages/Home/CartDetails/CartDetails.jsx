import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CartDetails = ({ chefData }) => {
    const {chef_name, picture_url, id, years_of_experience, num_recipes,likes} = chefData;

    return (
        <div className=''>
            <div className="mx-auto lg:w-96 bg-base-100 shadow-lg ">
                <figure><LazyLoadImage className='h-60 w-4/5 rounded-lg mt-4 mx-auto' src={picture_url} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold">{chef_name}</h2>
                    <p className='text-xl'>Years of experience {years_of_experience}</p>
                    <p className='text-xl'>Num of recipes: {num_recipes}</p>
                    <p className='text-xl flex items-center ' ><FaRegHeart /> {likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chefData/${id}`}><button className="btn bg-slate-800">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;
import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const RecepieDetails = () => {
    const [disabled, setDisabled] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [disabled3, setDisabled3] = useState(false);
    const recipeDetails = useLoaderData();
    const { chef_name,years_of_experience, description, num_recipes, likes,country,rating, picture_url, recipes } = recipeDetails;
    console.log(recipeDetails)

    const handleToFav =() =>{
        toast('Added to favourite');
        setDisabled(true);
    }
    const handleToFav2 =() =>{
        toast('Added to favourite');
        setDisabled2(true);
    }
    const handleToFav3 =() =>{
        toast('Added to favourite');
        setDisabled3(true);
    }
    

    return (
        <div>
            <div className="card lg:w-2/4 mx-auto h-2/5 bg-base-100 shadow-xl">
                <figure><LazyLoadImage className='h-auto' src={picture_url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {chef_name}
                        
                    </h2>
                    <div className="card-actions ">
                        <div className="badge badge-outline">Country: {country}</div>
                        <div className="badge badge-outline">Experience: {years_of_experience} years</div>
                        <div className="badge badge-outline"><FaRegHeart className='text-red-600 mr-1' /> {likes}</div>
                        <div className="badge badge-outline">Totat Recipe: {num_recipes}</div>
                        <div className="badge badge-outline"><FaStar className='text-amber-400 mr-1' /> {rating}</div>
                        <div>{description}</div>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 mt-8'>
                <div className=" bg-base-100 shadow-xl">
                    <figure><LazyLoadImage className='h-60 ml-44' src={recipes[0].recipes_img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipes[0].name}</h2>
                        <p><span className='font-semibold'>Ingredient:</span> {recipes[0].ingredients}</p>
                        <p><span className='font-semibold'>Method:</span> {recipes[0].method}</p>
                        <div className='flex items-start'>
                            <Rating
                            placeholderRating={recipes[0]?.rating_recipe}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            ></Rating>
                        <span className='ml-4'>{recipes[0]?.rating_recipe}</span>
                        </div>
                        <div className="card-actions ">
                            <button disabled={disabled} onClick={handleToFav} className="btn btn-secondary"><FaHeart /></button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="bg-base-100 shadow-xl ml-4 ">
                    <figure><LazyLoadImage className='h-60  ml-44' src={recipes[1].recipes_img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipes[1].name}</h2>
                        <p><span className='font-semibold'>Ingredient:</span> {recipes[1].ingredients}</p>
                        <p><span className='font-semibold'>Method:</span> {recipes[1].method}</p>
                        <div className='flex items-start'>
                            <Rating
                            placeholderRating={recipes[0]?.rating_recipe}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            ></Rating>
                        <span className='ml-4'>{recipes[0]?.rating_recipe}</span>
                        </div>
                        <div className="card-actions ">
                            <button disabled={disabled2} onClick={handleToFav2} className="btn btn-secondary"><FaHeart /></button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="bg-base-100 shadow-xl mt-4">
                    <figure><LazyLoadImage className='h-60  ml-44' src={recipes[2].recipes_img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipes[2].name}</h2>
                        <p><span className='font-semibold'>Ingredient:</span> {recipes[2].ingredients}</p>
                        <p><span className='font-semibold'>Method:</span> {recipes[2].method}</p>
                        <div className='flex items-start'>
                            <Rating
                            placeholderRating={recipes[0]?.rating_recipe}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            ></Rating>
                        <span className='ml-4'>{recipes[0]?.rating_recipe}</span>
                        </div>
                        <div className="card-actions ">
                            <button disabled={disabled3} onClick={handleToFav3} className="btn btn-secondary"><FaHeart /></button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default RecepieDetails;
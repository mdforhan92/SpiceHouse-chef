import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartDetails from '../CartDetails/CartDetails';

const Card = () => {
    const [chefDatas, setChefDatas] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-mdforhan92.vercel.app/chefData')
        .then(res =>res.json())
        .then(data => setChefDatas(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-8 mb-8'>SpiceHouse Chef</h2>
            <div className='grid lg:grid-cols-3 mt-4 gap-4'>
            
            {
                chefDatas.map(chefData => <CartDetails
                key={chefData.id}
                chefData={chefData}
                ></CartDetails>)
            }
        </div>
        </div>
    );
};

export default Card;
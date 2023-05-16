import React from 'react';
import logo from '../../../assets/spicehouseheader.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto flex flex-wrap justify-between ">
    <div className="w-full md:w-1/3">
      <img className='h-10' src={logo} alt="" />
      <p className="mt-4">SpiceHouse: Where every dish is crafted with care and passion. Our chefs use only the freshest ingredients and a blend of spices that will tantalize your taste buds. Come dine with us and experience the bold and unforgettable flavors of the SpiceHouse. </p>
    </div>
    <div className="w-full md:w-1/3 mt-8 md:mt-0">
      <h3 className="font-bold text-xl mb-4">Quick Links</h3>
      <ul className="list-none">
        <Link to="/"><li><a href="#" className="hover:text-gray-400">Home</a></li></Link>
        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
      </ul>
    </div>
    <div className="w-full md:w-1/3 mt-8 md:mt-0">
      <h3 className="font-bold text-xl mb-4">Follow Us</h3>
      <ul className="list-none">
        <li><a href="https://www.facebook.com/profile.php?id=100007941765858" className="hover:text-gray-400">Facebook</a></li>
        <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
        <li><a href="https://www.instagram.com/reels/CqKBS_sgMIM/" className="hover:text-gray-400">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div className="border-t border-gray-800 mt-8 pt-8 text-center">
    <p>&copy; 2023 Company Name SpiceHouse. All rights reserved.</p>
  </div>
</footer>

        </div>
    );
};

export default Footer;
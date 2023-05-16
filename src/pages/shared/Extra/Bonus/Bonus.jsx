import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Bonus = () => {
    const testimonials = [
        {
          name: 'John Doe',
          quote: "I recently visited the website 'Delicious Recipes by Chef John' and was thoroughly impressed with my experience. The website is created by renowned Chef John and offers a wide variety of recipes from all over the world.The usability of the website was exceptional - I found it incredibly easy to navigate and search for specific recipes. The layout is visually appealing, and the website provides clear instructions for finding both recipes and ingredients.",
          image: 'https://via.placeholder.com/150x150'
        },
        {
          name: 'Jane Smith',
          quote: "I had the pleasure of exploring 'Foodie Adventures' - a chef recipe website that offers unique and creative recipes from all over the world. The website is visually stunning, with enticing food photography and an easy-to-use layout.Navigating the website was a breeze; the search feature made it simple to find specific recipes, and the categories were well-organized. One of my favorite features on the website was the ability to save recipes to a personal recipe box for easy access later on.",
          image: 'https://via.placeholder.com/150x150'
        },
        // Add more testimonials as needed
      ];
    return (
        <div>
            
            <section id="testimonials" className="bg-gradient-to-r from-slate-200 to-slate-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-shadow-lg text-red-400 shadow-offset-x-2 shadow-offset-y-2 shadow-blur-5 mb-4">What Our Customers Are Saying</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <FaQuoteLeft className="text-2xl text-gray-400 mr-4" />
              <div className="flex-grow">
                <p className="text-gray-800">{testimonial.quote}</p>
                <div className="flex items-center mt-4">
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-full h-10 w-10 mr-4" />
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500">Customer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default Bonus;
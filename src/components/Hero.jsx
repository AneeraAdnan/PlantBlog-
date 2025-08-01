import React from "react";
import { Link } from 'react-router-dom';
import hero from '../assets/images.jpeg';
import herro from '../assets/hero2.jpeg';
import { Heero } from '../constants/Nav_Links';  

const Hero = () => {
  return (
    <section className="bg-[#e5e5cd] px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
      
     <div className="flex flex-col gap-4 max-w-xl text-center lg:text-left">
       {Heero.map((item, index) => (
        <div key={index}>
           <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-snug">
              {item.heading}
            </h2>
            <p className="text-gray-700 text-lg md:text-xl">
              {item.text}
            </p>
      </div>
      ))}

       <Link to="/blog">
          <button className= "bg-emerald-900 text-white px-4 py-2 rounded">
            Go to Blog
          </button>
        </Link>
      </div>

    
      <div className="flex gap-4">
        <img
          src={hero}
          alt="plant"
          className="w-40 h-52 object-cover rounded-md"
        />
        <img
          src={herro}
          alt="plant"
          className="w-40 h-52 object-cover rounded-md "
        />
      </div>
    </section>
  );
};

export default Hero;



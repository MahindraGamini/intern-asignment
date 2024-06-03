import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Star from '../Star 1.png';
import pic1 from '../p1.png';
import pic2 from '../p2.png';
import Slider from '../Slider.png';

const Hero = () => {
  return (
    <>
      <style>{`
        body.dark-mode {
          background-color: #1f2937; 
        }

        .red-shadow {
          filter: drop-shadow(0 0 10px red);
        }
      `}</style>
      <section className="relative text-center py-20 bg-white dark:bg-gray-800 min-h-screen">
        <div className="absolute top-0 left-0 md:ml-5 mt-5">
          <img src={Star} className='rotate-45' alt='star'></img>
        </div>
        <div className="absolute top-0 right-0 md:mr-5 mt-5">
          <img src={Star} className='rotate-45' alt='star'></img>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 font-display">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 text-left">
            <span className='ml-1'>Make The Best</span> <br className='lg' /> 
            <span >Financial Decisions</span> 
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 text-left">
            <span> Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet </span>  <br className='lg'></br>  <span>Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-4 py-2 bg-black text-white rounded flex items-center">Get Started <FontAwesomeIcon className='ml-1' icon={faArrowRight} /></button>
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded flex items-center"> <FontAwesomeIcon icon={faPlay} className="mr-1" /> Watch Video</button>
          </div>

          <img src={Slider} alt='the arrow ' className="red-shadow" />
        </div>
        <div className="bottom-3 right-5 md:right-40 top-2 absolute">
          <img src={pic2} alt='pic1' className='z-1 relative hidden sm:block red-shadow'></img> 
          <img src={pic1} alt='pic2' className='z-0 absolute bottom-9 right-5 sm:hidden red-shadow' ></img> 
        </div>
      </section>
    </>
  );
};

export default Hero;

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCubes } from '@fortawesome/free-solid-svg-icons';
import phoneImage2 from '../p2.png'; 

const Features = () => {
  useEffect(() => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div id="features-section" className="p-6 md:p-12 min-h-screen dark:bg-gray-800 dark:text-white">
      <div className="flex flex-col md:flex-row items-center justify-center mb-12">
        <div className="md:w-1/8 lg:w-1/3 flex justify-center md:justify-end mb-6 md:mb-0">
          <img src={phoneImage2} alt="Phone" className="w-3/4 md:w-full max-w-sm md:max-w-none" />
        </div>
        <div className="md:w-1/2 lg:w-2/3 md:ml-8 font-display">
          <h2 className="text-3xl font-bold mb-4 font-display">Features</h2>
          <h3 className="text-2xl font-semibold mb-6 font-display">Uifry Premium</h3>
          <div className="mb-6">
            <h4 className="text-xl font-semibold flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2" /> Budgeting Intervals</h4>
            <p className="text-gray-600 dark:text-lime-300 leading-relaxed font-display">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold flex items-center"><FontAwesomeIcon icon={faCubes} className="mr-2" /> Budgeting Intervals</h4>
            <p className="text-gray-600 dark:text-lime-300 leading-relaxed font-display">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2" /> Budgeting Intervals</h4>
            <p className="text-gray-600 dark:text-lime-300 leading-relaxed font-display">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

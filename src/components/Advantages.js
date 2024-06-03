import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCogs } from '@fortawesome/free-solid-svg-icons';
import phoneImage1 from '../p2.png'; // Adjust the path to your image
import phoneImage2 from '../adv.png'; // Adjust the path to your image

const Advantages = () => {
  return (
    <section id="advantages-section" className="p-6 md:p-12 bg-white dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto text-center"> {/* Center the content */}
        <h2 className="text-3xl font-bold mb-8 font-display">Why Choose Uifry?</h2>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:pr-8 md:order-2">
            <h3 className="text-2xl font-semibold mb-4 flex items-center font-display">
              <FontAwesomeIcon icon={faBell} className="text-red-500 mr-2" />
              Clever Notifications
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 font-display">
              Arou at dictum sapien, mollis, vulputate sit id accumsan, ultrices. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 md:order-1 flex justify-center">
            <img src={phoneImage1} alt="Phone showing notifications" className="w-full md:max-w-md" />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 md:pr-8 md:order-1 flex justify-center">
            <img src={phoneImage2} alt="Phone customization options" className="w-full md:max-w-md" />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 md:order-2">
            <h3 className="text-2xl font-semibold mb-4 flex items-center font-display">
              <FontAwesomeIcon icon={faCogs} className="text-red-500 mr-2" />
              Fully Customizable
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 font-display">
              Arou at dictum sapien, mollis, vulputate sit id accumsan, ultrices. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;

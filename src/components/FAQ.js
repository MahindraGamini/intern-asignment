import React from 'react';
import Frame from '../Frame.png';

const FAQ = () => {
  return (
    <div className="p-6 md:p-12 dark:bg-gray-800 dark:text-white font-display">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="max-w-screen-md mx-auto">
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-red-500 font-display">the best financial accounting app ever!</h4>
          <p className="text-gray-600 dark:text-lime-300 font-display">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."</p>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-red-500 font-display">the best financial accounting app ever!</h4>
          <p className="text-gray-600 dark:text-lime-300 font-display">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-red-500 font-display">the best financial accounting app ever!</h4>
          <p className="text-gray-600 dark:text-lime-300 font-display">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img src={Frame} alt="Frame" className="mt-8" />
      </div>
    </div>
  );
};

export default FAQ;

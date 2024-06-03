import React from 'react';
import userImage1 from '../user1.png'; // Replace with actual paths to user images
import userImage2 from '../user2.png';
import userImage3 from '../user3.png';

const Testimonials = () => {
  return (
    <div className="p-6 md:p-12 dark:bg-gray-800 dark:text-white font-display">
      <h2 className="text-3xl font-bold mb-8 text-center font-display">What Our Users Say About Us</h2>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="mb-8 md:mb-0 text-center">
          <img src={userImage1} alt="User 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <p className="text-gray-600 dark:text-lime-300">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.<br /><br />
            Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
          </p>
          <p className="font-semibold">- User 1</p>
        </div>
        <div className="mb-8 md:mb-0 text-center">
          <img src={userImage2} alt="User 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <p className="text-gray-600 dark:text-lime-300">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.<br /><br />
            Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
          </p>
          <p className="font-semibold">- User 2</p>
        </div>
        <div className="text-center">
          <img src={userImage3} alt="User 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <p className="text-gray-600 dark:text-lime-300">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.<br /><br />
            Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
          </p>
          <p className="font-semibold">- User 3</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

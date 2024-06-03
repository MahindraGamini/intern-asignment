import React from 'react';
import { Link } from 'react-router-dom';
import Group from '../Group.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="p-6 md:p-12 bg-gray-200 dark:bg-gray-700 dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        <div className="flex flex-col items-start font-display">
          <div className="flex items-center mb-2">
            <img src={Group} alt='Icon' className="mr-2"/>
            <span className="font-bold">uiFry</span>
          </div>
          <div className="flex items-center mb-1">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-red-400" />
            <span className="font-display">Help@Frybix.Com</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-red-400" />
            <span className="font-display">+1234 456 678 89</span>
          </div>
        </div>

        <div className="flex flex-col space-y-1 font-display">
          <h2 className="font-bold">Links</h2>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/bookings" className="hover:underline">Bookings</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
        </div>

        <div className="flex flex-col space-y-1 font-display">
          <h2 className="font-bold">Legal</h2>
          <Link to="/terms" className="hover:underline">Terms Of Use</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
        </div>

        <div className="flex flex-col space-y-1 font-display">
          <h2 className="font-bold">Product</h2>
          <Link to="/tour" className="hover:underline">Take Tour</Link>
          <Link to="/live-chat" className="hover:underline">Live Chat</Link>
          <Link to="/reviews" className="hover:underline">Reviews</Link>
        </div>

        <div className="flex flex-col space-y-1 font-display">
          <h2 className="font-bold">Newsletter</h2>
          <span className="font-display">Stay Up To Date</span>
          <div className="flex items-center mt-2">
            <input type='email' placeholder='Your email' className='h-10 px-3 mr-2 font-display' />
            <button className="px-6 py-3 bg-black text-white rounded font-display">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8 border-t border-pink-500 pt-4 font-display">
        <p className="text-gray-600 dark:text-gray-300 font-display">© Copyright 2022 Uifry.Com All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

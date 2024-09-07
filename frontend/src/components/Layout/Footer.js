import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=" min-h-screen">

      {/* Eighth Section Start */}
      <div className="py-16 px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto space-y-4 md:space-y-0 md:space-x-4 ">

          {/* Content Section */}
          <div className="flex-1 p-6 bg-white bg-opacity-80 rounded-md flex flex-col items-center justify-center mb-4 md:mb-0 md:w-2/4 mx-5">
            <h3 className="text-lg md:text-2xl font-inter font-bold text-black mb-2 text-center">Blue Cloud Publishers</h3>
            <div className="w-40 mx-auto border-b-2 border-yellow-500 mb-8 rounded-lg"></div>
            <p className="text-base sm:text-base md:text-lg text-gray-600 leading-relaxed font-inter mb-4 md:max-w-prose">
              Blue Cloud Publishers stands as the premier hub for authors seeking to self-publish their books, blending exceptional services with cutting-edge technology. With our unwavering commitment to quality and innovation, BlueCloud Publishers emerges as the definitive choice for authors embarking on their independent publishing journey. Engage in insightful conversations with our team of publishing experts, tailor your perfect publishing strategy, and watch as your literary aspirations soar above the rest. Take the next step and discover the BlueCloud Publishers difference, where your publishing dreams become a captivating reality.
            </p>
          </div>


          {/* Links Section */}
          <div className="flex-1 p-6 bg-white bg-opacity-80 rounded-md flex flex-col  items-center mb-4 md:mb-0">
            <div className="flex flex-col space-y-4 items-center">
              <h3 className="text-black font-inter font-extrabold text-2xl text-center -mb-2">Quick Links</h3>
              <div className="w-24 mx-auto border-b-2 border-yellow-500 mb-12 rounded-lg "></div>
              <Link to='/' className='text-black font-inter text-lg hover:underline hover:text-blue-950'>Home</Link>
              <Link to='/store' className='text-black font-inter text-lg hover:underline hover:text-blue-950'>Stores</Link>
              <Link to='/' className='text-black font-inter text-lg hover:underline hover:text-blue-950'>Packages</Link>
              <Link to='/testimonial' className='text-black font-inter text-lg hover:underline hover:text-blue-950'>Testimonials</Link>
              <Link to='/about-us' className='text-black font-inter text-lg hover:underline hover:text-blue-950'>About</Link>
              <Link to='/contact-us' className='text-black font-inter text-lg hover:underline hover:text-blue-950'>Contact</Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className=" p-6 bg-white bg-opacity-80 rounded-md flex flex-col items-center ">
            <div className="flex flex-col space-y-4 items-center">
              <h3 className="text-black font-inter font-bold text-2xl text-center -mb-2">Contact Us</h3>
              <div className="w-24 mx-auto border-b-2 border-yellow-500 mb-6 rounded-lg"></div>
              <a href="mailto:Bluecloudpublishers@gmail.com" className='text-black text-base hover:underline text-center mt-4 font-inter'>Bluecloudpublishers@gmail.com</a>
              <a href="tel:6393878824" className='text-black text-base hover:underline text-center font-inter'>+916393878824</a>
            </div>
            {/* Social Media Section */}
            <div className="flex flex-col space-y-2 mt-14 items-center">
              <h4 className="text-black font-serif font-bold text-2xl text-center -mb-1">Follow Us</h4>
              <div className="w-24 mx-auto border-b-2 border-yellow-500 mb-8 rounded-lg"></div>
              <div className='flex space-x-2 mt-4'>
                <a href="https://www.instagram.com/bluecloudpublishers/" target="_blank" rel="noopener noreferrer" className='text-black text-2xl'><FaInstagramSquare /></a>
                <a href="https://wa.me/message/4H6KMWAXFACFA1" target="_blank" rel="noopener noreferrer" className='text-black text-2xl'><FaWhatsappSquare /></a>
                <a href="https://www.facebook.com/bluecloudpublishers" target="_blank" rel="noopener noreferrer" className='text-black text-2xl'><FaFacebookSquare /></a>
                <a href="https://www.linkedin.com/company/blue-cloud-publishers/" target="_blank" rel="noopener noreferrer" className='text-black text-2xl'><FaLinkedin /></a>
                <a href="https://x.com/BCloudPublisher" target="_blank" rel="noopener noreferrer" className='text-black text-2xl'><FaSquareXTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Eighth Section End */}

      {/* footer Start */}
      <div className="py-4 px-4 flex flex-col md:flex-row w-full max-w-full mx-auto items-center justify-center bg-black mb-0">
        {/* Scroll to Top Button */}
        <a href="#top" className="text-white text-2xl hover:text-yellow-500 mb-2 md:mb-0 mr-20 items-center">
          <FaArrowCircleUp />
        </a>



        {/* Footer Links */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-2 md:space-y-0 text-center font-inter  items-center">
          <p className="text-white text-base md:text-lg my-4 font-inter">© 2024 Blue Cloud Publishers.</p>
          <p className="text-white text-base md:text-lg my-4 font-inter">All Rights Reserved.</p>
          <p className="text-white text-base md:text-lg"><Link to='/privacy-policy'>Privacy Policy</Link></p>
          <p className="text-white text-base md:text-lg"><Link to='/terms-and-conditions'>Terms and Conditions</Link></p>
          <p className="text-white text-base md:text-lg"><Link to='/cancellation-and-refund'>Cancellation and Refund</Link></p>
          <p className="text-white text-base md:text-lg"><Link to='/shipping-and-delivery'>Shipping and Delivery</Link></p>
        </div>
      </div>
      {/* footer End */}


    </div>
  );
};

export default Footer;

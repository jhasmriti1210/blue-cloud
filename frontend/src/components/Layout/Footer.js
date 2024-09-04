import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="./">
        <FaArrowCircleUp />
      </a>

      <p className='link'>&copy;2024 Blue Cloud Publishers. All rights reserved.</p>
      <p className='link'><Link to='/privacy-policy' className='link' >Privacy Policy</Link></p>
      <p className='linked'><Link to='/terms-and-conditions' className='link'>Terms and Conditions</Link></p>
      <p className='linked'><Link to='/cancellation-and-refund' className='link'>Cancellation and Refund</Link></p>
      <p className='linked'><Link to='/shipping-and-delivery' className='link'>Shipping and Delivery</Link></p>
    </footer>
  );
};







export default Footer;

/*import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Layout from "../components/Layout/Layout";
import { FaExternalLinkAlt, FaWhatsapp } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import royalty from '../images/royalty.png';
import design from '../images/design.png';
import bg from '../images/bg.jpg';
import expert from '../images/expert.png';
import globally from '../images/globally.jpg';
import circle from '../images/circle.png';
import page from '../images/page.png';
import story from '../images/story.png';
import update from '../images/update.png';
import trophy from '../images/trophy.png';
import girl from '../images/girl.png';
import { FaBookOpen, FaArchway, FaBook, FaCalendarCheck, FaHandshake } from "react-icons/fa";
import { MdAddLocation } from "react-icons/md";
import "../styles/Homepage.css";


const HomePage = () => {
  const [auth, setAuth] = useAuth();

  function scrollLeft() {
    const testimonials = document.querySelector('.testimonials');
    testimonials.scrollBy({
      left: -300, // Adjust the scroll amount as needed
      behavior: 'smooth',
    });
  }

  function scrollRight() {
    const testimonials = document.querySelector('.testimonials');
    testimonials.scrollBy({
      left: 300, // Adjust the scroll amount as needed
      behavior: 'smooth',
    });
  }


  return (

    <Layout className="container-fluid d-flex flex-column align-items-center my-16">
      {/* First Section start 
      <div className="fixed-section section1 w-100">
        <div className="row g-0">
          <img className="w-fit" src={bg} alt="Book cover" />
          {/* Content Column (Left Side on Large Screens) 
          <div className="col-md-6 d-none d-md-block content-section1">
            <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative book-container">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 publishing-title">Publishing Made Easy!</strong>
                <h3 className="mt-4 publishing-subtitle">Bringing your words to life with</h3>
                <h3 className="mb-0 publishing-subtitle1">expert guidance & <span className='main'>personalized </span><div className='main1'>publishing</div></h3>
              </div>
            </div>
          </div>

          {/* Image Column (Right Side on Large Screens) 
          <div className="col-md-6 d-none d-md-block image-section">
            <img className="bd-placeholder-img book-image img-fluid" src={story} alt="Book cover" />
          </div>

          {/* Content Column (Full Width on Small Screens) 
          <div className="col-12 d-md-none content-section1">
            <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative book-container1">
              <div className="col p-4 d-flex flex-column position-static">
                <h2 className="d-inline-block mb-2 publishing-title1">Publishing Made Easy!</h2>
                <h3 className="mt-4 publishing-subtitle0">Bringing your words to life </h3>
                <h3 className=" mb-0 publishing-subtitle1">with expert guidance &<span>personalized publishing</span></h3>
              </div>
            </div>
          </div>



        </div>
      </div>
      {/* First Section end 

      {/* Second Section start 
      <div className="fixed-section section2 w-100">
        <div className="row g-0">

          {/* Content Column (Left Side on Large Screens) 
          <div className="col-md-6 d-none d-md-block content-section2">
            <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative book-container">
              <div className="col p-4 d-flex flex-column position-static">
                <p className='head'>Turn your ideas into professional quality books, magazines or ebooks.</p>
                <div className='row1'>
                  <div className='one'>
                    <FaBookOpen className='icon' />
                    <p className='p1'>1k+ Books Published</p>
                  </div>
                  <div className='two'>
                    <FaArchway className='icon' />
                    <p className='p2'>50k+ Community</p>
                  </div>
                  <div className='three'>
                    <FaBook className='icon' />
                    <p className='p3'>5k+ Authors</p>
                  </div>
                </div>
                <div className='row2'>
                  <div className='one'>
                    <FaCalendarCheck className='icon' />
                    <p className='p1'>8+ Years Experience</p>
                  </div>
                  <div className='two'>
                    <FaHandshake className='icon2' />
                    <p className='p2'>50+ Members</p>
                  </div>
                  <div className='three'>
                    <MdAddLocation className='icon3' />
                    <p className='p3'>3 Locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column (Full Width on Small Screens) 
<div className="col-12 d-md-none content-section2">
  <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative book-container">
    <div className="col p-4 d-flex flex-column position-static">
      <p className='head'>Turn your ideas into professional quality books, magazines or ebooks.</p>
      <div className='row1'>
        <div className='one'>
          <FaBookOpen className='svg' />
          <p className='p1'>1k+ Books Published</p>
        </div>
        <div className='two'>
          <FaArchway className='svg' />
          <p className='p2'>50k+ Community</p>
        </div>
        <div className='three'>
          <FaBook className='svg' />
          <p className='p3'>5k+ Authors</p>
        </div>
      </div>
      <div className='row2'>
        <div className='one'>
          <FaCalendarCheck className='svg' />
          <p>8+ Years Experience</p>
        </div>
        <div className='two'>
          <FaHandshake className='svg' />
          <p>50+ Team Members</p>
        </div>
        <div className='three'>
          <MdAddLocation className='svg' />
          <p>5 Locations</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div >
      </div >
  {/* Second Section end 

{/* Third Section start 
<div className="fixed-section section3 w-100">
  <div className="row g-0">

    {/* Content Column (Left Side on Large Screens) 
    <div className="col-md-6 d-none d-md-block content-section3">
      <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-350 position-relative center">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className='ranked'>We are ranked the best book Publishers </h3>
          <h3 className='ranked1'>in India for a reason.</h3>
          <p className='trusted'>Get published with the most trusted book publishers in India. Start your book publishing process by selecting a Publishing Package or create a customized one. With our team of experts, publish your Paperback, E-Book; sell globally in 140+ countries, earning 100% of the profit.</p>
        </div>
      </div>
    </div>

    {/* Content Column (Full Width on Small Screens) 
    <div className="col-12 d-md-none content-section3">
      <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-350 position-relative">
        <div className="col p-4 d-flex flex-column position-static heading">
          <h3 className='ranked'>We are ranked the best book Publishers in India for a reason.</h3>
          <p>Get published with the most trusted book publishers in India. Start your book publishing process by selecting a Publishing Package or create a customized one. With our team of experts, publish your Paperback, E-Book; sell globally in 140+ countries, earning 100% of the profit.</p>
        </div>
      </div>
    </div>

  </div>
</div>
{/* Third Section end 

{/* Fourth Section start 
<div className="fixed-section section4 w-100">
  <div className="row g-0">

    {/* Content Column (Large Screens) 
    <div className="col-md-6 d-none d-md-block content-section4">
      <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-350 shadow-lg position-relative center-container">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className='ready'>Ready to publish your book? Sign Up Today For Amazing Deals!</h3>
          <form className='contact'>
            <div className="form-group">
              <input type="text" className="form-control rounded-input" id="fullName" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control rounded-input" id="emailAddress" placeholder="example@example.com" />
            </div>
            <div className="form-group">
              <input type="tel" className="form-control rounded-input" id="phoneNumber" placeholder="123-456-7890" />
            </div>
            <div className="form-group">
              <button type="submit" className="custom-button">Publish Your Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    {/* Content Column (Full Width on Small Screens) 
    <div className="col-12 d-md-none content-section4">
      <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-350 shadow-lg position-relative center-container">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className='ready'>Ready to publish your book? Sign Up Today For Amazing Deals!</h3>
          <form className='form-row'>
            <div className="form-group col-12">
              <input type="text" className="form-control rounded-input" id="fullName" placeholder="John Doe" />
            </div>
            <div className="form-group col-12">
              <input type="email" className="form-control rounded-input" id="emailAddress" placeholder="example@example.com" />
            </div>
            <div className="form-group col-12">
              <input type="tel" className="form-control rounded-input" id="phoneNumber" placeholder="123-456-7890" />
            </div>
            <div className="form-group col-12">
              <button type="submit" className="custom-button">Publish Your Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</div>
{/* Fourth Section end 



{/* Fifth Section start
<div className="fixed-section section5">
  <div className="row w-100">
    {/* Content Column (Left Side on Large Screens) 
    <div className="col-md-6 d-md-block d-none content-section5">
      <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <h2 className='right'>Why We are the</h2>
        <h2 className='right'>"Right Choice?"</h2>
        {/* Image 0 
        <div className="col p-4 d-flex flex-column position-static content5-container1">
          <div>
            <h3 className='royalty'>100% Royalty</h3>
            <p className='payouts'>Earn maximum profits from your book sales with monthly payouts, ensuring you benefit fully from your hard work as an author.</p>
          </div>
          <img src={royalty} alt="royalty-img" id='image' className='royalty-img' />
        </div>
        {/* Image 1 
        <div className="col p-4 d-flex flex-column position-static content5-container2">
          <img src={design} alt="design-img" id='image' className='design-img' />
          <div>
            <h3 className='royalty1'>Skilled Artists</h3>
            <p className='payouts1'>Let our skilled team handle your book's formatting, beautification, and cover design with precision and creativity.</p>
          </div>
        </div>
        {/* Image 2 
        <div className="col p-4 d-flex flex-column position-static content5-container3">
          <div>
            <h3 className='royalty2'>Global Book Sales</h3>
            <p className='payouts2'>Expand your audience by 50x and maximize your earnings with our global reader outreach services.</p>
          </div>
          <img src={globally} alt="globally-img" id='image' className='globally-img' />
        </div>
        {/* Image 3 
        <div className="col p-4 d-flex flex-column position-static content5-container4">
          <img src={expert} alt="expert-img" id='image' className='expert-img' />
          <div>
            <h3 className='royalty3'>Publishing Guidance</h3>
            <p className='payouts3'>Consult with a seasoned expert to address all your book publishing inquiries and challenges.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Content Column (Small Screens) 
    <div className="col-12 d-md-none content-section5">
      <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <h2 className='right'>Why We are the</h2>
        <h2 className='right'>"Right Choice?"</h2>
        {/* Image 0 
        <div className="col p-4 d-flex flex-column position-static content5-container1">
          <div>
            <h3 className='royalty'>100% Royalty</h3>
            <p className='payouts'>Earn maximum profits from your book sales with monthly payouts, ensuring you benefit fully from your hard work as an author.</p>
          </div>
          <img src={royalty} alt="royalty-img" className='royalty-img' />
        </div>
        {/* Image 1 
        <div className="col p-4 d-flex flex-column position-static content5-container2">
          <div>
            <h3 className='royalty1'>Skilled Artists</h3>
            <p className='payouts1'>Let our skilled team handle your book's formatting, beautification, and cover design with precision and creativity.</p>
          </div>
          <img src={design} alt="royalty-img" className='design-img' />
        </div>
        {/* Image 2 
        <div className="col p-4 d-flex flex-column position-static content5-container3">
          <div>
            <h3 className='royalty2'>Global Book Sales</h3>
            <p className='payouts2'>Expand your audience by 50x and maximize your earnings with our global reader outreach services.</p>
          </div>
          <img src={globally} alt="globally-img" className='globally-img' />
        </div>
        {/* Image 3 }
        <div className="col p-4 d-flex flex-column position-static content5-container4">
          <div>
            <h3 className='royalty3'>Publishing Guidance</h3>
            <p className='payouts3'>Consult with a seasoned expert to address all your book publishing inquiries and challenges.</p>
          </div>
          <img src={expert} alt="expert-img" className='expert-img' />
        </div>
      </div>
    </div>
  </div>
</div>
{/*fifth section en }

{/* sixth Section start }
< div className="fixed-section section6" >
  <div className="row w-100">
    {/* Content Column for Large Screens }
    <div className="col-md-6 d-md-block d-none content-section6">
      <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <div className='bgblue'>
            <div className='heading'>
              <h3 className='process'>Book Publishing Process</h3>
            </div>
            <div className='images-container'>
              <div className='onebg'>
                <img src={page} alt="page" />
                <h5>Choose a Package</h5>
                <p className='para'>Choose a package that best suits your publishing needs. All our packages are fully customizable.</p>
              </div>
              <div className='divider'></div>
              <div className='twobg'>
                <img src={update} alt="update" />
                <h5>Submit your Content</h5>
                <p className='para'>Submit your book content according to the guidelines provided. Ensure all necessary elements are included.</p>
              </div>
              <div className='divider'></div>
              <div className='threebg'>
                <img src={circle} alt="circle" />
                <h5>Keep Updated</h5>
                <p className='para'>Stay informed about the status of your book throughout the publishing process. Receive regular updates from our team.</p>
              </div>
              <div className='divider'></div>
              <div className='fourbg'>
                <img src={trophy} alt="trophy" />
                <h5>Publish in 30 Days</h5>
                <p className='para'>Experience quick and efficient publishing. Your book will be ready for sale within 30 days from submission.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Content Column for Small Screens }
    <div className="col-12 d-md-none content-section6">
      <div className='bgblue'>
        <div className='heading'>
          <h3 className='process'>Book Publishing Process</h3>
        </div>
        <div className='images-container'>
          <div className='onebg'>
            <img src={page} alt="page" />
            <h5>Choose a Package</h5>
            <p className='para'>Choose a package that best suits your publishing needs. All our packages are fully customizable.</p>
          </div>
          <div className='onebg'>
            <img src={update} alt="update" />
            <h5>Submit your Content</h5>
            <p className='para'>Submit your book content according to the guidelines provided. Ensure all necessary elements are included.</p>
          </div>
          <div className='onebg'>
            <img src={circle} alt="circle" />
            <h5>Keep Updated</h5>
            <p className='para'>Stay informed about the status of your book throughout the publishing process. Receive regular updates from our team.</p>
          </div>
          <div className='onebg'>
            <img src={trophy} alt="trophy" />
            <h5>Publish in 30 Days</h5>
            <p className='para'>Experience quick and efficient publishing. Your book will be ready for sale within 30 days from submission.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div >
{/*sixth section end }

{/* seventh Section start }
<div className="fixed-section section7">
  <div className="row w-100">
    {/* Content Column (Left Side on Large Screens) }
    <div className="col-md-6 d-md-block d-none content-section7">
      <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">

        {/* Image 1 }
        <div className="col p-4 d-flex flex-row position-static content7-container">
          <div className='imagesec'>
            <img src={girl} alt="girl-img" id='image' className='girl-img' />
          </div>
          <div className='contentsec'>
            <h3 className='relax'>Sit Back and Relax!</h3>
            <p className='BCP'>Welcome to Blue Cloud Publishers, your premier partner in book publishing. Serving authors worldwide, we are dedicated to upholding trust and delivering exceptional quality in every project we undertake.</p>

            <p className='BCP'>At Blue Cloud Publishers, our team of seasoned professionals brings precise knowledge and extensive experience to ensure a smooth and secure publishing process for every author. We prioritize transparency, keeping authors informed at every step and fostering trusting relationships built on integrity.</p>

            <p className='BCP'>Relax knowing that at Blue Cloud Publishers, your vision is our priority. Join us and experience a publishing journey defined by excellence and support.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Content for Small Screens }
  <div className="col-12 d-md-none content-section7-sm">
    <div className="d-flex flex-column content7-container-sm">
      <div className="imagesec-sm">
        <img src={girl} alt="girl-img" className="girl-img-sm" />
      </div>
      <div className="contentsec-sm">
        <h3 className="relax-sm">Sit Back and Relax!</h3>
        <p className="BCP-sm">
          Welcome to Blue Cloud Publishers, your premier partner in book publishing. Serving authors worldwide, we are dedicated to upholding trust and delivering exceptional quality in every project we undertake.
        </p>
        <p className="BCP-sm">
          At Blue Cloud Publishers, our team of seasoned professionals brings precise knowledge and extensive experience to ensure a smooth and secure publishing process for every author. We prioritize transparency, keeping authors informed at every step and fostering trusting relationships built on integrity.
        </p>
        <p className="BCP-sm">
          Relax knowing that at Blue Cloud Publishers, your vision is our priority. Join us and experience a publishing journey defined by excellence and support.
        </p>
      </div>
    </div>
  </div>
</div>
{/*seventh section end }


{/* Eighth Section Start  }

<div className="fixed-section section8">
  <div className="row w-100">

    {/* Content Column (Left Side on Large Screens) }
    <div className="col-md-6 d-md-block d-none content-section8">
      <h3>We're biased... Read what our authors say</h3>
      <div className="testimonials">
        {/* Testimonial 1 }
        <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative test">
          <div className="Tcont">
            <h3>Syed Nosheen</h3>
            <p>
              I have found this very interesting. Being a student, it becomes so easy to trust everything that leads to your success. I have submitted three poems of my own. Let's see the result. But what I have wondered the most is this platform, which gives students a stage, a medium to showcase their talent.
            </p>
            <a href="https://g.co/kgs/D7anz3T" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="link" />
            </a>
          </div>
        </div>

        {/* Testimonial 2 }
        <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative test">
          <div className="Tcont">
            <h3>Ayesha Ariff</h3>
            <p>
              Good Evening everyone, this is the 2nd time I am participating with Blue Cloud Publication. This platform honors most of the authors. It is a pleasure to work with them. I found most people of this organization are humble and well-mannered.
            </p>
            <a href="https://g.co/kgs/D7anz3T" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="link" />
            </a>
          </div>
        </div>

        {/* Testimonial 3 }
        <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative test">
          <div className="Tcont">
            <h3>Disha Patwa</h3>
            <p>
              I really felt very happy. It's a free website with no hidden charges. It's a good platform to feel motivated. It's really a good platform for budding writers like us. Great work. Nice Publication. Thank you!
            </p>
            <a href="https://g.co/kgs/D7anz3T" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="link" />
            </a>
          </div>
        </div>

        {/* Add more testimonials here if needed }

        {/* Right Arrow Button }
        <button className="arrow-right" onClick={scrollRight}>&#8250;</button>
      </div>
    </div>

    {/* Content Column (Right Side on Small Screens) }
    <div className="col-12 d-md-none content-section8-sm">
      <h3>Testimonials</h3>
      <div className="testimonials">
        {/* Testimonial 1 }
        <div className="row g-0 rounded mb-4 shadow-lg position-relative test-sm">
          <div className="Tcont">
            <h3>Syed Nosheen</h3>
            <p>
              I have found this very interesting. Being a student, it becomes so easy to trust everything that leads to your success. I have submitted three poems of my own. Let's see the result. But what I have wondered the most is this platform, which gives students a stage, a medium to showcase their talent.
            </p>
            <a href="https://g.co/kgs/D7anz3T" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="link" />
            </a>
          </div>
        </div>

        {/* Testimonial 2 }
        <div className="row g-0 rounded overflow-hidden mb-4 shadow-lg position-relative test-sm">
          <div className="Tcont">
            <h3>Ayesha Ariff</h3>
            <p>
              Good Evening everyone, this is the 2nd time I am participating with Blue Cloud Publication. This platform honors most of the authors. It is a pleasure to work with them. I found most people of this organization are humble and well-mannered.
            </p>
            <a href="https://g.co/kgs/D7anz3T" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="link" />
            </a>
          </div>
        </div>

        {/* Testimonial 3 }
        <div className="row g-0 rounded overflow-hidden mb-4 shadow-lg position-relative test-sm">
          <div className="Tcont">
            <h3>Disha Patwa</h3>
            <p>
              I really felt very happy. It's a free website with no hidden charges. It's a good platform to feel motivated. It's really a good platform for budding writers like us. Great work. Nice Publication. Thank you!
            </p>
            <a href="https://g.co/kgs/D7anz3T" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="link" />
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

{/* Eighth Section End  }



{/* Ninth Section start }
<div className="fixed-section section9">
  <div className="row w-100">
    {/* Content Column (Left Side on Large Screens) }
    <div className="col-md-6 d-md-block d-none content-section9">

      <div className='lastcontent'>

        <div className="row g-0 rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative last1">

          <div className='aboutBCP'>
            <h3>Blue Cloud Publishers</h3>
            <p>Blue Cloud Publishers stands as the premier hub for authors seeking to self-publish their books, blending exceptional services with cutting-edge technology. With our unwavering commitment to quality and innovation, BlueCloud Publishers emerges as the definitive choice for authors embarking on their independent publishing journey. Engage in insightful conversations with our team of publishing experts, tailor your perfect publishing strategy, and watch as your literary aspirations soar above the rest. Take the next step and discover the BlueCloud Publishers difference, where your publishing dreams become a captivating reality.</p>

            <div className='social'>
              <a href="https://www.instagram.com/bluecloudpublishers/" target="_blank"><FaInstagramSquare className='text-black w-5 h-5 ' /></a>
              <a href="https://wa.me/message/4H6KMWAXFACFA1" target="_blank"><FaWhatsappSquare className='text-black w-5 h-5 ml-2' /></a>
              <a href="https://www.facebook.com/bluecloudpublishers" target="_blank"><FaFacebookSquare className='text-black w-5 h-5 ml-2' /></a>
              <a href="https://www.linkedin.com/company/blue-cloud-publishers/" target="_blank"><FaLinkedin className='text-black w-5 h-5 ml-2' /></a>
              <a href="https://x.com/BCloudPublisher" target="_blank"><FaSquareXTwitter className='text-black w-5 h-5 ml-2' /></a>
            </div>
          </div>
        </div>

        <div className="row g-0 rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative last2">

          <div className='contactBCP'>
            <div className='Links'>
              <h3>Quick Links</h3>

              <Link to='/' className='Linking'>Home</Link>
              <Link to='/store' className='Linking'>Stores</Link>
              <Link to='/testimonial' className='Linking'>Testimonials</Link>
              <Link to='/aboutus' className='Linking'>About</Link>
              <Link to='/contact' className='Linking'>Contact</Link>
            </div>



            <div className='info'>
              <h3>Contact</h3>
              <a href="mailto: Bluecloudpublishers@gmail.com" target="_blank">Bluecloudpublishers@gmail.com</a>
              <a href="tel:6393878824" target="_blank">+916393878824</a>




            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* ninth Section End  }

{/* footer Section start }
<div className="fixed-section section10">
  <div className="row w-100">
    {/* Content Column (Left Side on Large Screens) }
    <div className="col-md-6 d-md-block d-none content-section10">
      <div className="row g-0 rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative ">

        <div className='footer'>
          <a href="./" ><FaArrowCircleUp /></a>
          <p className='link'>&copy;2024 Blue Cloud Publishers. All rights reserved.</p>
          <p className='linked'><Link to='/privacy-policy' className='link' >Privacy Policy</Link></p>
          <p className='linked'><Link to='/terms-and-conditions' className='link'>Terms and Conditions</Link></p>
          <p className='linked'><Link to='/cancellation-and-refund' className='link'>Cancellation and Refund</Link></p>
          <p className='linked'><Link to='/shipping-and-delivery' className='link'>Shipping and Delivery</Link></p>
        </div>

      </div>
    </div>

    {/* Content Column (Left Side on Small Screens) }
    <div className="col-12 d-md-none content-section10-sm">
      <div className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative footer">

        <p>&copy;2024 Blue Cloud Publishers. All rights reserved.</p>
        <div className="col-12 mb-3 importentinfo">
          <p className='linked'><Link to='/privacy-policy' className='linked1' >Privacy Policy</Link></p>
          <p className='linked'><Link to='/terms-and-conditions' className='linked1'>Terms and Conditions</Link></p>
          <p className='linked'><Link to='/cancellation-and-refund' className='linked1'>Cancellation and Refund</Link></p>
          <p className='linked'><Link to='/shipping-and-delivery' className='linked1'>Shipping and Delivery</Link></p>
        </div>
        <div className='info'>
          <h3>Contact Us :</h3>
          <a href="tel:6393878824" target="_blank">+916393878824</a>
          <a href="mailto:Bluecloudpublishers@gmail.com" target="_blank">Bluecloudpublishers@gmail.com</a>
        </div>

        <div className='socialmedia'>
          <h3>Follow Us :</h3>
          <div className='social'>
            <a href="https://www.instagram.com/bluecloudpublishers/" target="_blank">
              <FaInstagramSquare />
            </a>
            <a href="https://wa.me/message/4H6KMWAXFACFA1" target="_blank">
              <FaWhatsappSquare />
            </a>
            <a href="https://www.facebook.com/bluecloudpublishers" target="_blank">
              <FaFacebookSquare />
            </a>
            <a href="https://www.linkedin.com/company/blue-cloud-publishers/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://x.com/BCloudPublisher" target="_blank">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>







  </div>
</div>
{/*footer section end }









    </Layout >

  );

}

export default HomePage;*/


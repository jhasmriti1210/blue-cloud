import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Layout from "../components/Layout/Layout";
import { FaExternalLinkAlt, FaWhatsapp } from "react-icons/fa";
import royalty from '../images/royalty.png';
import expert from '../images/expert.png';
import globally from '../images/globally.avif';
import skilled from '../images/skilled.png';
import circle from '../images/circle.png';
import page from '../images/page.png';
import story from '../images/story.png';
import update from '../images/update.png';
import trophy from '../images/trophy.png';
import girl from '../images/girl.png';
import bg from '../images/bg2.png';
import home from "../images/home.png"
import { FaBookOpen, FaArchway, FaBook, FaCalendarCheck, FaHandshake } from "react-icons/fa";
import { MdAddLocation } from "react-icons/md";
import "../styles/Homepage.css";



const HomePage = () => {




    return (
        <Layout>
            <div>
                <div className="min-h-screen justify-center overflow-x-hidden">

                    {/* First Section start */}
                    <div className="flex flex-col md:flex-row container px-4 py-3 md:py-28 mx-auto">

                        {/* Content Section */}
                        <div className="flex flex-col md:flex-col md:items-center md:w-8/12 lg:w-6/12 md:ml-12 lg:ml-16 mt-4 md:mt-16">

                            <div className="flex flex-col items-center md:items-start md:-ml-48">
                                <strong className="text-xl md:text-2xl text-black font-inter md:text-white lg:font-bold py-2 md:py-4 md:font-serif text-center md:text-start">
                                    Publishing Made Easy!
                                </strong>
                                <h3 className="text-2xl md:text-3xl text-black md:text-white font-bold mt-3 md:mt-6 font-serif text-center md:text-start">
                                    Publish your best seller at
                                </h3>
                                <h3 className="text-2xl md:text-3xl text-black md:text-white font-bold mb-3 font-serif text-center md:text-start">
                                    affordable prices in 3 days
                                </h3>
                                <h3 className="text-xl md:text-3xl text-blue-800 font-bold font-serif text-center md:text-start">
                                    Your Words || We Decorate
                                </h3>
                                <h3 className="text-xl md:text-3xl text-blue-800 font-bold font-serif">
                                    We Publish || You Earn
                                </h3>
                            </div>

                            {/* Small screen image */}
                            <img
                                className="block md:hidden relative w-full object-cover mt-5 md:mt-16"
                                src={home}
                                alt="Small screen book cover"
                            />

                            <div className="container px-4 py-12 md:py-1 mx-auto">
                                <div className="flex flex-col md:flex-row md:items-center">
                                    <div className="flex flex-col items-center md:items-start md:w-9/12 lg:w-11/12 -mt-11 md:mt-6 md:ml-12">
                                        <div className='flex flex-col md:flex-row md:items-center gap-4 text-center md:text-left'>
                                            <Link to="/packages" className="bg-yellow-500 text-white py-3 px-4 rounded w-40 text-sm font-bold mx-auto md:mx-0 -ml-4">Start Publishing</Link>
                                            <p className="text-xs md:text-base mb-1 font-inter text-gray-600 md:-mt-6 md:ml-1">
                                                Turn your ideas into professional quality books,
                                            </p>
                                        </div>
                                        <p className="text-xs md:text-base text-center font-inter text-gray-600 md:ml-48 md:text-left md:-mt-7 ">
                                            magazines, or ebooks.
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:-ml-5 font-inter text-center md:text-left">
                                            <div className="flex flex-row items-center p-2 gap-3 justify-center md:justify-start">
                                                <FaBookOpen className="text-3xl md:text-3xl lg:text-2xl text-gray-500" />
                                                <p className="lg:text-base">1k+ Books Published</p>
                                            </div>
                                            <div className="hidden md:flex flex-row items-center p-4 md:-ml-3 rounded-lg gap-3">
                                                <FaArchway className="text-3xl md:text-3xl lg:text-2xl text-gray-500" />
                                                <p className="lg:text-base">50k+ Community</p>
                                            </div>
                                            <div className="flex flex-row items-center p-4 rounded-lg gap-3 justify-center md:justify-start">
                                                <FaBook className="text-3xl md:text-3xl lg:text-2xl text-gray-500" />
                                                <p className="lg:text-base">5k+ Authors</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:-mt-8 md:-ml-8 font-inter text-center md:text-left ">
                                            <div className="hidden md:flex flex-row items-center p-6 rounded-lg gap-2 justify-center md:justify-start">
                                                <FaCalendarCheck className="text-3xl md:text-3xl lg:text-2xl text-gray-500" />
                                                <p className="md:text-base md:ml-3">2+ Years Experience</p>
                                            </div>
                                            <div className="flex flex-row items-center p-6 rounded-lg gap-2 justify-center md:justify-start">
                                                <FaHandshake className="text-4xl md:text-3xl lg:text-2xl text-gray-500 -ml-3 md:ml-1" />
                                                <p className="md:text-base md:ml-3">50+ Members</p>
                                            </div>
                                            <div className="flex flex-row items-center p-6 rounded-lg gap-2 justify-center md:justify-start">
                                                <MdAddLocation className="text-4xl md:text-3xl lg:text-2xl text-gray-500 -ml-3 md:ml-4" />
                                                <p className="md:text-base md:ml-3">3 Locations</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative w-full md:w-4/12 mt-4 md:mt-32 flex-shrink-0">
                            {/* Background gradient */}
                            <div className="absolute hidden md:block inset-0 bg-gradient-to-b from-blue-800 to-blue-950 w-full md:w-[75%] md:h-[80%] -top-2 md:ml-32"></div>

                            {/* Large screen image */}
                            <img
                                className="hidden md:block relative w-48 h-64 md:w-96 md:h-80 lg:w-96 lg:h-auto object-cover mt-20 md:mt-16 md:ml-20 book-image"
                                src={story}
                                alt="Book cover"
                            />


                        </div>
                    </div>
                    {/* First Section end */}



                    {/* Second Section start */}
                    <div className="py-6 md:py-16 px-2 md:px-8 ">
                        <div className="container mx-auto">
                            <div className="flex flex-col  items-center text-center">
                                <div className="max-w-full md:max-w-3/12 font-inter">
                                    <h3 className="text-lg md:text-5xl font-bold text-gray-900 mb-4 -mt-16 md:mt-2">
                                        We are ranked the best book publishers
                                    </h3>
                                    <h3 className="text-lg md:text-5xl font-bold text-gray-900 -mt-4 mb-4">
                                        in India for a reason.
                                    </h3>

                                    <p className="text-base md:text-base text-gray-700 md:ml-20 md:mt-16">
                                        Get published with the most trusted book publishers in India. Start your book publishing process by selecting a Publishing Package or create a </p>
                                    <p className="md:-mt-3 text-base md:text-base text-gray-700 md:ml-20">customized one. With our team of experts, publish your Paperback, E-Book; sell globally in 140+ countries, earning 100% of the profit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Section end */}



                    {/* Third Section start */}
                    <div
                        className="py-16 px-2 md:px-6 bg-blue-950 relative"
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="absolute inset-0 bg-blue-950 opacity-75"></div>
                        <div className="relative container mx-auto" >
                            <div className="flex flex-col items-center text-center">

                                <div className="flex flex-col md:items-center w-full lg:w-full justify-center items-center">
                                    <h3 className="text-white text-2xl md:text-3xl lg:text-3xl md:font-bold mb-6 relative z-10 font-inter flex justify-center items-center">
                                        Ready to publish your book? Sign Up Today For Amazing Deals!
                                    </h3>
                                    <form className="w-full relative z-10  lg:flex lg:justify-center">
                                        <div className="flex flex-col lg:flex-row lg:space-x-4 w-full lg:w-3/4">
                                            <input
                                                type="text"
                                                className="form-control rounded-3xl w-full mb-2 lg:mb-0 lg:w-full text-black"
                                                id="fullName"
                                                placeholder="Full Name"
                                            />
                                            <input
                                                type="email"
                                                className="form-control rounded-3xl w-full mb-2 lg:mb-0 lg:w-full"
                                                id="emailAddress"
                                                placeholder="Email Address"
                                            />
                                            <input
                                                type="tel"
                                                className="form-control rounded-3xl w-full mb-2 lg:mb-0 lg:w-full"
                                                id="phoneNumber"
                                                placeholder="Phone Number"
                                            />
                                            <button
                                                type="submit"
                                                className="custom-button bg-yellow-500 text-black py-2 px-4 rounded-3xl w-full lg:w-full"
                                            >
                                                Publish Your Book
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Third Section end */}



                    {/* Fourth Section start */}
                    <div className="py-16 px-2 md:px-6 relative">
                        <div className="relative container mx-auto">
                            {/* Section Heading */}
                            <div className="flex flex-col items-center text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold">Why We are the</h2>
                                <h2 className="text-3xl md:text-5xl font-bold">"Right Choice?"</h2>
                            </div>

                            {/* Image 0: Content left, Image right */}
                            <div className="flex flex-col md:flex-row items-center justify-between md:items-start text-left md:space-x-8 mb-12">
                                <div className="w-full md:w-5/12 lg:w-4/12 md:ml-16 lg:ml-16 md:mt-0 lg:mt-16">
                                    <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 text-center md:text-left">100% Royalty</h3>
                                    <p className="mb-4 text-xl md:text-2xl lg:text-2xl text-center md:text-left">Earn maximum profits from your book sales with monthly payouts, ensuring you benefit fully from your hard work as an author.</p>
                                </div>
                                <div className="w-full md:w-2/12 lg:w-3/12">
                                    <img src={royalty} alt="royalty-img" className="w-full md:animate-floatImage" />
                                </div>
                            </div>

                            {/* Image 1: Image left, Content right */}
                            <div className="flex flex-col md:flex-row-reverse items-center justify-between md:items-start text-left md:space-x-8 mb-12">
                                <div className="w-full md:w-5/12 lg:w-4/12 md:ml-8 lg:ml-16">
                                    <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2 text-center md:text-left">Skilled Artists</h3>
                                    <p className="mb-4 text-xl md:text-2xl lg:text-2xl text-center md:text-left">Let our skilled team handle your book's formatting, beautification, and cover design with precision and creativity.</p>
                                </div>
                                <div className="w-full md:w-5/12 lg:w-3/12">
                                    <img src={skilled} alt="design-img" className="w-full md:animate-floatImage" />
                                </div>
                            </div>

                            {/* Image 2: Content left, Image right */}
                            <div className="flex flex-col md:flex-row items-center justify-between md:items-start text-left md:space-x-8 mb-12">
                                <div className="w-full md:w-5/12 lg:w-4/12 md:ml-8 lg:ml-16 md:mt-4">
                                    <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2 text-center md:text-left">Global Book Sales</h3>
                                    <p className="mb-4 text-xl md:text-2xl lg:text-2xl text-center md:text-left">Expand your audience by 50x and maximize your earnings with our global reader outreach services.</p>
                                </div>
                                <div className="w-full md:w-2/12 lg:w-3/12">
                                    <img src={globally} alt="globally-img" className="w-full md:animate-floatImage" />
                                </div>
                            </div>

                            {/* Image 3: Image left, Content right */}
                            <div className="flex flex-col md:flex-row-reverse items-center justify-between md:items-start text-left md:space-x-8 mb-12">
                                <div className="w-full md:w-5/12 lg:w-4/12 md:ml-8 lg:ml-16 md:mt-16">
                                    <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2 text-center md:text-left">Publishing Guidance</h3>
                                    <p className="mb-4 text-xl md:text-2xl lg:text-2xl text-center md:text-left">Consult with a seasoned expert to address all your book publishing inquiries and challenges.</p>
                                </div>
                                <div className="w-full md:w-5/12 lg:w-3/12">
                                    <img src={expert} alt="expert-img" className="w-full md:animate-floatImage" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fourth Section end */}



                    {/* Fifth Section start */}
                    <div className="py-16 px-2 md:px-6 relative bg-blue-950 rounded-3xl my-2 mx-12 lg:mx-16 transition-transform duration-500 transform hover:rotate-x-30 hover:rotate-y-30">
                        <div className="relative container mx-auto">
                            <div className="col p-4 flex flex-col justify-center items-center">
                                <div className="flex flex-col items-center">
                                    <div className="mb-8">
                                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center font-inter">
                                            Book Publishing Process
                                        </h3>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-center items-center">

                                        <div className="flex flex-col justify-center items-center m-2 w-48 md:w-56 lg:w-72 ">
                                            <img src={page} alt="page" className="w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 mb-2" />
                                            <h5 className="text-white text-xl font-semibold text-center">Choose a Package</h5>
                                            <p className="text-white text-center mt-1">Choose a package that best suits your publishing needs. All our packages are fully customizable.</p>
                                        </div>
                                        <hr className="w-full md:hidden border-t border-white my-2" />
                                        <hr className="hidden md:block h-full  mx-4 border-t border-white" />

                                        <div className="flex flex-col justify-center items-center m-2 w-48 md:w-60 lg:w-72">
                                            <img src={update} alt="update" className="w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 mb-2" />
                                            <h5 className="text-white text-xl font-semibold text-center">Submit your Content</h5>
                                            <p className="text-white text-center mt-1">Submit your book content according to the guidelines provided. Ensure all necessary elements are included.</p>
                                        </div>
                                        <hr className="w-full md:hidden border-t border-white my-2" />
                                        <hr className="hidden md:block h-full  mx-4 border-t border-white" />


                                        <div className="flex flex-col justify-center items-center m-2 w-48 md:w-60 lg:w-72">
                                            <img src={circle} alt="circle" className="w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 mb-2" />
                                            <h5 className="text-white text-xl font-semibold text-center">Keep Updated</h5>
                                            <p className="text-white text-center mt-1">Stay informed about the status of your book throughout the publishing process.</p>
                                        </div>
                                        <hr className="w-full md:hidden border-t border-white my-2" />
                                        <hr className=" hidden md:block h-full  mx-4 border-t border-white" />


                                        <div className="flex flex-col justify-center items-center m-2 w-48 md:w-60 lg:w-72">
                                            <img src={trophy} alt="trophy" className="w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 mb-2" />
                                            <h5 className="text-white text-xl font-semibold text-center">Published in 3 Days</h5>
                                            <p className="text-white text-center mt-1">Your book will be ready for sale within 30 days from submission.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*fifth section end*/}





                    {/* Sixth Section start */}
                    <div className="py-2 md:py-20 px-2 md:px-6 relative">
                        <div className="relative container mx-auto">
                            {/* Image and Content */}
                            <div className="flex flex-col md:flex-row items-center text-center md:text-left md:justify-center md:space-x-8 mb-12">
                                {/* Image Section */}
                                <div className="flex justify-center w-full md:w-1/2 mt-16">
                                    <img src={girl} alt="girl-img" className="w-40 md:w-[50vh] h-40 md:h-[50vh] image1" />
                                </div>
                                {/* Content Section */}
                                <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start md:mt-12">
                                    <h3 className="text-2xl md:text-4xl font-bold text-black font-serif mb-8 mt-4  text-center md:ml-48 md:text-left ">
                                        Sit Back and Relax!
                                    </h3>
                                    <p className="text-black text-base md:text-lg font-inter mb-4 mx-4 md:mx-8">
                                        Welcome to Blue Cloud Publishers, your premier partner in book publishing. Serving authors worldwide, we are dedicated to upholding trust and delivering exceptional quality in every project we undertake.
                                    </p>
                                    <p className="text-black text-base md:text-lg font-inter mb-4 mx-4 md:mx-8">
                                        At Blue Cloud Publishers, our team of seasoned professionals brings precise knowledge and extensive experience to ensure a smooth and secure publishing process for every author. We prioritize transparency, keeping authors informed at every step and fostering trusting relationships built on integrity.
                                    </p>
                                    <p className="text-black text-base md:text-lg font-inter mb-4 mx-4 md:mx-8">
                                        Relax knowing that at Blue Cloud Publishers, your vision is our priority. Join us and experience a publishing journey defined by excellence and support.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Sixth Section end */}


                    {/* Seventh Section Start */}
                    <div className="py-16 px-4 md:px-6 relative">
                        <div className="relative container mx-auto">
                            {/* Content Section */}
                            <h3 className="text-3xl font-bold font-serif mb-6 text-center">
                                We're biased... Read what our authors say
                            </h3>
                            <div className=" w-56 md:w-96 mx-auto border-b-2 border-yellow-500 mb-6 rounded-md"></div>
                            <div className="relative md:ml-4">
                                <div className="flex flex-row md:ml-4 md:items-center overflow-x-auto gap-8 px-4 py-4 scrollbar-hide ">
                                    {/* Testimonial 1 */}
                                    <div className="flex-shrink-0 w-full md:w-4/12 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
                                        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-white bg-opacity-80">
                                            <h3 className="text-xl font-bold font-serif mb-4">Syed Nosheen</h3>
                                            <p className="text-base font-serif text-gray-600 mb-4">
                                                I have found this very interesting. Being a student, it becomes so easy to trust everything that leads to your success. I have submitted three poems of my own. Let's see the result. But what I have wondered the most is this platform, which gives students a stage, a medium to showcase their talent.
                                            </p>
                                            <Link to="https://g.co/kgs/D7anz3T" target="_blank" rel="noopener noreferrer" className="text-black text-xl">
                                                <FaExternalLinkAlt />
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Testimonial 2 */}
                                    <div className="flex-shrink-0 w-full md:w-4/12 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
                                        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-white bg-opacity-80">
                                            <h3 className="text-xl font-bold font-serif mb-4">Ayesha Ariff</h3>
                                            <p className="text-base font-serif text-gray-600 mb-4">
                                                Good Evening everyone, this is the 2nd time I am participating with Blue Cloud Publication. This platform honors most of the authors. It is a pleasure to work with them. I found most people of this organization are humble and well-mannered.
                                            </p>
                                            <Link to="https://g.co/kgs/D7anz3T" target="_blank" rel="noopener noreferrer" className="text-black text-xl">
                                                <FaExternalLinkAlt />
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Testimonial 3 */}
                                    <div className="flex-shrink-0 w-full md:w-4/12 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
                                        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-white bg-opacity-80">
                                            <h3 className="text-xl font-bold font-serif mb-4">Disha Patwa</h3>
                                            <p className="text-base font-serif text-gray-600 mb-4">
                                                I really felt very happy. It's a free website with no hidden charges. It's a good platform to feel motivated. It's really a good platform for budding writers like us. Great work. Nice Publication. Thank you!
                                            </p>
                                            <Link to="https://g.co/kgs/D7anz3T" target="_blank" rel="noopener noreferrer" className="text-black text-xl">
                                                <FaExternalLinkAlt />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Testimonial 4 */}
                                    <div className="flex-shrink-0 w-full md:w-4/12 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
                                        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-white bg-opacity-80">
                                            <h3 className="text-xl font-bold font-serif mb-4">Disha Patwa</h3>
                                            <p className="text-base font-serif text-gray-600 mb-4">
                                                I really felt very happy. It's a free website with no hidden charges. It's a good platform to feel motivated. It's really a good platform for budding writers like us. Great work. Nice Publication. Thank you!
                                            </p>
                                            <Link to="https://g.co/kgs/D7anz3T" target="_blank" rel="noopener noreferrer" className="text-black text-xl">
                                                <FaExternalLinkAlt />
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Add more testimonials here if needed */}
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*seventh section end*/}












                </div>
            </div>



        </Layout >







    );

}

export default HomePage;


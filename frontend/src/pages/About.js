import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";



const About = () => {
  return (
    <Layout title={"About - Open Book Publishers"}>

      <div className="flex flex-col min-h-screen w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 p-4 sm:p-6 md:p-8 lg:p-10 w-full">
          <div className="flex flex-col items-center pt-5 mt-[5vh] w-full">
            <div className="bg-transparent p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-md md:shadow-lg w-full max-w-none lg:max-w-screen-md">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 text-center font-inter">Who We Are?</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-inter mb-4">
                Blue Cloud Publishers, a Delhi-based self-publishing company, situated in the bustling metropolitan hub, our well-established publishing company is committed to delivering exemplary services for book publication.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-inter mb-4">
                Our proficient team members provide comprehensive guidance on expectations, timelines, and budgeting, while meticulously managing all facets of publication, including editing, design, distribution, and marketing, to ensure the attainment of well-deserved success.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-inter mb-4">
                We take pride in our diverse publishing portfolio encompassing all genres and languages, striving to facilitate extensive reader outreach for our esteemed authors. Blue Cloud Publishers offers an array of global publishing, book printing, and distribution options, positioning us as one of the swiftly burgeoning book publishing companies in India.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-inter mb-6">
                We are dedicated to offering scalable, industry-resolving solutions on a global scale.
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
                <Link to="/contact-us" className="bg-blue-950 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-inter text-lg text-center">
                  Contact Us
                </Link>
                <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors font-inter text-lg text-center">
                  Portfolio
                </button>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 w-full">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center font-inter">We Are Social</h3>
              <p className="text-lg text-center mb-6 font-inter">Let's Get Connected</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.instagram.com/bluecloudpublishers/" target="_blank" rel="noopener noreferrer" className="bg-black p-2 sm:p-3 md:p-3 rounded-full hover:bg-gray-300 transition-colors">
                  <FaInstagram className="text-xl sm:text-2xl md:text-3xl text-white" />
                </a>
                <a href="https://wa.me/message/4H6KMWAXFACFA1" target="_blank" rel="noopener noreferrer" className="bg-black p-2 sm:p-3 md:p-3 rounded-full hover:bg-gray-300 transition-colors">
                  <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl text-white" />
                </a>
                <a href="https://www.facebook.com/bluecloudpublishers" target="_blank" rel="noopener noreferrer" className="bg-black p-2 sm:p-3 md:p-3 rounded-full hover:bg-gray-300 transition-colors">
                  <RiFacebookCircleLine className="text-xl sm:text-2xl md:text-3xl text-white" />
                </a>
                <a href="https://www.linkedin.com/company/blue-cloud-publishers/" target="_blank" rel="noopener noreferrer" className="bg-black p-2 sm:p-3 md:p-3 rounded-full hover:bg-gray-300 transition-colors">
                  <CiLinkedin className="text-xl sm:text-2xl md:text-3xl text-white" />
                </a>
                <a href="https://x.com/BCloudPublisher" target="_blank" rel="noopener noreferrer" className="bg-black p-2 sm:p-3 md:p-3 rounded-full hover:bg-gray-300 transition-colors">
                  <FaXTwitter className="text-xl sm:text-2xl md:text-3xl text-white" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>


    </Layout>
  );
};

export default About;



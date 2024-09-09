import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../components/Layout/Layout";
import laptopgirl from "../images/laptopgirl.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8082/api/v1/contact", {
        name,
        email,
        phone,
        message,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Contact Us">
      <div className="flex flex-col min-h-screen p-5 mt-5">

        {/* Image and Contact Form Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 mb-6 lg:mb-0">

          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex items-center justify-center flex-col">
            <h3 className="text-2xl font-semibold text-center mb-2 text-gray-800 lg:text-3xl lg:font-bold font-inter">We are always here to help you!</h3>
            <p className="text-base text-black text-center mb-4  lg:text-xl font-inter">Give us a chance</p>
            <div className="w-3/4 lg:w-8/12 h-72 lg:h-96">
              <img src={laptopgirl} alt="Laptop Girl" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 max-w-lg bg-white rounded-lg p-4 mx-auto shadow-lg font-inter">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <h4 className="text-3xl font-bold mb-5 text-center text-blue-900">Contact Us</h4>

              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-900"
                  placeholder="Enter Your Phone"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring focus:border-blue-900"
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="block w-32 py-2 text-white bg-blue-900 rounded-md transition-colors hover:bg-gray-900 h-12 text-xl font-inter text-center focus:outline-none focus:ring-4 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Map Section */}
        <div className="flex justify-center mt-6 lg:mt-12">
          <div className="w-full lg:w-3/4 xl:w-8/12 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.375783107634!2d77.0741076!3d28.5941336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b65090a01e1%3A0x2b14f2175745ea48!2sBlue%20Cloud%20Publishers%20-%20Best%20Book%20Self%20Publishing%20House%20in%20India!5e0!3m2!1sen!2sin!4v1725703922737!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Contact;

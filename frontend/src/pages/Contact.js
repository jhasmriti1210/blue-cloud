import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../components/Layout/Layout";


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
      <div class="flex flex-col min-h-screen">
        <div class="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 p-5 mt-5">

          {/* Map Section */}
          <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
            <div class="w-full h-96 bg-gray-300">

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

          {/* Contact Form Section */}
          <div class="w-full lg:w-1/2 max-w-lg bg-white rounded-lg p-4 mx-auto shadow-lg font-inter">
            <div class="w-full">
              <form class="space-y-4">
                <h4 class="text-3xl font-bold mb-5 text-center text-blue-900">Contact Us</h4>

                <div class="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    class="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-900"
                    placeholder="Enter Your Phone"
                    required
                  />
                </div>

                <div class="mb-3">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    class="w-full p-2 mb-4 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring focus:border-blue-900"
                    placeholder="Enter Your Message"
                    required
                  ></textarea>
                </div>

                <div class="flex justify-center">
                  <button
                    type="submit"
                    class="block w-32 py-2 text-white bg-blue-900 rounded-md transition-colors hover:bg-gray-900 h-12 text-xl font-inter text-center focus:outline-none focus:ring-4 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>


        </div>
      </div>

    </Layout>
  );
};

export default Contact;








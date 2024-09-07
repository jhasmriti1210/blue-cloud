import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";
import "../styles/contact.css";

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
      <div className="app">
        <div className="content">
          <div className="contact-page">
            <div className="form-container">
              <form onSubmit={handleSubmit} className="contactform">
                <h4 className="title">Contact Us</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn bg-darkblue">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Contact;








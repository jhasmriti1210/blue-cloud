import React from "react";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";
import "../styles/testimonial.css";
import { FaExternalLinkAlt } from 'react-icons/fa';

const testimonials = [
    {
        name: "Syed Nosheen",
        content: "I have found this very interesting. Being a student, it becomes so easy to trust everything that leads to your success. I have submitted three poems of my own. Let's see the result. But what I have wondered the most is this platform, which gives students a stage, a medium to showcase their talent.",
        link: "https://g.co/kgs/D7anz3T"
    },
    {
        name: "Ayesha Ariff",
        content: "Good Evening everyone, this is the 2nd time I am participating with Blue Cloud Publication. This platform honors most of the authors. It is a pleasure to work with them. I found most people of this organization are humble and well-mannered.",
        link: "https://g.co/kgs/D7anz3T"
    },
    {
        name: "Disha Patwa",
        content: "I really felt very happy. It's a free website with no hidden charges. It's a good platform to feel motivated. It's really a good platform for budding writers like us. Great work. Nice Publication. Thank you!",
        link: "https://g.co/kgs/D7anz3T"
    }
];

const Testimonials = () => {
    return (
        <Layout title={"Testimonials - Bluecloud Publishers"}>
            <div className="app">
                <div className="content">
                    <div className="terms-container">
                        <div className="terms-content">
                            <h3 className="testimonials-header">We're biased... Read what our authors say</h3>
                            <div className="testimonials">
                                {testimonials.map((testi, index) => (
                                    <div key={index} className="testimonial-item">
                                        <div className="testimonial-content">
                                            <h3>{testi.name}</h3>
                                            <p>{testi.content}</p>
                                            <a href={testi.link} target="_blank" rel="noopener noreferrer" aria-label={`Read more about ${testi.name}'s testimonial`}>
                                                <FaExternalLinkAlt className="link-icon" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Testimonials;

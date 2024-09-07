import React from "react";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";
import "../styles/about.css";


const About = () => {
  return (
    <Layout title={"About - Bluecloud Publishers"}>
      <div className="app">
        <div className="content">
          <div className="contact-page">
            <div className="privacypage">
              <h2>Know Us</h2>
              <p>
                A Delhi Based Self-Publishing Company, situated in the bustling
                metropolitan hub, our well-established publishing company is committed
                to delivering exemplary services for book publication.
              </p>
              <p>
                Our proficient team members provide comprehensive guidance on
                expectations, timelines, and budgeting, while meticulously managing
                all facets of publication, including editing, design, distribution,
                and marketing, to ensure the attainment of well-deserved success.
              </p>
              <p>
                We take pride in our diverse publishing portfolio encompassing all
                genres and languages, striving to facilitate extensive reader
                outreach for our esteemed authors. Blue Cloud Publishers offers an
                array of global publishing, book printing, and distribution options,
                positioning us as one of the swiftly burgeoning book publishing
                companies in India.
              </p>
              <p>
                We are dedicated to offering scalable, industry-resolving solutions on
                a global scale.
              </p>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default About;



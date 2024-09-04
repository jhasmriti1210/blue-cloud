import React from "react";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";
import "../styles/Returnpolicy.css"; // Import your CSS file for custom styling

const ShippingPolicy = () => {
    return (
        <Layout title="Shipping Policy">
            <div className="app">
                <div className="content">
                    <div className="contact-page">
                        <div className="shipping-page">
                            <h2>Our Shipping Policies</h2>
                            <p>We currently ship within India.</p>

                            <p>Our shipping rates are quite simple.</p>

                            <p>
                                Orders less than 500 gms in weight ship for one low flat rate of Rs 70 in Jammu and Kashmir & North Eastern states and Rs 50 for all other states.
                            </p>

                            <p>
                                Orders weighing more than 500 gms will have standard shipping charges applied depending on weight and location.
                            </p>
                            <p>
                                Delivery Within 7 days after payment.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </Layout>
    );
};

export default ShippingPolicy;

import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";


const ShippingPolicy = () => {
    return (
        <Layout title="Shipping Policy">
            <div className="app min-h-screen py-8 px-4 md:px-8 lg:px-16">
                <div className="content max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <div className="shipping-page">
                        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Our Shipping & Delivery Policies</h2>
                        <p className="mb-4 text-lg text-gray-700">At Blue Cloud Publishers, we strive to ensure that your orders are processed and delivered to you in a timely manner. Please review our shipping and delivery policy below:</p>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Order Processing</h3>
                        <p className="mb-4 text-lg text-gray-700">
                            Orders are processed within 1-3 business days after your order has been confirmed.
                            You will receive a confirmation email once your order has been successfully placed.
                        </p>

                        <h3 className="text-xl font-bold mb-2 text-gray-800">Shipping Time</h3>
                        <p className="mb-4 text-lg text-gray-700">
                            Shipping time refers to the time it takes for your order to leave our warehouse.
                            Once your order is confirmed, it will be shipped within 1-3 business days.
                        </p>

                        <h3 className="text-xl font-bold mb-2 text-gray-800">Delivery Time</h3>
                        <p className="mb-4 text-lg text-gray-700">
                            Delivery time refers to the time it takes for your order to arrive at your delivery address after it has been shipped.
                            Delivery typically takes between 3-7 business days, depending on your location and the shipping method.
                        </p>

                        <h3 className="text-xl font-bold mb-2 text-gray-800">Shipping Confirmation and Tracking</h3>
                        <p className="mb-4 text-lg text-gray-700">
                            After your order has been shipped, you will receive an email or SMS with your shipping details, including a tracking number.
                            You can use the tracking number provided to check the status and estimated delivery date of your order.
                        </p>

                        <h3 className="text-xl font-bold mb-2 text-gray-800">Shipping Costs</h3>
                        <p className="mb-4 text-lg text-gray-700">
                            Shipping costs are calculated based on the weight of the books and the destination address.
                            Shipping charges will be displayed at checkout before you complete your purchase.
                            Orders weighing more than 500 gms will have standard shipping charges applied depending on weight and location.
                            Orders less than 500 gms in weight ship for one low flat rate of Rs 70 in Jammu and Kashmir & North Eastern states and Rs 50 for all other states.

                        </p>

                        <h3 className="text-xl font-bold mb-2 text-gray-800">Undeliverable Packages</h3>
                        <p className="mb-4 text-lg text-gray-700">
                            If a package is returned to us as undeliverable due to an incorrect address or other issues, we will contact you to arrange for a reshipment. Additional shipping charges may apply.
                        </p>

                        <h3 className="text-xl font-bold mb-2 text-gray-800">Lost or Damaged Packages</h3>
                        <p className="mb-4 text-lg text-gray-700">
                            If your package is lost or arrives damaged, please contact us immediately at <Link to="mailto:Bluecloudpublishers@gmail.com" className="text-blue-600 hover:underline">Bluecloudpublishers@gmail.com</Link> or call 6393878824. We will work with you to resolve the issue as quickly as possible.
                        </p>

                        <h3 className="text-xl font-bold mb-2 text-gray-800">Customer Support</h3>
                        <p className="mb-4 text-lg text-gray-700">
                            For any questions or concerns regarding your order, please contact our customer support team at <a href="mailto:Bluecloudpublishers@gmail.com" className="text-blue-600 hover:underline"> Bluecloudpublishers@gmail.com</a> or call us at 6393878824.
                        </p>
                    </div>
                </div>
            </div>


        </Layout>
    );
};

export default ShippingPolicy;

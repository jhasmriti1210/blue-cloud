import React from "react";
import Layout from "../components/Layout/Layout";


const ReturnPolicy = () => {
    return (
        <Layout title="Return Policy">
            <div className="app flex flex-col min-h-screen">
                <div className="content flex-grow p-4 mx-auto mt-0">
                    <div className="return-policy-page w-full max-w-full bg-white p-4 rounded-lg shadow-lg font-inter text-gray-700">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-black">Return Policy</h2>
                        <p className="text-base md:text-lg mb-4">
                            You may return products as long as they are in new condition within 3 days of delivery for a product refund. New condition means that the products are clean and packaging is still usable. We understand that an item may need to be tried before you make this decision, so feel free to open the packaging and try the product.
                        </p>
                        <p className="text-base md:text-lg mb-4">
                            We hope you are happy with every quality of our products, but if for any reason you are not, we are happy to assist with a return. We will even pay the return shipping costs if the return is a result of our error (e.g., you received an incorrect or defective item).
                        </p>
                        <p className="text-base md:text-lg mb-4">
                            You should expect to receive your refund within three weeks of giving your package to the return shipper. In many cases, you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (3 to 7 business days), the time it takes us to process your return once we receive it (1 to 3 business days), and the time it takes your bank to process our refund request (5 to 10 business days).
                        </p>
                        <p className="text-base md:text-lg mb-4">
                            If you need to return an item, please email <a href="mailto:support@bluecloudpublishers.com" className="text-blue-600 hover:underline">support@bluecloudpublishers.com</a> with your order number and details about the product you would like to return. We will respond quickly with instructions on how to return items from your order.
                        </p>
                    </div>
                </div>
            </div>




        </Layout>
    );
};

export default ReturnPolicy;




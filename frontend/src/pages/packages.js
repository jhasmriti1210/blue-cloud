import React, { useState } from 'react';
import Layout from "../components/Layout/Layout";

const Packages = () => {
    const packageTypes = ['Basic', 'Intermediate', 'Advanced', 'Premium', 'Premium+'];

    const part2Content = [
        '₹ 4,990',
        '₹ 9,990',
        '₹ 14,990',
        '₹ 29,990',
        '₹ 99,990'
    ];

    const rowData = [
        ['Book Binding', 'Paperback', 'Paperback', 'HardCopy/Paperback', 'HardCopy/Paperback', 'HardCopy/Paperback'],
        ['Interior', 'B/W or Full Color', 'B/W or Full Color', 'B/W or Full Color', 'B/W or Full Color', 'B/W or Full Color'],
        ['Cover Page', 'Full Color', 'Full Color', 'Full Color', 'Full Color', 'Full Color'],
        ['ISBN', ...Array(part2Content.length).fill('✓')],
        ['Copyright', ...Array(part2Content.length).fill('✓')],
        ['Barcode', ...Array(part2Content.length).fill('✓')],
        ['Agreement', 'Non-Exclusive', 'Non-Exclusive', 'Non-Exclusive', 'Non-Exclusive', 'Non-Exclusive'],
        ['Online Sales Dashboard', ...Array(part2Content.length).fill('✓')],
        ['Author Profit Share', '100%', '100%', '100%', '100%', '100%'],
        ['Royalty Payout', 'On Demand', 'On Demand', 'On Demand', 'On Demand', 'On Demand'],
        ['Post-Publishing Support', 'Call/Whatsapp', 'Call/Whatsapp', 'Call/Whatsapp', 'Call/Whatsapp', 'Call/Whatsapp'],
        ['GhostWriting', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
        ['Substantive Editing', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
        ['Copy Editing', ...Array(part2Content.length).fill('✓')],
        ['Beta Editing', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
        ['Developmental Editing', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
        ['Manuscripting', ...Array(part2Content.length).fill('✓')],
        ['Proof Reading', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
        ['Publishing Consultant', ...Array(part2Content.length).fill('✓')],
        ['Publishing Manager', ...Array(part2Content.length).fill('✓')],
        ['Marketing Assistance', ...Array(part2Content.length).fill('✓')],
        ['Cover Design', ...Array(part2Content.length).fill('✓')],
        ['Interior Design', ...Array(part2Content.length).fill('✓')],
        ['Book Interior Design', ...Array(part2Content.length).fill('✓')],
        ['Digital Proof', ...Array(part2Content.length).fill('✓')],
        ['Inventory Management', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'],
        ['Author Copies', '1 B/W Copy', '4 B/W Copies or 1 Color Copy', '7 B/W Copies or 3 Color Copies', '10 B/W Copies or 5 Color Copies', '15 B/W Copies or 7 Color Copies'],
        ['Amazon', ...Array(part2Content.length).fill('✓')],
        ['Amazon Prime', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
        ['Flipkart', ...Array(part2Content.length).fill('✓')],
        ['Meesho', ...Array(part2Content.length).fill('✓')],
        ['Blue Cloud Store', ...Array(part2Content.length).fill('✓')],
        ['Amazon Kindle', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
        ['Google Play Books', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
        ['Rakuten Kobo', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
        ['Blue Cloud Publishers E-store', ...Array(part2Content.length).fill('✓')],
        ['Spotify', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
        ['Amazon Music', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
        ['Apple Music', 'Add-On', 'Add-On', 'Add-On', 'Add-On', 'Add-On'],
    ];

    const [activeTab, setActiveTab] = useState('Basic');

    const filteredRowData = rowData.map(row => {
        if (row.includes(activeTab) || window.innerWidth >= 1024) {
            return row;
        }
        return [];
    }).filter(row => row.length > 0);

    const getBackgroundColor = (index) => {
        // Define your colors
    };

    return (
        <Layout title="Packages">
            <div className="app min-h-screen py-8 px-4 md:px-8 lg:px-16">
                <div className="content max-w-4xl mx-auto rounded-lg p-6">
                    <div className="shipping-page text-center font-inter">
                        <h2 className="text-3xl md:text-7xl font-bold mb-4 text-blue-950">Publishing Plans</h2>
                        <p className="text-lg text-black mb-6">These packages are designed as per your needs and are fully customizable.</p>
                    </div>

                    {/* Tab Navigation for Small Screens */}
                    <div className="flex flex-row md:hidden mb-4">
                        {packageTypes.map((pkg, index) => (
                            <button
                                key={index}
                                className={` text-white text-sm ${activeTab === pkg ? 'bg-blue-600' : 'bg-blue-400'} rounded-md mb-1`}
                                onClick={() => setActiveTab(pkg)}
                            >
                                {pkg}
                            </button>
                        ))}
                    </div>

                    {/* Table Section */}
                    <div className="relative hidden md:block">
                        <div className="overflow-x-auto md:mt-20">
                            <table className="min-w-full table-auto border-collapse font-inter">
                                <thead>
                                    <tr className="bg-blue-900 text-white text-center">
                                        <th className="w-[300px] h-32 border-none">
                                            <div className="bg-blue-900 text-white flex items-center justify-center h-full text-xl">Services (Inclusive of Tax)</div>
                                        </th>
                                        {['Basic', 'Standard', 'Popular', 'Premium', 'Premium+'].map((title, index) => (
                                            <th
                                                key={index}
                                                className={`w-[200px] h-32 text-base ${index !== 0 ? 'border-l-0' : ''} ${index !== 4 ? 'border-b-0' : ''}`}
                                            >
                                                <div className="flex flex-col h-full border-none">
                                                    <div className={`flex-1 bg-blue-900 flex items-center justify-center text-white ${index !== 0 ? 'border-l-0' : ''}`}>
                                                        {title}
                                                    </div>
                                                    <div className={`flex-1 bg-white flex items-center justify-center text-blue-900 ${index !== 4 ? 'border-b-0' : ''}`}>
                                                        {part2Content[index]}
                                                    </div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredRowData.map((row, rowIndex) => (
                                        <tr key={rowIndex} className={getBackgroundColor(rowIndex)}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className="text-center border">
                                                    {cell === '✓' ? (
                                                        <div className="h-full flex items-center justify-center">
                                                            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                    ) : cell === 'Add-On' ? (
                                                        <div className="h-full flex items-center justify-center text-yellow-600">
                                                            {cell}
                                                        </div>
                                                    ) : (
                                                        cell
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Last Div Section */}
                    <div className='shadow-lg'>
                        <div className="mt-20 md:mt-16 flex flex-col lg:flex-row justify-center items-center gap-6">
                            {/* Content Section */}
                            <div className="w-full lg:w-10/12 text-center lg:text-left p-4">
                                <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 text-black">Who doesn't like additional services for no additional cost?</h2>
                                <button className="text-sm md:text-xl mb-4 bg-blue-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-md">Start Today and get 10% Discount</button>
                            </div>

                            {/* Additional Services Section */}
                            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:gap-8 lg:items-center p-4">
                                <div className="flex flex-col text-center lg:text-left">
                                    <p className="text-base md:text-lg flex items-center mb-2 border-b border-gray-300 pb-2">
                                        <span className="text-blue-900 mr-2">✔</span>
                                        Duplex Printing
                                    </p>
                                    <p className="text-base md:text-lg flex items-center mb-2 border-b border-gray-300 pb-2">
                                        <span className="text-blue-900 mr-2">✔</span>
                                        Amazon Author Profile
                                    </p>
                                    <p className="text-base md:text-lg flex items-center mb-2 border-b border-gray-300 pb-2">
                                        <span className="text-blue-900 mr-2">✔</span>
                                        Post Publishing Support
                                    </p>
                                    <p className="text-base md:text-lg flex items-center">
                                        <span className="text-blue-900 mr-2">✔</span>
                                        Sell your book Globally
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Row layout for the last line */}
                        <div className="w-full flex justify-center items-center p-4 mt-2">
                            <p className="text-center text-base md:text-lg text-gray-700">Start your publishing process today and get these services for no additional cost.</p>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Packages;

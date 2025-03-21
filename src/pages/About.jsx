import React from "react";

const AboutUs = () => {
    return (
        <div className= " min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-10 px-4 sm:px-6 lg:px-8">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-4 transition-transform duration-300 hover:scale-105">About Us</h1>
                <p className="text-lg max-w-2xl mx-auto text-gray-700">
                    Welcome to our store! We're passionate about bringing you the best products and an unparalleled shopping experience.
                </p>
            </section>
            
            <section className="grid gap-8 md:grid-cols-3">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
                    <p className="text-gray-600">
                        Our mission is to provide high-quality products that bring value and joy to our customers' lives. We believe in innovation, sustainability, and excellence in every aspect of our business.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Story</h2>
                    <p className="text-gray-600">
                        Founded in 2020, our journey started with a vision to create a store that not only sells products but builds a community. Over the years, we’ve grown into a trusted brand loved by customers worldwide.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
                    <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center gap-2"><span className="text-blue-600 text-lg">✔</span> Premium quality products</li>
                        <li className="flex items-center gap-2"><span className="text-blue-600 text-lg">✔</span> Exceptional customer service</li>
                        <li className="flex items-center gap-2"><span className="text-blue-600 text-lg">✔</span> Secure and fast delivery</li>
                        <li className="flex items-center gap-2"><span className="text-blue-600 text-lg">✔</span> Commitment to sustainability</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;

import React from 'react';

const ViewPricing = () => {
    return (
        <div>
            {/* CTA Section (Bottom Purple Area) */}
            <div className="bg-purple-600 mt-12 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready To Transform Your Workflow?
                    </h2>
                    <p className="mb-8 text-purple-100 max-w-2xl mx-auto">
                        Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <a href="#products" className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                            Explore Products
                        </a>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition">
                            View Pricing
                        </button>
                    </div>
                    <p className="text-sm text-purple-200">
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ViewPricing;
import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            subtitle: "Perfect for getting started",
            price: "0",
            period: "/Month",
            features: [
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month"
            ],
            button: "Get Started Free",
            popular: false,
            color: "bg-white"
        },
        {
            name: "Pro",
            subtitle: "Best for professionals",
            price: "29",
            period: "/Month",
            features: [
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics"
            ],
            button: "Start Pro Trial",
            popular: true,
            color: "bg-purple-600 text-white"
        },
        {
            name: "Enterprise",
            subtitle: "For teams and businesses",
            price: "99",
            period: "/Month",
            features: [
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding"
            ],
            button: "Contact Sales",
            popular: false,
            color: "bg-white"
        }
    ];

    return (
        <div className="py-16 md:py-24 bg-gray-50 mb-4">
            <div className="max-w-7xl mb-4 mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 shadow-lg relative flex flex-col ${plan.popular ? 'bg-purple-600 text-white transform md:-translate-y-4 shadow-xl' : 'bg-white text-gray-900 border border-gray-100'
                                }`}
                        >
                            {/* Badge for Popular Plan */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className={`text-sm ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                                    {plan.subtitle}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-4xl font-bold">${plan.price}</span>
                                <span className={`text-sm ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                                    {plan.period}
                                </span>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm">
                                        <svg className={`w-5 h-5 mr-2 ${plan.popular ? 'text-purple-200' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button className={`w-full py-3 rounded-full font-bold transition-colors ${plan.popular
                                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                                    : 'bg-linear-to-l from-purple-800 to-purple-600 text-white hover:bg-purple-700'
                                }`}>
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            
        </div>
    );
};

export default Pricing;
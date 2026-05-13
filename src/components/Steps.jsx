import React from 'react';

const Steps = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started."
    },
    {
      id: 2,
      number: "02",
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs."
    },
    {
      id: 3,
      number: "03",
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Start Creating",
      description: "Download and start using your premium tools immediately."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 text-center"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-6 pt-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-50 rounded-full">
                  {step.icon}
                </div>
              </div>
              

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
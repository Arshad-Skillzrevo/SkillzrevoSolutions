import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CorporateTraining() {
  return (
    <div className="min-h-screen bg-[#1d8fff] flex items-center justify-center p-6">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight heading-oswald">
            CORPORATE TRAINING SOLUTIONS
          </h1>
          <p className="text-xl text-blue-50">
            Upskill your workforce with enterprise-grade learning
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div>
              {/* Solutions Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">
                  Solutions Offered:
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Leadership Development</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Technical Training (AI, Cybersecurity, Cloud, Data Science)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Customized Programs for BFSI, Healthcare, Retail, IT
                    </span>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">
                  Features:
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">LMS with progress tracking</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hands-on workshops</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Onsite & Virtual learning models</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href='https://academy.skillzrevo.com/corporate-training' className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center transition-colors shadow-md">
                  Check Details
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center transition-colors shadow-md">
                  Download Brochure
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button> */}
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="h-full w-full">
              
                <img src='https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332' className='h-full w-full object-cover rounded-xl'/>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
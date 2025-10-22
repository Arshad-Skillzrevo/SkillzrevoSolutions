import React from 'react';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

export default function SuccessStoriesTestimonials() {
  const testimonials = [
    {
      category: 'Corporate Clients:',
      text: '"SkillzRevo helped us reskill 2,000+ employees in AI and Cloud."'
    },
    {
      category: 'Student Testimonial:',
      text: '"Thanks to SkillzRevo Academy, I transitioned into a Data Science role at a Fortune 500 company."'
    },
    {
      category: 'Staffing Case Study:',
      text: '"Reduced hiring turnaround by 60% through RPO services."'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#1d8fff] to-blue-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
        
              
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-oswald text-white mb-8">
              SUCCESS STORIES <br/> TESTIMONIALS
            </h2>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl">
              See All Testimonials
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex gap-4 items-start"
              >
                <FaQuoteLeft className="text-white text-4xl flex-shrink-0 opacity-90" />
                <div className="text-white">
                  <p className="font-semibold mb-1">{testimonial.category}</p>
                  <p className="text-blue-50 leading-relaxed">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
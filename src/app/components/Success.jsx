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
            
            <a href='https://www.google.com/search?sa=X&rlz=1C1OPNX_enIN1124IN1124&sca_esv=7550878c098e0420&cs=1&biw=1680&bih=915&sxsrf=AE3TifNC7wTBpUPM-4SxqSawHBzRAHJ1wg:1756994365946&kgmid=/g/11wg7gxph5&q=SkillzRevo+Solutions+Pvt+Ltd&shndl=30&shem=lcuae,lsptbl1,uaasie&source=sh/x/loc/uni/m1/1&kgs=3365fa44e46a00fb&utm_source=lcuae,lsptbl1,uaasie,sh/x/loc/uni/m1/1#lrd=0x3bae15a01928a245:0x5b89af795985a099,1,,,,' className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl w-fit">
              See All Testimonials
              <FaArrowRight className="text-sm" />
            </a>
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
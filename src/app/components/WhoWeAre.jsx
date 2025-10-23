import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 max-md:px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Placeholder for Image */}
        
        <img src="https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt=""  className='w-1/2 rounded-r-2xl h-fit hidden md:block'/>

        {/* Right Side: Text Content */}
        <div className="w-full px-10 md:w-1/2">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#1d8fff] heading-oswald mb-4">WHO WE ARE</h2>
          <p className="text-gray-700 mb-8">
            SkillzRevo Solutions Pvt Ltd is a <span className="font-semibold">multi-vertical enterprise</span> driving growth for 
            individuals and businesses through <span className="font-semibold">Training, Staffing, and Consulting.</span>
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {/* Mission */}
            <div className="border-dashed border-2 border-gray-400 rounded-lg px-4 py-8 gap-4 text-center flex flex-col items-center justify-center">
              <div className="text-orange-600 text-3xl mb-2"><CircleCheckBig /></div>
              
              <h3 className="font-semibold text-[#1d8fff] mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600">
                To empower learners, professionals, and enterprises with future-ready skills and solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="border-dashed border-2 border-gray-400 rounded-lg px-4 py-8 gap-4 text-center flex flex-col items-center justify-center">
              {/* <div className="text-orange-600 text-3xl mb-2">✔️</div>
               */}
              <div className="text-orange-600 text-3xl mb-2"><CircleCheckBig /></div>

              <h3 className="font-semibold text-[#1d8fff] mb-2">Our Vision</h3>
              <p className="text-sm text-gray-600">
                To become a global leader in integrated talent, training, and technology services.
              </p>
            </div>

            {/* Values */}
            <div className="border-dashed border-2 border-gray-400 rounded-lg px-4 py-8 gap-4 text-center flex flex-col items-center justify-center">
              {/* <div className="text-orange-600 text-3xl mb-2">✔️</div> */}
              <div className="text-orange-600 text-3xl mb-2"><CircleCheckBig /></div>

              <h3 className="font-semibold text-[#1d8fff] mb-2">Our Values</h3>
              <p className="text-sm text-gray-600">
                Integrity | Innovation <br />
                Industry Alignment <br />
                Impact
              </p>
            </div>
          </div>

          {/* Button */}
          <a href='/about-skillzrevo' className="w-fit bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  About SkillzRevo →
                </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

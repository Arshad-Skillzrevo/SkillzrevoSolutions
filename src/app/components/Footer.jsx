import React from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsLinkedin } from 'react-icons/bs';

export default function SkillzRevoFooter() {
  return (
    <div className="flex flex-col">
      {/* Main Content Spacer */}
      
      
      {/* CTA Section */}
      <section className="bg-white w-fit mx-auto py-12 px-8 shadow-lg rounded-lg border border-gray-300 relative top-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8 heading-oswald">
            Ready to Transform Your Business or Career?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 hover:shadow-lg">
              Talk to Our Experts <FaArrowRight className="text-sm" />
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 hover:shadow-lg">
              Request a Callback <FaArrowRight className="text-sm" />
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 hover:shadow-lg">
              Download Company Profile PDF <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-500 to-blue-600 text-white pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-xl">S</span>
                </div>
                <span className="text-2xl font-bold">SkillzRevo</span>
              </div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:underline">About SkillzRevo</a>
                <a href="#" className="block hover:underline">Privacy Policy | Terms of Use</a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-xs">◇</span>
                  <a href="#" className="hover:underline">SkillzRevo Academy</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">◇</span>
                  <a href="#" className="hover:underline">SkillzRevo Talent</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">◇</span>
                  <a href="#" className="hover:underline">SkillzRevo Consulting</a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-xs">◇</span>
                  <a href="#" className="hover:underline">Corporate Training</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">◇</span>
                  <a href="#" className="hover:underline">Channel Partner</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">◇</span>
                  <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">◇</span>
                  <a href="#" className="hover:underline">Blogs</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">◇</span>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <p>Plot No. 99/1A, Sector-16C, T-1 State Noida, Gautam Buddha Nagar Greater Noida, Uttar Pradesh 201308, India</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  <a href="mailto:info@skillzrevo.com" className="hover:underline">info@skillzrevo.com</a>
                </div>
                <div className="flex items-start gap-2">
                  <FaPhone className="mt-1" />
                  <div>
                    <p>+1 (987) 654-8569</p>
                    <p>+1 (456) 877-4695</p>
                  </div>
                </div>
                {/* <div className="flex gap-3 mt-4">
                  <a href="#" className="hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </a>
                  <a href="#" className="hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30">
                      <BsLinkedin />
                    </div>
                  </a>
                  <a href="#" className="hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30">
                      <FaXTwitter />
                    </div>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-orange-600 py-4 text-center text-sm">
          <p>© 2025 SkillzRevo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
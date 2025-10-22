import { FaCheckCircle } from 'react-icons/fa';

export default function VerticalServices() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-black text-center mb-16 tracking-tight heading-oswald" style={{ color: '#1d8fff' }}>
          OUR VERTICAL SERVICES
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Academy Training */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff6900' }}>
                  <FaCheckCircle className="text-white text-5xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full" style={{ backgroundColor: '#ff6900' }}></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full" style={{ backgroundColor: '#ff6900' }}></div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 text-center mb-4 leading-tight">
              SKILLZREVO ACADEMY<br />TRAINING VERTICAL
            </h2>

            <p className="text-gray-700 text-center mb-6 text-sm">
              Programs in AI, Data Science, Cybersecurity, GenAI, Cloud, DevOps, Big Data, Analytics & More
            </p>

            <div className="mb-6 mx-auto">
              <div className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#1d8fff' }}>
                Delivery Modes:
              </div>
            </div>

            <p className="text-gray-700 text-center mb-6 text-sm">
              Online | Offline | Corporate Bootcamps | Hybrid
            </p>

            <div className="mb-6">
              <p className="font-bold text-gray-800  mb-3" style={{ color: '#ff6900' }}>
                Key Highlights:
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-start justify-start !text-left">
                  <span className="mr-2">◇</span> Hands-on labs & projects
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-2">◇</span> Global certifications (AWS, Azure, GCP, NASSCOM)
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-2">◇</span> Career services: Resume, Interview Prep, Placement Assistance
                </p>
              </div>
            </div>

            <div className="mt-auto flex gap-3 justify-center flex-wrap">
              <button className="px-6 py-2 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: '#ff6900' }}>
                Explore Courses →
              </button>
              <button className="px-6 py-2 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: '#ff6900' }}>
                New training Home Page Link →
              </button>
            </div>
          </div>

          {/* Card 2 - Talent Staffing */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff6900' }}>
                  <FaCheckCircle className="text-white text-5xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full" style={{ backgroundColor: '#ff6900' }}></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full" style={{ backgroundColor: '#ff6900' }}></div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 text-center mb-4 leading-tight">
              SKILLZREVO TALENT - STAFFING<br />& WORKFORCE SOLUTIONS
            </h2>

            <p className="text-gray-700 text-center mb-6 text-sm">
              <span className="font-semibold">Offerings:</span> Permanent Hiring | RPO | Contract Staffing | Offshore Teams
            </p>

            <p className="text-gray-700 text-center mb-6 text-sm">
              <span className="font-semibold">Industries Covered:</span> IT, BFSI, Retail, Healthcare, Manufacturing, EdTech
            </p>

            <div className="mb-6 flex-grow">
              <p className="font-bold text-center mb-3" style={{ color: '#1d8fff' }}>
                Why Us?
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-center justify-center">
                  <span className="mr-2">◇</span> Pre-screened talent pool
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-2">◇</span> AI-driven recruitment tools
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-2">◇</span> Cost-efficient global staffing models
                </p>
              </div>
            </div>

            <div className="mt-auto flex gap-3 justify-center flex-wrap">
              <button className="px-6 py-2 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: '#ff6900' }}>
                Staffing Home Page Link →
              </button>
              <button className="px-6 py-2 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: '#ff6900' }}>
                Explore Staffing Solutions →
              </button>
            </div>
          </div>

          {/* Card 3 - Consulting */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff6900' }}>
                  <FaCheckCircle className="text-white text-5xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full" style={{ backgroundColor: '#ff6900' }}></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full" style={{ backgroundColor: '#ff6900' }}></div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 text-center mb-4 leading-tight">
              SKILLZREVO CONSULTING - DIGITAL<br />& ANALYTICS CONSULTING
            </h2>

            <div className="mb-6">
              <p className="font-semibold text-gray-800 text-center mb-3">Services:</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="px-4 py-2 bg-blue-50 text-gray-700 rounded text-sm border border-gray-200">
                  AI/ML Consulting
                </span>
                <span className="px-4 py-2 bg-blue-50 text-gray-700 rounded text-sm border border-gray-200">
                  BI & Data Visualization
                </span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-4 py-2 bg-blue-50 text-gray-700 rounded text-sm border border-gray-200">
                  Cloud Advisory
                </span>
                <span className="px-4 py-2 bg-blue-50 text-gray-700 rounded text-sm border border-gray-200">
                  Digital Transformation Strategy
                </span>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <p className="font-bold text-center mb-3" style={{ color: '#1d8fff' }}>
                Client Benefits:
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-center justify-center">
                  <span className="mr-2">◇</span> Tailored solutions to business goals
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-2">◇</span> Industry-focused expertise
                </p>
                <p className="flex items-center justify-center text-center">
                  <span className="mr-2">◇</span> Scalable and secure technology deployment
                </p>
              </div>
            </div>

            <div className="mt-auto flex gap-3 justify-center flex-wrap">
              <button className="px-6 py-2 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: '#ff6900' }}>
                Explore Consulting Services →
              </button>
              <button className="px-6 py-2 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: '#ff6900' }}>
                Consulting Home Page Link →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
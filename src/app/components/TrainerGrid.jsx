"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Brain,
  Star,
  X,
  Briefcase,
  Award,
  Sparkles,
  Zap,
  Code,
  TrendingUp,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const trainersData = [
    {
    id: 8,
    name: "Shweta Otari",
    image: "/Trainers/Shweta-Otari.JPG",
    description:
      "A Learning and Development professional with 8 years of experience specializing in technical training, curriculum design, and e-learning development. I’ve created and delivered programs on Python, Cloud, Data Science working closely with SMEs to ensure relevance and industry alignment.I have hands-on experience with LMS management, TNA, ADDIE framework, and tools like Articulate Storyline. I’m passionate about designing engaging learning experiences that bridge skill gaps and enhance workforce capability.",
    skills: ["Python", "SQL", "ML", "DL"],
    experience: "8+ Years",
    students: "200+",
    linkedin: "https://www.linkedin.com/in/shweta-otari-8681b8b8/",
  },
  {
    id: 1,
    name: "Mr. Ashish Tiwari",
    image: "/Trainers/Ashish-Tiwari-Sir.jpeg",
    description:
      "Mr. Ashish Tiwari has done his Masters in Al&ML. He is a Data Scientist having experience of over 8+ years. He has trained 500+ data science enthusiasts who are placed in good companies. He has experience in Data Analytics, Python, Machine Learning, Deep Learning, NLP, Generative Al and many more technologies related to Data Science. He has done several projects viz. Prediction of Dormant Customer and its Factor Analysis,Last Mile Connectivity, Data Vizualisation of census data and many more in the field of Data Science and Generative Al.",
    skills: ["AI", "Machine Learning", "NLP", "Generative AI"],
    experience: "8+ Years",
    students: "500+",
    linkedin: "https://www.linkedin.com/in/ashishtiwari2114/",
  },
  {
    id: 2,
    name: "Usha Nandhini S",
    image: "/Trainers/usha.webp",
    description: `With over 9 years of expertise in computer programming and 2+ years of specialized focus in Data Science, AI, Machine Learning, and Generative AI, I transform complex technologies into powerful business solutions.

My Expertise

As a Senior Subject Matter Expert at L&T EduTech, I design cutting-edge training programs and mentor professionals through hands-on AI projects. My background includes developing LLM-powered chatbots and delivering corporate training in emerging technologies like Prompt Engineering and Natural Language Processing.

What I Deliver

I build intelligent systems that solve real business problems:

Custom AI chatbots that enhance customer experiences
Predictive analytics frameworks that drive decision-making
Computer vision solutions for automation and monitoring
Sentiment analysis systems that uncover valuable insights
Technical Arsenal

My toolkit includes Python, PySpark, Flask, Django, Streamlit, vector databases (Neo4j, Qdrant, FAISS), visualization tools (Power BI, Tableau), and cloud platforms (AWS, Google Cloud).

Success Stories

I’ve led development of innovative solutions including a personalized IT course recommendation engine, an advanced pothole detection system using YOLO and FastAPI, and a multimodal sentiment analysis platform integrating BERT and CNN models.

My Approach

I excel at bridging technical complexity with practical application, ensuring every solution delivers measurable value. Fluent in Tamil, English, and Telugu, I bring clear communication and collaborative problem-solving to every project.`,
    skills: ["Data Science", "AI", "Machine Learning", "Generative AI"],
    experience: "9+ Years",
    students: "300+",
    linkedin: "https://www.linkedin.com/in/usshaa47?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    name: "Mr. Uttam",
    image: "/Trainers/Uttam-Grade-Sir.webp",
    description:`
    Uttam Grade is a seasoned Data Scientist and Data Science Trainer with extensive expertise in delivering advanced analytics and data-driven solutions across diverse domains, including retail, banking, and technology. With a strong foundation in Mathematics and Data Science, he has successfully trained professionals at leading institutions like Imarticus and Edyoda and conducted impactful live sessions on platforms like YouTube.

Uttam specializes in Machine Learning, Natural Language Processing, Deep Learning, Predictive Modeling, and Statistical Analysis, leveraging his skills to address real-world business challenges. His qualifications include a B.Sc. and M.Sc. in Mathematics, an M.S. in Machine Learning & Artificial Intelligence, and certifications in Python for Data Science, Data Analytics (NIIT), AWS Solution Architecture, Oracle Database, Decision Sciences, and Alteryx Core.

Passionate about knowledge sharing, Uttam is committed to empowering learners in the fields of Data Science and Analytics through quality training and coaching.
    `,
    skills: [],
    experience: "12+ Years",
    students: "400+",
    linkedin: "https://www.linkedin.com/in/uttamgrade/",
  },
  {
    id: 4,
    name: "Dr Lakshmi Sree Kailasam",
    image: "/Trainers/LakshmiSree.jpg",
    description:`
    Dr. Lakshmi has over 16+ years of experience in diverse domains, including ISO, Scrum, Agile and Project Management, Cyber Security, Capital Markets, Healthcare, Consumer Packaged Goods (CPG), Fast-Moving Consumer Goods (FMCG), Retail, HR Analytics, Digital Marketing, Information Technology, Infrastructure Outsourcing, Insurance, Spend Analytics, and Cost Modelling. She has held roles as a Business Analyst, Data Analyst, Business Intelligence Analyst, and Data Visualization Specialist. Dr. Lakshmi holds a Bachelor of Engineering (BE) in Information Technology, an MBA, a Professional Doctorate in Management, and a Doctorate in Management Studies. Currently, she is pursuing studies in Human Rights Law and Cyber Law & Forensics. Additionally, she holds various certifications, including Business Analyst/Business Analytics from Software Technology Group, SQL Server 2012, VB.NET from Software Technology Group, Tableau Desktop from Tableau Software Company, ISO Certification, SharePoint 2007/2010 for Business Users, VBA, Open Office Certification. She is trained in Six Sigma with a Yellow Belt and Green Belt.


    `,
    skills: ["SQL", "Pandas", "Python", "Gen Ai", "Data Science", "BI", "Programming Languages", "Data Visualization", "Cyber Security", "Cloud Computing", "Statistics", "Big Data", "Data Analytics", "Business Analytics"],
    experience: "16+ Years",
    students: "800+",
    linkedin: "https://www.linkedin.com/in/klakshmisree",
  },
  {
    id: 5,
    name: "Mrs. Zainab Sidddiqui",
    image: "/Trainers/Zainab-Siddaqui-Maam.webp",
    description:`
   Zainab Siddiqui is a driven and results-oriented Machine Learning Engineer specializing in computer vision, NLP, and reinforcement learning. With hands-on experience in tools like Python, SQL, Tableau, Power BI, and various cloud platforms, she excels at analyzing and visualizing data to empower decision-makers. Zainab holds a Master’s degree from UT Austin in Data Science & Business Analytics, enhancing her technical foundation in data analytics and machine learning. In her current role, she works on reinforcement learning, data augmentation, image classification, clustering, topic modeling, and big data analytics using SQL and Hive queries. Previously, as a Machine Learning Researcher, she contributed to projects involving text summarization, sentiment analysis, and predictive modeling. Her skill set includes computer vision, project management, and team management, and she is proficient in English, Hindi, and Urdu. Zainab’s commitment to continuous learning is reflected in her certifications, including a Post Graduate Program in Data Science and Business Analytics. Recognized for her leadership abilities and academic achievements, she is dedicated to shaping the future of machine learning through innovative projects and effective problem-solving in AI.


    `,
    skills: ["SQL", "Pandas", "Python", "Gen Ai", "Data Science", "BI", "Programming Languages", "Data Visualization", "Cyber Security", "Cloud Computing", "Statistics", "Big Data", "Data Analytics", "Business Analytics"],
    experience: "16+ Years",
    students: "800+",
    linkedin: "https://www.linkedin.com/in/klakshmisree",
  },
  {
    id: 6,
    name: "Dr. Santosh Srivastava",
    image: "/Trainers/santosh.jpg",
    description:
      "Dr Santosh Srivastava is a PhD holder and has more than 12 years of experience in Training, Research, and Consultancy as Data Scientist in prestigious organizations including Metagrit Technologies, NIIT Technologies, IIT Roorkee, and ISB Mohali.",
    skills: [],
    experience: "12+ Years",
    students: "200+",
    linkedin: "#",
  },
  {
    id: 9,
    name: "Mr. Arihant Jain",
    image: "/Trainers/Bidhan-Sen-Sir.webp",
    description:
      "Mr Arihant is an accomplished Senior Data Scientist with over 12+ years of valuable experience in Machine Learning, Deep Learning, Natural Language Processing (NLP), and Time Series analysis. He is proficient in both Python and R programming languages. Throughout his career, he has worked for esteemed organizations such as CITI Bank, Bank of America, and NIIT Technologies. Furthermore, Mr Arihant has an extensive background as a corporate trainer in the Data Science domain, contributing more than 6+ years to this role. He has delivered training sessions at renowned MNCs like HCL Technologies and C-DAC. Notably, he has also had the privilege of teaching AI and ML courses to students at prestigious institutions like IITs and MIT in the USA. In addition to his training expertise, Mr Arihant possesses valuable experience in creating mock question papers and assignments for placement purposes on behalf of well-known institutes. He has also been actively involved in guiding numerous candidates in their interview preparation and conducting mock interviews. Moreover, he has been catering to international students from countries like the US, the UK, and the Middle East, providing valuable support and mentorship in the field of Data Science.",
    skills: [],
    experience: "8+ Years",
    students: "200+",
    linkedin: "https://www.linkedin.com/in/bidhan-sen-6589b1b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 7,
    name: "Mr. Bidhan Sen",
    image: "/Trainers/arihant.webp",
    description:
      "Bidhan Sen is an accomplished data analytics professional with a wealth of experience across tools like Power BI, Tableau, Python, SQL, Excel, and more. His career has led him through roles at Tata Consultancy Services, Brillio Technologies, and Amazon, progressing from System Engineer to Senior Data Engineer. Throughout his journey, Bidhan has developed expertise in managing ETL processes, creating dashboards and reports, conducting in-depth data analysis, and engaging with clients across diverse projects. At Brillio Technologies, he focused on using Power BI and Tableau to create insightful reports, analyze historical sales data, and develop dashboards that guided business strategies. His role at Amazon further highlights his skill in handling end-to-end ETL tasks, root cause analysis, and maintaining effective client communication. Certified as a Mi Microsoft Certified Data Analyst with the PL-300 credential, Bidhan demonstrates a strong commitment to delivering actionable insights and advancing the field of data analytics.",
    skills: [],
    experience: "8+ Years",
    students: "200+",
    linkedin: "#",
  },

  {
    id: 12,
    name: "Mr. Rohan Dixit",
    image: "/Trainers/john-doe.jpg",
    description:
      "Rohan Dixit is an experienced Data Science Consultant with deep expertise in Python, SQL, Power BI, and advanced analytics. With over four years of industry experience at leading organizations like Cipla and AstraZeneca, Rohan has a proven track record in predictive modeling, statistical analysis, and data visualization. Renowned for his mentoring skills, Rohan simplifies complex concepts and helps learners achieve their goals with confidence. His hands-on experience in applying analytics to real-world problems makes him an exceptional guide for aspiring data scientists.",
    skills: [],
    experience: "10+ Years",
    students: "200+",
    linkedin: "#",
  },
];

export default function TrainerGrid() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const openModal = (trainer) => setSelectedTrainer(trainer);
  const closeModal = () => setSelectedTrainer(null);

  const truncateText = (text, maxLength = 100) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  const floatingIconVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-blue-200 opacity-20"
          variants={floatingIconVariants}
          animate="animate"
        >
          <Brain size={80} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-purple-200 opacity-20"
          variants={floatingIconVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        >
          <Code size={60} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-40 text-cyan-200 opacity-20"
          variants={floatingIconVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          <Zap size={70} />
        </motion.div>
      </div> */}

      {/* Title with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
        //   whileHover={{ scale: 1.05 }}
        >
          {/* <Sparkles className="text-yellow-500" size={32} /> */}
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent heading-oswald mb-4 px-4 uppercase text-center">
            Meet Our Expert Trainers
          </h2>
          {/* <Sparkles className="text-yellow-500" size={32} /> */}
        </motion.div>
        <p className="text-gray-600 text-lg mt-2">
          Learn from industry professionals with real-world experience
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-4 md:px-12  mx-auto">
        {trainersData.map((trainer, index) => (
          <motion.div
            key={trainer.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onHoverStart={() => setHoveredCard(trainer.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative group"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer h-full flex flex-col relative"
              onClick={() => openModal(trainer)}
            >
              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                animate={
                  hoveredCard === trainer.id
                    ? {
                        background: [
                          "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                          "linear-gradient(90deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
                          "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 1, repeat: Infinity }}
              />

              {/* Image Container with Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="size-full object-cover bg-[#fff] object-top transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Award className="text-yellow-500" size={16} />
                  <span className="text-xs font-bold text-gray-800">
                    {trainer.experience}
                  </span>
                </motion.div>

                {/* Students Badge */}
                {trainer.students && (
                  <motion.div
                    className="absolute bottom-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full shadow-lg flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <TrendingUp size={16} />
                    <span className="text-sm font-bold">
                      {trainer.students} Students
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <motion.h3
                  className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  {/* <Brain className="text-[#1d8fff]" size={24} /> */}
                  {trainer.name}
                </motion.h3>

                <p className="text-gray-600 text-sm mb-2 flex-grow leading-tight">
                  {truncateText(trainer.description, 110)}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {trainer.skills.slice(0, 3).map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-1 py-1 text-xs bg-gradient-to-r from-blue-50 to-purple-50 text-[#1d8fff] rounded-full border border-blue-200 flex items-center gap-1"
                      whileHover={{ scale: 1.02, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      // transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <Star size={12} className="text-yellow-500" />
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* View Profile Button */}
                <motion.div
                  className="mt-auto pt-2 border-t border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between text-[#1d8fff] font-semibold">
                    <span className="flex items-center gap-2">
                      <Sparkles size={16} />
                      View Full Profile
                    </span>
                    <motion.span
                      animate={
                        hoveredCard === trainer.id ? { x: [0, 5, 0] } : {}
                      }
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <motion.div
            className="fixed inset-0 z-150 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, y: 50, opacity: 0, rotateX: 15 }}
              animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0, rotateX: 15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Header Background */}
              <div className="absolute top-0 left-0 right-0 h-full/5 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-10" />

              {/* Close Button */}
              <motion.button
                className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 rounded-full p-3 shadow-lg"
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              <div className="p-8">
                {/* Content */}
                <div className="flex flex-col md:flex-row gap-8 relative">
                  {/* Image */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative w-full md:w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={selectedTrainer.image}
                        alt={selectedTrainer.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute -bottom-3 -right-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4 shadow-lg"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Award className="text-white" size={24} />
                    </motion.div>
                  </motion.div>

                  {/* Details */}
                  <motion.div
                    className="flex flex-col gap-4 flex-1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div>
                      <motion.h2
                        className="text-4xl font-bold bg-gradient-to-r from-[#1d8fff] to-[#9333ea] bg-clip-text text-transparent flex items-center gap-3 mb-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {/* <Brain className="text-[#1d8fff]" size={32} /> */}
                        {selectedTrainer.name}
                      </motion.h2>

                      <div className="flex flex-wrap gap-4 mt-4">
                        <motion.div
                          className="flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-2 rounded-full border border-orange-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Briefcase className="text-orange-600" size={18} />
                          <span className="text-gray-700 font-medium">
                            {selectedTrainer.experience}
                          </span>
                        </motion.div>

                        {selectedTrainer.students && (
                          <motion.div
                            className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            <TrendingUp className="text-green-600" size={18} />
                            <span className="text-gray-700 font-medium">
                              {selectedTrainer.students} Students Trained
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Skills Section */}
                    <div>
                      <motion.h4
                        className="font-bold text-lg mb-3 flex items-center gap-2 text-gray-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Star className="text-yellow-500" size={20} />
                        Core Expertise
                      </motion.h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedTrainer.skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            className="px-4 py-2 text-sm bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200 text-gray-700 font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* LinkedIn Button */}
                    <motion.a
                      href={selectedTrainer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 mt-4 px-6 py-3 bg-gradient-to-r from-[#0077b5] to-[#00a0dc] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all w-fit"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      // transition={{ delay: 0.6 }}
                    >
                      <FaLinkedin size={20} />
                      Connect on LinkedIn
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 0.01, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.div
                  className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-gray-800">
                    <Sparkles className="text-purple-500" size={20} />
                    About
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedTrainer.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

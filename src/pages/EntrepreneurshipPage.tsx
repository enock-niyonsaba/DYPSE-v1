'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaArrowRight, 
  FaUsers, 
  FaChartLine,
  FaShieldAlt,
  FaGraduationCap,
  FaBuilding,
  FaSearch,
  FaBell,
  FaRobot,
  FaIdCard,
  FaComments,
  FaLinkedin,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaDesktop,
  FaTablet,
  FaUserGraduate,
  FaBriefcase,
  FaUserTie,
  FaNetworkWired,
  FaCogs,
  FaEye,
  FaLock,
  FaSync,
  FaChartBar,
  FaFileAlt,
  FaVideo,
  FaHeadset,
  FaCreditCard,
  FaCertificate,
  FaProjectDiagram,
  FaUsersCog,
  FaChartPie,
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaGlobe,
  FaStar,
  FaAward,
  FaTrophy,
  FaMedal
} from 'react-icons/fa';

export function EntrepreneurshipPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0033FF] to-[#000333DD] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Entrepreneurship Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Empowering young entrepreneurs to validate, launch, and grow successful businesses with comprehensive support and resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our entrepreneurship support programs
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Total Registered Businesses",
                value: "500+",
                description: "Young entrepreneurs who have started their journey",
                icon: <FaBuilding className="h-8 w-8" />,
                gradient: "from-[#0033FF] to-[#000333DD]"
              },
              {
                title: "Partnerships Formed",
                value: "150+",
                description: "Successful business collaborations and partnerships",
                icon: <FaHandshake className="h-8 w-8" />,
                gradient: "from-blue-600 to-blue-700"
              },
              {
                title: "Verified Entrepreneurs",
                value: "300+",
                description: "Entrepreneurs with validated business credentials",
                icon: <FaUsers className="h-8 w-8" />,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Success Rate",
                value: "85%",
                description: "Business survival rate after 2 years",
                icon: <FaChartLine className="h-8 w-8" />,
                gradient: "from-blue-400 to-blue-500"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A step-by-step process to validate and launch your entrepreneurial journey
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Business Registration",
                description: "Register your business idea and provide initial documentation for validation.",
                icon: <FaIdCard className="h-8 w-8" />,
                gradient: "from-green-500 to-green-600",
                step: "1"
              },
              {
                title: "Document Validation",
                description: "Upload business certificates, plans, and supporting documents for verification.",
                icon: <FaCertificate className="h-8 w-8" />,
                gradient: "from-blue-500 to-blue-600",
                step: "2"
              },
              {
                title: "Project Showcase",
                description: "Create compelling presentations and showcase your business to potential partners.",
                icon: <FaProjectDiagram className="h-8 w-8" />,
                gradient: "from-purple-500 to-purple-600",
                step: "3"
              },
              {
                title: "Partnership Matching",
                description: "Connect with mentors, investors, and potential business partners.",
                icon: <FaHandshake className="h-8 w-8" />,
                gradient: "from-orange-500 to-orange-600",
                step: "4"
              },
              {
                title: "Resource Access",
                description: "Access funding opportunities, training programs, and business development resources.",
                icon: <FaRocket className="h-8 w-8" />,
                gradient: "from-pink-500 to-pink-600",
                step: "5"
              },
              {
                title: "Growth & Scaling",
                description: "Receive ongoing support and guidance to scale your business successfully.",
                icon: <FaChartLine className="h-8 w-8" />,
                gradient: "from-indigo-500 to-indigo-600",
                step: "6"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-sm font-bold`}>
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Business Validation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Business Validation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive validation to ensure your business idea has potential and credibility
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What We Validate
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Plan Quality</h4>
                    <p className="text-gray-600">Comprehensive review of your business model, market analysis, and financial projections.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Market Viability</h4>
                    <p className="text-gray-600">Assessment of market demand, competition analysis, and growth potential.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Team Capabilities</h4>
                    <p className="text-gray-600">Evaluation of founding team skills, experience, and commitment to the venture.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Financial Sustainability</h4>
                    <p className="text-gray-600">Review of revenue model, cost structure, and funding requirements.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-6">
                    <FaShieldAlt className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Validation Benefits</h3>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>• Credibility with investors</li>
                    <li>• Access to funding opportunities</li>
                    <li>• Partnership opportunities</li>
                    <li>• Mentorship access</li>
                    <li>• Market exposure</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Project Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Present your business ideas and projects to a global audience of potential partners and investors
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Interactive Presentations",
                description: "Create engaging multimedia presentations with videos, images, and interactive elements to showcase your business.",
                icon: <FaVideo className="h-8 w-8" />,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Portfolio Management",
                description: "Build comprehensive portfolios showcasing your projects, achievements, and business milestones.",
                icon: <FaProjectDiagram className="h-8 w-8" />,
                gradient: "from-indigo-500 to-indigo-600"
              },
              {
                title: "Market Exposure",
                description: "Get your business in front of potential customers, partners, and investors through our platform.",
                icon: <FaGlobe className="h-8 w-8" />,
                gradient: "from-purple-500 to-purple-600"
              },
              {
                title: "Feedback & Ratings",
                description: "Receive valuable feedback and ratings from the community to improve your business.",
                icon: <FaStar className="h-8 w-8" />,
                gradient: "from-pink-500 to-pink-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership & Networking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partnership & Networking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with mentors, investors, and potential business partners to accelerate your growth
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Mentorship Network",
                description: "Access experienced entrepreneurs and business leaders who can guide you through challenges and opportunities.",
                icon: <FaUsersCog className="h-8 w-8" />,
                gradient: "from-green-500 to-green-600"
              },
              {
                title: "Investor Connections",
                description: "Connect with angel investors, venture capitalists, and funding organizations interested in youth entrepreneurship.",
                icon: <FaHandshake className="h-8 w-8" />,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Strategic Partnerships",
                description: "Find complementary businesses and organizations for strategic partnerships and collaborations.",
                icon: <FaNetworkWired className="h-8 w-8" />,
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              >
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real entrepreneurs who have transformed their ideas into successful businesses through DYPSE
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Sarah M.",
                business: "EcoTech Solutions",
                story: "Started with a simple idea for sustainable packaging. Through DYPSE validation and mentorship, secured $50K funding and now employs 15 people.",
                icon: <FaTrophy className="h-8 w-8" />,
                gradient: "from-yellow-500 to-yellow-600"
              },
              {
                name: "David K.",
                business: "Digital Learning Hub",
                story: "Created an online platform for skill development. Connected with strategic partners through DYPSE and now serves 10,000+ students.",
                icon: <FaMedal className="h-8 w-8" />,
                gradient: "from-blue-500 to-blue-600"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white mb-6`}>
                  {story.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                <h4 className="text-lg font-semibold text-green-400 mb-4">{story.business}</h4>
                <p className="text-gray-300 leading-relaxed">{story.story}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Entrepreneurial Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of successful entrepreneurs who have built their businesses with DYPSE support
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/signup" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Get Started <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-600 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
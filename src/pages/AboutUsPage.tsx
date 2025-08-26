'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaArrowRight, 
  FaUsers, 
  FaLightbulb, 
  FaHandshake, 
  FaChartLine,
  FaGlobe,
  FaRocket,
  FaShieldAlt,
  FaGraduationCap,
  FaBuilding
} from 'react-icons/fa';

export function AboutUsPage() {
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
              About DYPSE
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transforming youth employment through innovative technology and comprehensive skill mapping
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To bridge the gap between youth talents and opportunities by creating a dynamic ecosystem that connects job seekers, employed professionals, and entrepreneurs with meaningful opportunities for growth and development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe every young person deserves access to quality employment opportunities, skill development programs, and entrepreneurial support regardless of their background or location.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[#0033FF] to-[#000333DD] flex items-center justify-center text-white mx-auto mb-6">
                    <FaRocket className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision 2030</h3>
                  <p className="text-gray-600">
                    To become the leading platform for youth employment and skill development in Africa, connecting millions of young people with opportunities that transform their lives and communities.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why DYPSE Matters Section */}
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
              Why DYPSE Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Addressing critical challenges in youth employment and skill development
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Youth Unemployment Crisis",
                description: "Africa faces a critical youth unemployment challenge with limited access to verified opportunities and professional networks.",
                icon: <FaUsers className="h-8 w-8" />,
                gradient: "from-[#0033FF] to-[#000333DD]"
              },
              {
                title: "Skills Gap",
                description: "There's a significant mismatch between the skills youth possess and what employers actually need in the market.",
                icon: <FaGraduationCap className="h-8 w-8" />,
                gradient: "from-blue-600 to-blue-700"
              },
              {
                title: "Limited Access",
                description: "Many young people lack access to quality job opportunities, entrepreneurial support, and professional development resources.",
                icon: <FaBuilding className="h-8 w-8" />,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Fragmented Ecosystem",
                description: "The employment ecosystem is fragmented with limited integration between different stakeholders and platforms.",
                icon: <FaHandshake className="h-8 w-8" />,
                gradient: "from-blue-400 to-blue-500"
              },
              {
                title: "Data Deficiency",
                description: "Lack of comprehensive data on youth skills, employment trends, and market demands for informed decision-making.",
                icon: <FaChartLine className="h-8 w-8" />,
                gradient: "from-blue-300 to-blue-400"
              },
              {
                title: "Innovation Gap",
                description: "Limited use of modern technology and AI to optimize job matching and skill development processes.",
                icon: <FaLightbulb className="h-8 w-8" />,
                gradient: "from-blue-200 to-blue-300"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                  </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </section>

      {/* Our Approach Section */}
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
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we&apos;re solving the youth employment challenge through innovative technology
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
                Technology-Driven Solutions
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-[#0033FF] flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Matching</h4>
                    <p className="text-gray-600">Advanced algorithms that match youth skills with job opportunities and entrepreneurial ventures.</p>
              </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-[#0033FF] flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Data</h4>
                    <p className="text-gray-600">Live updates on job opportunities, skill requirements, and market trends.</p>
              </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-[#0033FF] flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Integrated Ecosystem</h4>
                    <p className="text-gray-600">Seamless connection between youth, employers, institutions, and policymakers.</p>
              </div>
            </div>
          </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[#0033FF] to-[#000333DD] flex items-center justify-center text-white mx-auto mb-6">
                    <FaGlobe className="h-10 w-10" />
                        </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Impact</h3>
                  <p className="text-gray-600 mb-4">
                    Starting in Rwanda with plans to expand across Africa, creating opportunities for millions of young people.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#0033FF]">10+</div>
                      <div className="text-gray-600">Countries</div>
                      </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#000333DD]">1M+</div>
                      <div className="text-gray-600">Youth</div>
                </div>
              </div>
                        </div>
                      </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
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
                title: "Innovation",
                description: "Continuously pushing boundaries with cutting-edge technology and creative solutions.",
                icon: <FaLightbulb className="h-8 w-8" />,
                gradient: "from-[#0033FF] to-[#000333DD]"
              },
              {
                title: "Inclusion",
                description: "Ensuring equal access to opportunities for all youth regardless of background.",
                icon: <FaUsers className="h-8 w-8" />,
                gradient: "from-blue-600 to-blue-700"
              },
              {
                title: "Integrity",
                description: "Maintaining the highest standards of honesty, transparency, and ethical conduct.",
                icon: <FaShieldAlt className="h-8 w-8" />,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Impact",
                description: "Focusing on measurable outcomes that create real change in youth lives.",
                icon: <FaRocket className="h-8 w-8" />,
                gradient: "from-blue-400 to-blue-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mx-auto mb-6`}>
                  {value.icon}
                      </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
                  ))}
          </motion.div>
              </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0033FF] to-[#000333DD] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Us in This Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of the solution to youth unemployment and help create opportunities for the next generation
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/signup" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0033FF] bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Get Started <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-[#0033FF] md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
          </div>
        </section>
    </div>
  );
}

export default AboutUsPage;
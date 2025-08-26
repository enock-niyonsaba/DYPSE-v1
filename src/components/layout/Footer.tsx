'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram,
  FaGlobe,
  FaChevronDown,
  FaArrowUp
} from 'react-icons/fa';

export function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'RW', name: 'Kinyarwanda', flag: '🇷🇼' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-3">
                D
              </div>
              <span className="text-xl font-bold">DYPSE</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dynamic Youth Profiling System for Employment - Empowering youth through innovative technology and comprehensive skill mapping.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About DYPSE
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/entrepreneurship" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Entrepreneurship Hub
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Users</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/youth/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">
                  For Youth
                </Link>
              </li>
              <li>
                <Link href="/employer/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/admin/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">
                  For Policymakers
                </Link>
              </li>
              <li>
                <Link href="/admin/training-centers" className="text-gray-300 hover:text-white transition-colors duration-200">
                  For Training Institutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Language */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Language</h3>
            
            {/* Language Switcher */}
            <div className="mb-4">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 w-full justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <span>{languages.find(lang => lang.code === selectedLanguage)?.flag}</span>
                    <span>{languages.find(lang => lang.code === selectedLanguage)?.name}</span>
                  </div>
                  <FaChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 rounded-lg shadow-lg z-10">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setSelectedLanguage(language.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2 ${
                          selectedLanguage === language.code ? 'bg-gray-700' : ''
                        }`}
                      >
                        <span>{language.flag}</span>
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <FaEnvelope className="h-4 w-4" />
                <span>info@dypse.rw</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FaPhone className="h-4 w-4" />
                <span>+250 788 123 456</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FaMapMarkerAlt className="h-4 w-4" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 DYPSE. All rights reserved. | 
                             <Link href="/privacy" className="ml-2 hover:text-white transition-colors duration-200">
                 Privacy Policy
               </Link> | 
               <Link href="/terms" className="ml-2 hover:text-white transition-colors duration-200">
                 Terms of Service
               </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Powered by</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">ICT Chamber Rwanda</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm font-medium">DTP Rwanda</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}

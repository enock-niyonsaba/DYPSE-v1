'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import EmployerSidebar from './EmployerSidebar';
import EmployerNavbar from './EmployerNavbar';
import EmployerFooter from './EmployerFooter';
import {Chatbot} from '../chatbot/Chatbot';

interface EmployerLayoutProps {
  children: ReactNode;
}

const EmployerLayout: React.FC<EmployerLayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarCollapsed(true);
      } else {
        setIsSidebarCollapsed(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobile && 
        !isSidebarCollapsed && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isSidebarCollapsed]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`
          fixed md:relative z-30 h-full flex-shrink-0
          ${isSidebarCollapsed ? 'w-16' : 'w-64'} 
          transition-all duration-300 ease-in-out 
          bg-gradient-to-b from-blue-600 to-blue-700
          shadow-lg transform
          ${isMobile ? (isSidebarCollapsed ? '-translate-x-full' : 'translate-x-0') : 'translate-x-0'}
        `}
      >
        <EmployerSidebar 
          isCollapsed={isSidebarCollapsed} 
          onToggleSidebar={toggleSidebar}
        />
      </div>
      
      {/* Main Content */}
      <div className={` bg-gray-200 flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
        isMobile ? 'w-full' : ''
      }`}>
        {/* Navbar */}
        <div className="bg-white border-b border-gray-200 w-full">
          <EmployerNavbar onToggleSidebar={toggleSidebar} />
        </div>
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-200 p-4 md:p-6 w-full">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
        <Chatbot/>
        {/* Footer */}
        <div className="bg-white border-t border-gray-200 w-full">
          <EmployerFooter />
        </div>
      </div>
    </div>
  );
};

export default EmployerLayout;

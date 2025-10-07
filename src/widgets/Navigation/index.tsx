'use client';
import { FC, useEffect, useState } from 'react';

import SidebarMenu from '@/components/SidebarMenu';
import { AnimatePresence } from 'framer-motion';
import { LogoIcon } from '@/icons/ApproachIcons/LogoIcon';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface Props { }

const Index: FC<Props> = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const closeSidebar = () => {
    setIsActive(false);
    setTimeout(() => setShowLogo(true), 500);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsActive(false);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    document.addEventListener('keydown', handleEscape);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navigation Controls */}
      <div
        className={`fixed right-2 top-2 sm:right-4 sm:top-4 z-[9999] flex gap-2 sm:gap-3 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl sm:rounded-2xl px-2 py-2 sm:px-4 sm:py-3 shadow-lg'
          : ''
          }`}
      >
        <ThemeToggle />
        <button
          type="button"
          onClick={() => {
            if (!isActive) {
              setIsActive(true);
              setShowLogo(false);
            } else {
              setIsActive(false);
              setTimeout(() => setShowLogo(true), 500);
            }
          }}
          className="flex h-10 w-10 sm:h-12 sm:w-12 cursor-pointer items-center justify-center rounded-full bg-stone-400 dark:bg-gray-700 transition-colors duration-300 hover:bg-stone-500 dark:hover:bg-gray-600"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            {!isActive ? (
              // Hamburger icon
              <div className="w-5 h-4 flex flex-col justify-between">
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300"></div>
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300"></div>
                <div className="w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300"></div>
              </div>
            ) : (
              // Close icon (X)
              <div className="w-5 h-5 relative">
                <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45 transition-all duration-300"></div>
                <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-all duration-300"></div>
              </div>
            )}
          </div>
        </button>
      </div>

      {/* Logo */}
      <div
        className={`fixed left-2 top-2 sm:left-4 sm:top-4 z-[9998] transition-all duration-300 
         ${isScrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg sm:rounded-2xl p-1.5 sm:p-3 shadow-lg'
            : ''
          } 
         ${!showLogo ? 'hidden sm:block' : 'block'}
         ${isScrolled ? 'hidden sm:block' : ''}
       `}
      >
        <button title="your_agency_name" className="group">
          <LogoIcon className="text-[18px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl group-hover:text-black dark:group-hover:text-white/80 transition duration-300" />
        </button>
      </div>

      {/* Sidebar Menu */}
      <AnimatePresence mode="wait">
        {isActive && <SidebarMenu close={closeSidebar} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;

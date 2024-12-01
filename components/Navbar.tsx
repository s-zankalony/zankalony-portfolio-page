'use client';

import DarkModeToggle from './DarkModeToggle';
import About from './About';
import { useEffect, useState } from 'react';
import CollapsedNavbar from './CollapsedNavbar';
function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsCollapsed(scrollPosition > 100);
      // Collapses after 100px scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-[url('/images/navbar-bg-light.jpg')] dark:bg-[url('/images/navbar-bg.jpg')] bg-fixed transition-all duration-300 ease-in-out ${
          isCollapsed ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="max-w-[800px] w-[85%] mx-auto py-16 md:text-center relative">
          <h1 className="font-caveat font-normal text-5xl md:text-8xl leading-[0.9] mb-5 md:mb-4 text-shadow dark:text-shadow-dark">
            Sameh El Zankalony
          </h1>
          <h2 className="font-caveat font-normal text-3xl md:text-5xl leading-tight mb-6">
            Full Stack Developer
          </h2>
          {!isCollapsed && <About />}
        </div>
        <div className="absolute top-4 right-4">
          <DarkModeToggle />
        </div>
      </header>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isCollapsed
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
      >
        <CollapsedNavbar />
      </div>
    </>
  );
}
export default Navbar;

'use client';

import DarkModeToggle from './DarkModeToggle';
import About from './About';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Navigation */}
          <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled
                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg'
                : 'bg-transparent'
            }`}
          >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h1 className="font-caveat text-2xl font-bold text-gray-900 dark:text-white">
                  Sameh El Zankalony
                </h1>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#projects"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Education
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </div>

              <DarkModeToggle />
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-caveat font-bold text-gray-900 dark:text-white leading-tight">
                  Sameh El
                  <span className="block text-blue-600 dark:text-blue-400">
                    Zankalony
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300">
                  Full Stack Developer
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                  Passionate about creating exceptional web experiences with
                  modern technologies. Specialized in React, Next.js, and
                  full-stack development.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link
                    href="/Sameh_El_Zankalony_Full_Stack_Developer.pdf"
                    target="_blank"
                  >
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <About />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Navbar;

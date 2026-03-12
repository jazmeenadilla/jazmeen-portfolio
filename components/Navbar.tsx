// src/components/Navbar.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-50 h-20 bg-transparent flex items-center justify-between px-6 md:px-20 transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-black dark:bg-slate-800 flex items-center justify-center text-xl font-bold font-sans tracking-widest text-white dark:text-teal-500 cursor-pointer shadow-md">
              JA
          </div>
      </header>
    );
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-slate-900/50 py-4' : 'bg-transparent py-5'} px-6 md:px-20 flex items-center justify-between`}>
      {/* Logo Personalized */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-10 h-10 rounded-full bg-black dark:bg-slate-800 flex items-center justify-center text-xl font-bold font-sans tracking-widest text-white dark:text-teal-500 cursor-pointer shadow-md"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        JA
      </motion.div>

      {/* Navigation Links & Theme Toggle */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-6 text-sm md:text-base text-slate-700 dark:text-slate-300 font-mono"
      >
        <a href="#about" className="hover:text-black dark:hover:text-teal-400 transition-colors hidden sm:block">About</a>
        <a href="#skills" className="hover:text-black dark:hover:text-teal-400 transition-colors hidden sm:block">Toolkit</a>
        <a href="#projects" className="hover:text-black dark:hover:text-teal-400 transition-colors hidden sm:block">Projects</a>
        <a href="#contact" className="hover:text-black dark:hover:text-teal-400 transition-colors hidden sm:block">Contact</a>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="ml-2 p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-black dark:text-teal-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-teal-500/50"
          aria-label="Toggle Theme"
        >
          {resolvedTheme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </motion.nav>
    </header>
  );
};

export default Navbar;

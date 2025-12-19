'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/src/components/Footer';

export default function Home() {
  const [trustedUsers] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="navbar fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                <Image src="/images/logo.png" alt="Nexus Logo" width={48} height={48} className="object-contain" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Nexus
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/features" className="navbar-link text-lg whitespace-nowrap">Features</Link>
              <Link href="/demo" className="navbar-link text-lg whitespace-nowrap">Demo</Link>
              <Link href="/gallery" className="navbar-link text-lg whitespace-nowrap">Photo Gallery</Link>
              <Link href="/contact" className="navbar-link text-lg whitespace-nowrap">Contact Us</Link>
              <Link href="/privacy" className="navbar-link text-lg whitespace-nowrap">Privacy Policy</Link>
              <Link href="/terms" className="navbar-link text-lg whitespace-nowrap">Terms & Conditions</Link>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 sm:pt-40 lg:pt-48 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">

            {/* Left Content */}
            <div className="space-y-12 text-center lg:text-left flex-1 max-w-lg">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                Transform Any{' '}
                <span className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Experience
                </span>
                {' '}Into a{' '}
                <span className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Seamless Journey
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Nexus is your all-in-one platform that makes everything faster, more secure,
                and completely user-friendly. Access your world through our mobile apps,
                web platform, and browser extension.
              </p>

              {/* Download Buttons */}
              <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-up w-full pt-8" style={{ animationDelay: '0.4s' }}>
                {/* Android App Button */}
                <div className="relative">
                  <a
                    href="#"
                    className="btn btn-primary group w-full whitespace-nowrap pointer-events-none"
                  >
                    <svg className="w-6 h-6 transition-transform group-hover:scale-110 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.6 11.4c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1.5 1.1 1.1 1.1 1.1-.5 1.1-1.1m-9.1 0c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1.5 1.1 1.1 1.1 1.1-.5 1.1-1.1m9.4-4.8l1.5-2.6c.1-.2 0-.4-.2-.5-.2-.1-.4 0-.5.2l-1.5 2.6c-1.3-.6-2.7-.9-4.2-.9s-2.9.3-4.2.9L7.3 3.7c-.1-.2-.3-.3-.5-.2-.2.1-.3.3-.2.5l1.5 2.6C5.7 7.8 4 10.4 4 13.5h16c0-3.1-1.7-5.7-4.1-6.9M4 14.5v6c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5-.7 1.5-1.5v-6H4m13 0v6c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5-.7 1.5-1.5v-6h-4m-9 0v7c0 .8.7 1.5 1.5 1.5h5c.8 0 1.5-.7 1.5-1.5v-7H8z" />
                    </svg>
                    <span>Download Android</span>
                  </a>
                  {/* Blur overlay with lock */}
                  <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>

                {/* iOS App Button */}
                <div className="relative">
                  <a
                    href="#"
                    className="btn btn-secondary group w-full whitespace-nowrap pointer-events-none"
                  >
                    <svg className="w-6 h-6 transition-transform group-hover:scale-110 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span>Download iOS</span>
                  </a>
                  {/* Blur overlay with lock */}
                  <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>

                {/* Web App Button */}
                <div className="relative">
                  <a
                    href="#"
                    className="btn btn-primary group w-full whitespace-nowrap pointer-events-none"
                  >
                    <svg className="w-6 h-6 transition-transform group-hover:scale-110 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span>Use Web App</span>
                  </a>
                  {/* Blur overlay with lock */}
                  <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>

                {/* Chrome Extension Button */}
                <div className="relative">
                  <a
                    href="#"
                    className="btn btn-outline group w-full whitespace-nowrap pointer-events-none"
                  >
                    <svg className="w-6 h-6 transition-transform group-hover:scale-110 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
                    </svg>
                    <span>Browser Extension</span>
                  </a>
                  {/* Blur overlay with lock */}
                  <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Logo/Product Visual */}
            <div className="flex items-center justify-center animate-fade-in flex-1" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Main Logo Container - Unique Hexagonal/Circular Design */}
                <div className="logo-container-unique animate-float">
                  {/* Outer Glowing Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-cyan-400 to-teal-400 blur-xl opacity-50 animate-pulse"></div>

                  {/* Middle Ring with Gradient Border - BIGGER SIZE */}
                  <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-cyan-500 via-cyan-400 to-teal-400 p-2 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                      {/* Inner Logo Area */}
                      <div className="text-center">
                        <div className="group w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 rounded-2xl rotate-12 hover:rotate-0 flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-transform duration-500 overflow-hidden border border-cyan-500/30">
                          <Image src="/images/logo.png" alt="Nexus Logo" width={120} height={120} className="rotate-[-18deg] group-hover:rotate-0 transition-transform duration-500 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                        </div>
                        <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-xl">Nexus</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Orbit Elements */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-4 left-0 w-6 h-6 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 -right-4 w-4 h-4 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full shadow-lg animate-pulse"></div>
                </div>

                {/* Trusted Badge */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 active-users-badge">
                  <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">Trusted by {trustedUsers} Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}





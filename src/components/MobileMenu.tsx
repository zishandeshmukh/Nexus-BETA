'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/demo', label: 'Demo' },
    { href: '/gallery', label: 'Photo Gallery' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Button - Enhanced Visibility */}
      <button
        onClick={toggleMenu}
        className="p-3 rounded-xl bg-cyan-500/10 dark:bg-cyan-400/10 border-2 border-cyan-500/30 dark:border-cyan-400/30 hover:bg-cyan-500/20 dark:hover:bg-cyan-400/20 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all active:scale-95 shadow-lg"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-cyan-600 dark:text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay with Strong Blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 animate-fade-in"
          onClick={closeMenu}
          style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
        />
      )}

      {/* Mobile Menu Panel - Enhanced Design */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-all duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col bg-gradient-to-b from-white via-white to-cyan-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-6 pb-6 border-b-2 border-cyan-500/20 dark:border-cyan-400/20">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Navigation
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Explore Nexus</p>
            </div>
            <button
              onClick={closeMenu}
              className="p-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all active:scale-95 group border-2 border-transparent hover:border-red-200 dark:hover:border-red-800"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links - Enhanced Visibility */}
          <nav className="space-y-3 flex-1 overflow-y-auto">
            {links.map((link, index) => {
              const icons = {
                '/': (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                '/features': (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                '/demo': (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                '/gallery': (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                '/contact': (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                '/privacy': (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                '/terms': (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              };

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`group block rounded-2xl text-lg font-bold transition-all duration-300 ${
                    pathname === link.href
                      ? 'bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 text-white shadow-2xl shadow-cyan-500/50 scale-[1.02] ring-4 ring-cyan-300/50'
                      : 'bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 dark:hover:from-cyan-900/40 dark:hover:to-teal-900/40 hover:shadow-xl hover:scale-[1.02] border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-600'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4 p-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 p-2 rounded-xl ${
                      pathname === link.href
                        ? 'bg-white/20'
                        : 'bg-cyan-100 dark:bg-cyan-900/30 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/50'
                    }`}>
                      <div className={pathname === link.href ? 'text-white' : 'text-cyan-600 dark:text-cyan-400'}>
                        {icons[link.href as keyof typeof icons]}
                      </div>
                    </div>
                    
                    {/* Text */}
                    <div className="flex-1">
                      <span className="block">{link.label}</span>
                      {pathname === link.href && (
                        <span className="block text-xs font-normal text-white/80 mt-0.5">Current page</span>
                      )}
                    </div>
                    
                    {/* Arrow */}
                    <svg 
                      className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                        pathname === link.href 
                          ? 'text-white' 
                          : 'text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t-2 border-cyan-500/20 dark:border-cyan-400/20">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              © 2024 Nexus. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

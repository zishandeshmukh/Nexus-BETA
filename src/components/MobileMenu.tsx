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

      {/* Mobile Menu Overlay - SOLID NO BLUR */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[9998]"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel - COMPLETELY SOLID */}
      <div
        className={`fixed top-0 right-0 bottom-0 h-screen w-[90%] max-w-md bg-white dark:bg-slate-900 shadow-2xl z-[9999] transform transition-all duration-300 ease-out will-change-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          position: 'fixed',
          overscrollBehavior: 'contain'
        }}
      >
        {/* Solid Background Container */}
        <div className="p-5 h-full flex flex-col bg-white dark:bg-slate-900">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 pb-5 border-b-4 border-cyan-500 dark:border-cyan-400">
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                MENU
              </h2>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mt-1">Choose a page below</p>
            </div>
            <button
              onClick={closeMenu}
              className="p-3 rounded-xl bg-red-100 dark:bg-red-900/40 hover:bg-red-200 dark:hover:bg-red-800/60 transition-all active:scale-95 border-2 border-red-300 dark:border-red-700"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-red-700 dark:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links - CRYSTAL CLEAR */}
          <nav 
            className="space-y-3 flex-1 overflow-y-auto overflow-x-hidden pr-2 relative" 
            style={{ 
              maxHeight: 'calc(100vh - 200px)',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {links.map((link, index) => {
              const icons = {
                '/': (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                '/features': (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                '/demo': (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                '/gallery': (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                '/contact': (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                '/privacy': (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                '/terms': (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              };

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`group block rounded-2xl transition-all duration-200 ${
                    pathname === link.href
                      ? 'bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 shadow-xl'
                      : 'bg-gray-100 dark:bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 dark:hover:from-cyan-900/50 dark:hover:to-teal-900/50 hover:shadow-lg border-3 border-gray-300 dark:border-gray-600 hover:border-cyan-400 dark:hover:border-cyan-500'
                  }`}
                >
                  <div className="flex items-center gap-4 p-5">
                    {/* Icon Container */}
                    <div className={`flex-shrink-0 p-3 rounded-xl ${
                      pathname === link.href
                        ? 'bg-white/25'
                        : 'bg-cyan-500 dark:bg-cyan-600 group-hover:bg-cyan-600 dark:group-hover:bg-cyan-500'
                    }`}>
                      <div className={pathname === link.href ? 'text-white' : 'text-white'}>
                        {icons[link.href as keyof typeof icons]}
                      </div>
                    </div>
                    
                    {/* Text */}
                    <div className="flex-1">
                      <span className={`block font-black ${
                        pathname === link.href 
                          ? 'text-white text-xl' 
                          : 'text-gray-900 dark:text-white text-lg group-hover:text-gray-900 dark:group-hover:text-white'
                      }`}>
                        {link.label}
                      </span>
                      {pathname === link.href && (
                        <span className="block text-sm font-semibold text-white/90 mt-1">You are here</span>
                      )}
                    </div>
                    
                    {/* Arrow */}
                    <svg 
                      className={`w-7 h-7 flex-shrink-0 transition-transform duration-200 ${
                        pathname === link.href 
                          ? 'text-white' 
                          : 'text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth={3}
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
          <div className="mt-5 pt-5 border-t-4 border-gray-300 dark:border-gray-700">
            <p className="text-sm text-center font-bold text-gray-700 dark:text-gray-300">
              © 2024 Nexus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

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

          {/* Navigation Links */}
          <nav className="space-y-2 flex-1 overflow-y-auto">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block px-5 py-4 rounded-xl text-base font-semibold transition-all active:scale-98 ${
                  pathname === link.href
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-white shadow-lg shadow-cyan-500/40 scale-105'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:translate-x-2 hover:shadow-md border-2 border-transparent hover:border-cyan-200 dark:hover:border-cyan-800'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${pathname === link.href ? 'rotate-0' : 'group-hover:translate-x-1'}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </Link>
            ))}
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

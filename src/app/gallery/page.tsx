'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import ThemeToggle from '@/src/components/ThemeToggle';
import MobileMenu from '@/src/components/MobileMenu';

export default function Gallery() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navbar */}
            <nav className="navbar fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden"><Image src="/images/logo.png" alt="Nexus Logo" width={48} height={48} className="object-cover" /></div>
                            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Nexus
                            </span>
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/" className="navbar-link text-lg whitespace-nowrap">← Home</Link>
                            <Link href="/features" className="navbar-link text-lg whitespace-nowrap">Features</Link>
                            <Link href="/demo" className="navbar-link text-lg whitespace-nowrap">Demo</Link>
                            <Link href="/gallery" className="navbar-link text-lg whitespace-nowrap text-cyan-600">Photo Gallery</Link>
                            <Link href="/contact" className="navbar-link text-lg whitespace-nowrap">Contact Us</Link>
                            <Link href="/privacy" className="navbar-link text-lg whitespace-nowrap">Privacy Policy</Link>
                            <Link href="/terms" className="navbar-link text-lg whitespace-nowrap">Terms & Conditions</Link>
                        </div>
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main className="pt-24 sm:pt-32 lg:pt-48 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
                <div className="w-full content-box px-4 sm:px-8 lg:px-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Photo Gallery
                    </h1>

                    <div className="space-y-8">
                        {/* Browser Extension Box */}
                        <div className="contact-glass-box">
                            <h2 className="text-2xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">
                                Browser Extension
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden p-4 flex items-center justify-center min-h-[250px]">
                                    <Image src="/images/extension_screenshot_1.jpg" alt="Ask Nexus AI Chat" width={400} height={225} className="w-full h-auto object-contain rounded-lg" />
                                </div>
                                <div className="bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden p-4 flex items-center justify-center min-h-[250px]">
                                    <Image src="/images/extension_screenshot_2.jpg" alt="Capture Memory Form" width={400} height={225} className="w-full h-auto object-contain rounded-lg" />
                                </div>
                                <div className="bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden p-4 flex items-center justify-center min-h-[250px]">
                                    <Image src="/images/extension_screenshot_3.jpg" alt="Extension Popup" width={400} height={225} className="w-full h-auto object-contain rounded-lg" />
                                </div>
                            </div>
                        </div>

                        {/* Smartphone App Box */}
                        <div className="contact-glass-box">
                            <h2 className="text-2xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">
                                Smartphone App
                            </h2>
                            <div className="flex justify-center gap-8 flex-wrap">
                                <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-center" style={{width: '220px', minHeight: '400px'}}>
                                    <Image src="/images/app_screenshot_1.jpg" alt="New Memory Screen" width={192} height={341} className="w-full h-auto object-contain rounded-lg shadow-lg" />
                                </div>
                                <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-center" style={{width: '220px', minHeight: '400px'}}>
                                    <Image src="/images/app_screenshot_2.jpg" alt="Home Screen" width={192} height={341} className="w-full h-auto object-contain rounded-lg shadow-lg" />
                                </div>
                                <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-center" style={{width: '220px', minHeight: '400px'}}>
                                    <Image src="/images/app_screenshot_3.jpg" alt="Memory Details" width={192} height={341} className="w-full h-auto object-contain rounded-lg shadow-lg" />
                                </div>
                            </div>
                        </div>

                        {/* Dashboard Box */}
                        <div className="contact-glass-box">
                            <h2 className="text-2xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">
                                Dashboard
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-center min-h-[300px]">
                                    <Image src="/images/dashboard_screenshot_1.jpg" alt="Memory Details Modal" width={600} height={338} className="w-full h-auto object-contain rounded-lg shadow-lg" />
                                </div>
                                <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-center min-h-[300px]">
                                    <Image src="/images/dashboard_screenshot_2.jpg" alt="Dashboard Home" width={600} height={338} className="w-full h-auto object-contain rounded-lg shadow-lg" />
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




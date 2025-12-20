'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import ThemeToggle from '@/src/components/ThemeToggle';
import MobileMenu from '@/src/components/MobileMenu';

export default function Terms() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navbar */}
            <nav className="navbar fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-12 py-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden"><Image src="/images/logo.png" alt="Nexus Logo" width={48} height={48} className="object-cover" /></div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Nexus
                            </span>
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/" className="navbar-link text-lg whitespace-nowrap">← Home</Link>
                            <Link href="/features" className="navbar-link text-lg whitespace-nowrap">Features</Link>
                            <Link href="/demo" className="navbar-link text-lg whitespace-nowrap">Demo</Link>
                            <Link href="/gallery" className="navbar-link text-lg whitespace-nowrap">Photo Gallery</Link>
                            <Link href="/contact" className="navbar-link text-lg whitespace-nowrap">Contact Us</Link>
                            <Link href="/privacy" className="navbar-link text-lg whitespace-nowrap">Privacy Policy</Link>
                            <Link href="/terms" className="navbar-link text-lg whitespace-nowrap text-cyan-600">Terms & Conditions</Link>
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
                <div className="relative w-full">
                    <div className="w-full content-box text-center">
                        <h1 className="text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            Terms & Conditions
                        </h1>

                        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed list-disc list-inside text-left">
                            <li>
                                Welcome to Nexus. By accessing or using our platform, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding.
                            </li>
                            <li>
                                To use Nexus, you must be at least 18 years old or have parental consent. You are responsible for maintaining the confidentiality of your account credentials.
                            </li>
                            <li>
                                Our services are provided "as is" without warranties of any kind. We strive to maintain high availability but cannot guarantee uninterrupted access at all times.
                            </li>
                            <li>
                                You agree to use Nexus only for lawful purposes and in accordance with these terms. Prohibited activities include unauthorized access, data scraping, and distribution of harmful content.
                            </li>
                            <li>
                                All content, trademarks, and intellectual property on Nexus remain the property of Nexus Inc. You may not reproduce, distribute, or create derivative works without permission.
                            </li>
                            <li>
                                We reserve the right to suspend or terminate accounts that violate these terms or engage in activities that harm our platform or other users.
                            </li>
                            <li>
                                Nexus is not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount you paid for the service.
                            </li>
                            <li>
                                These terms are governed by the laws of the jurisdiction where Nexus Inc. is incorporated. Any disputes will be resolved through binding arbitration. Last updated: December 2024.
                            </li>
                        </ul>
                    </div>
                    {/* Blur overlay with lock */}
                    <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                        <div className="text-center">
                            <svg className="w-20 h-20 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">Coming Soon</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}



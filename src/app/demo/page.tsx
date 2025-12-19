'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import ThemeToggle from '@/src/components/ThemeToggle';

export default function Demo() {
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
                            <Link href="/demo" className="navbar-link text-lg whitespace-nowrap text-cyan-600">Demo</Link>
                            <Link href="/gallery" className="navbar-link text-lg whitespace-nowrap">Photo Gallery</Link>
                            <Link href="/contact" className="navbar-link text-lg whitespace-nowrap">Contact Us</Link>
                            <Link href="/privacy" className="navbar-link text-lg whitespace-nowrap">Privacy Policy</Link>
                            <Link href="/terms" className="navbar-link text-lg whitespace-nowrap">Terms & Conditions</Link>
                        </div>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main className="pt-48 pb-32 px-8 flex-1 flex items-center justify-center">
                <div className="relative w-full">
                    <div className="w-full content-box text-center">
                        <h1 className="text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            Demo
                        </h1>

                        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed list-disc list-inside text-left">
                            <li>
                                Welcome to the Nexus Demo experience! Here you can explore all the amazing features our platform has to offer before making a commitment. Our interactive demo gives you a hands-on preview.
                            </li>
                            <li>
                                Try our intuitive interface with sample data to see how Nexus can streamline your workflow. Navigate through different sections and discover the power of seamless integration.
                            </li>
                            <li>
                                The demo environment includes access to all core features including the dashboard, analytics, and collaboration tools. Experience everything Nexus has to offer.
                            </li>
                            <li>
                                Watch our video tutorials to learn how to make the most of Nexus capabilities. Our step-by-step guides will have you up and running in no time.
                            </li>
                            <li>
                                Schedule a personalized demo session with our product specialists who can walk you through specific use cases relevant to your needs.
                            </li>
                            <li>
                                Join our weekly live webinars where we showcase new features and answer questions from the community. It's a great way to stay updated.
                            </li>
                            <li>
                                Download our sample projects and templates to see real-world applications of Nexus in action across various industries.
                            </li>
                            <li>
                                Ready to get started? Sign up for a free trial and experience the full power of Nexus with your own data.
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



'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import ThemeToggle from '@/src/components/ThemeToggle';
import MobileMenu from '@/src/components/MobileMenu';

export default function Features() {
    const features = [
        {
            image: '/images/universalContentCapture.png',
            title: 'Universal Content Capture',
            description: 'Save from Twitter/X, YouTube, Instagram, LinkedIn, Reddit, and any website'
        },
        {
            image: '/images/aiAnalysis.png',
            title: 'AI Analysis',
            description: 'Automatic summary, key points extraction, sentiment analysis'
        },
        {
            image: '/images/intelligentSearch.png',
            title: 'Intelligent Search',
            description: 'Find memories by keyword, tag, or semantic meaning'
        },
        {
            image: '/images/aiChat.png',
            title: 'AI Chat',
            description: 'Ask questions about your saved content'
        },
        {
            image: '/images/moodTracking.png',
            title: 'Mood Tracking',
            description: 'Track emotional patterns over time'
        },
        {
            image: '/images/timelineView.png',
            title: 'Timeline View',
            description: 'Visual chronological organization'
        },
        {
            image: '/images/offlineSupport.png',
            title: 'Offline Support',
            description: 'Works without internet, syncs when online'
        },
        {
            image: '/images/crossPlatform.png',
            title: 'Cross-Platform',
            description: 'Android app, Web interface, Chrome extension'
        },
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navbar */}
            <nav className="navbar fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-12 py-6">
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
                            <Link href="/features" className="navbar-link text-lg whitespace-nowrap text-cyan-600">Features</Link>
                            <Link href="/demo" className="navbar-link text-lg whitespace-nowrap">Demo</Link>
                            <Link href="/gallery" className="navbar-link text-lg whitespace-nowrap">Photo Gallery</Link>
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
                <div className="w-full content-box px-12">
                    <h1 className="text-5xl font-bold mb-20 text-center bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Features
                    </h1>

                    {/* Feature Cards */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card group"
                            >
                                {/* Image Container */}
                                <div className="w-full h-48 mb-4 rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30 flex items-center justify-center overflow-hidden">
                                    {feature.image ? (
                                        <div className="relative w-32 h-32">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Text Content */}
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}




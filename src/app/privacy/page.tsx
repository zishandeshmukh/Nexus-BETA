'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import ThemeToggle from '@/src/components/ThemeToggle';

export default function PrivacyPolicy() {
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
                            <Link href="/privacy" className="navbar-link text-lg whitespace-nowrap text-cyan-600">Privacy Policy</Link>
                            <Link href="/terms" className="navbar-link text-lg whitespace-nowrap">Terms & Conditions</Link>
                        </div>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main className="pt-48 pb-32 px-8 flex-1 flex items-center justify-center">
                <div className="w-full content-box">
                    <h1 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>

                    <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed list-none text-left max-w-4xl mx-auto">
                        <li>
                            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Information Collection</h3>
                            <p>The app collects personal information such as name, email address, and profile details provided during the sign-up process.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Data Usage</h3>
                            <p>Data is used exclusively to facilitate core features, such as creating posts, managing user profiles, and enabling social interactions within the Nexus community.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Authentication Security</h3>
                            <p>We use secure authentication providers (like Clerk) to ensure that passwords and sensitive credentials are encrypted and never stored in plain text.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Third-Party Services</h3>
                            <p>We use third-party platforms for database management (e.g., MongoDB/Prisma) and media storage (e.g., Cloudinary), ensuring users know how their assets are handled securely.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">User Ownership and Control</h3>
                            <p>Users retain full ownership of their content and have the right to modify or permanently delete their data from the platform at any time.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">No Data Commercialization</h3>
                            <p>Nexus does not sell user data or browsing habits to third-party advertisers or data brokers.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Cookies and Local Storage</h3>
                            <p>The site may use cookies or local storage solely for maintaining active login sessions and improving site performance.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Privacy Updates</h3>
                            <p>We commit to notifying users of any significant changes to the privacy policy through the landing page or via email notification.</p>
                        </li>
                    </ul>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}



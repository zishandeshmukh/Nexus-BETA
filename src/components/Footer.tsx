import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-slate-900 dark:bg-slate-950 text-gray-300">
            {/* Main Footer Content */}
            <div className="w-full px-20 md:px-28 lg:px-36 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image src="/images/logo.png" alt="Nexus Logo" width={40} height={40} className="object-cover" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                                Nexus
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Making digital experiences seamless, secure, and efficient for everyone.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-cyan-400 font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-cyan-300 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/demo" className="text-gray-400 hover:text-cyan-300 transition-colors">
                                    Demo
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-cyan-300 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-cyan-300 transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-gray-400 hover:text-cyan-300 transition-colors">
                                    Features
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-cyan-400 font-semibold text-lg mb-6">Contact Us</h3>
                        <p className="text-gray-400 mb-3">
                            nexusteamdesk@gmail.com
                        </p>
                        <p className="text-gray-400">
                            Need immediate help? Visit our{' '}
                            <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                Contact Us
                            </Link>{' '}
                            page.
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-800">
                <div className="w-full py-6">
                    <p className="text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} Nexus. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

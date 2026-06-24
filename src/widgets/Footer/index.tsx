'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

interface Props { }

const Index: FC<Props> = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/923001234567',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
        },
    ];

    const quickLinks = [
        { name: 'Home', href: '#main' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        'Web Development',
        'Mobile Apps',
        'UI/UX Design',
        'Branding',
        'API Development',
    ];

    return (
        <footer className="relative border-t border-border-light dark:border-gray-800 bg-bg-1-light dark:bg-bg-1-dark transition-colors duration-300">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-bold text-text-1-light dark:text-text-1-dark mb-3">
                            Coderizz
                        </h3>
                        <p className="text-sm text-text-1-light/60 dark:text-text-1-dark/60 leading-relaxed mb-6">
                            An innovative software agency from Pakistan, turning ideas into reality through design, development, and technology.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-3">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-text-1-light/60 dark:text-text-1-dark/60 hover:text-text-1-light dark:hover:text-text-1-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    title={link.name}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-text-1-light dark:text-text-1-dark mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-text-1-light/60 dark:text-text-1-dark/60 hover:text-text-1-light dark:hover:text-text-1-dark transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-text-1-light dark:text-text-1-dark mb-4">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-sm text-text-1-light/60 dark:text-text-1-dark/60">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-text-1-light dark:text-text-1-dark mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-text-1-light/60 dark:text-text-1-dark/60">
                                hello@coderizz.com
                            </li>
                            <li className="text-sm text-text-1-light/60 dark:text-text-1-dark/60">
                                +92 300 123 4567
                            </li>
                            <li className="text-sm text-text-1-light/60 dark:text-text-1-dark/60">
                                Karachi, Pakistan
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border-light/50 dark:border-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-text-1-light/50 dark:text-text-1-dark/50">
                            © 2025–2026 Coderizz. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <span className="text-xs text-text-1-light/40 dark:text-text-1-dark/40">
                                Mushahid · Zaid · Kazim
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Index;

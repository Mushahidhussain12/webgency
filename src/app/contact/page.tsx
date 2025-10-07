'use client';

import { FC, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import Navigation from '@/widgets/Navigation';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import ShadowCursor from '@/components/ui/ShadowCursor';

const ContactPage: FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        first: '',
        phone: '',
        email: '',
        company: '',
        websiteUrl: '',
        message: '',
        _service: '',
        _budget: '',
        _pages: '',
        _quickness: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xrbylvar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setNotification({ type: 'success', message: 'Thank you for your submission! We will get back to you soon.' });
                setFormData({
                    first: '',
                    phone: '',
                    email: '',
                    company: '',
                    websiteUrl: '',
                    message: '',
                    _service: '',
                    _budget: '',
                    _pages: '',
                    _quickness: ''
                });
                // Auto-hide notification after 5 seconds
                setTimeout(() => setNotification(null), 5000);
            } else {
                setNotification({ type: 'error', message: 'There was an error submitting the form. Please try again.' });
                setTimeout(() => setNotification(null), 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setNotification({ type: 'error', message: 'There was an error submitting the form. Please try again.' });
            setTimeout(() => setNotification(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Navigation />

            <section className="min-h-screen bg-gradient-to-b from-bg-1-light to-bg-2-light dark:from-bg-1-dark dark:to-bg-2-dark py-16 md:py-24 lg:py-32">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gray-200/20 dark:bg-gray-800/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gray-300/20 dark:bg-gray-700/20 rounded-full blur-3xl" />
                </div>

                <SectionOpacity classes="relative z-10">
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                    >
                        {/* Page Title */}
                        <motion.div variants={itemVariants} className="text-center mb-8 md:mb-16">
                            <SectionTitle title="CONTACT US." classes="mb-4 md:mb-6" />
                            <motion.div
                                variants={itemVariants}
                                className="w-16 md:w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto rounded-full"
                            />
                            <motion.p
                                variants={itemVariants}
                                className="mt-4 md:mt-6 text-sm md:text-lg text-text-1-light/70 dark:text-text-1-dark/70 max-w-2xl mx-auto px-4"
                            >
                                Get in touch with us to discuss your project requirements
                            </motion.p>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants} className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 lg:p-12 border border-border-light/50 dark:border-gray-1/50 shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                                {/* Basic Information */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="first"
                                            value={formData.first}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300"
                                            placeholder="Your name"
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300"
                                            placeholder="Your phone number"
                                            required
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300"
                                        placeholder="your@email.com"
                                    />
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                            Company Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300"
                                            placeholder="Your company name"
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                            Company Website
                                        </label>
                                        <input
                                            type="url"
                                            name="websiteUrl"
                                            value={formData.websiteUrl}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300"
                                            placeholder="https://yourcompany.com"
                                        />
                                    </motion.div>
                                </div>

                                {/* Service Selection */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                        What type of services do you need?
                                    </label>
                                    <select
                                        name="_service"
                                        value={formData._service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="design/branding">Design/Branding</option>
                                        <option value="web-dev">Web Development</option>
                                        <option value="mobile-dev">Mobile Development</option>
                                        <option value="all-types">All of the above</option>
                                        <option value="other-service">Other</option>
                                    </select>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                            Budget Range
                                        </label>
                                        <select
                                            name="_budget"
                                            value={formData._budget}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300"
                                        >
                                            <option value="">Select budget</option>
                                            <option value="2-4">$2000 - $4000</option>
                                            <option value="4-8">$4000 - $8000</option>
                                            <option value="8-10">$8000 - $10000</option>
                                            <option value="10+">$10000+</option>
                                        </select>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                            Project Pages
                                        </label>
                                        <select
                                            name="_pages"
                                            value={formData._pages}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300"
                                        >
                                            <option value="">Select pages</option>
                                            <option value="<5">Less than 5</option>
                                            <option value="6-10">6-10</option>
                                            <option value="11-20">11-20</option>
                                            <option value="20+">20+</option>
                                        </select>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.9 }}
                                    >
                                        <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                            Timeline
                                        </label>
                                        <select
                                            name="_quickness"
                                            value={formData._quickness}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300"
                                        >
                                            <option value="">Select timeline</option>
                                            <option value="max-fast">As fast as possible</option>
                                            <option value="high-prio">High priority</option>
                                            <option value="regular">Regular time</option>
                                            <option value="take-your-time">Take your time</option>
                                        </select>
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.0 }}
                                >
                                    <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                        Tell us about your project
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        minLength={20}
                                        maxLength={500}
                                        className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300 resize-none"
                                        placeholder="Describe your project in detail..."
                                        required
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 py-4 px-8 rounded-xl font-semibold hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </SectionOpacity>
            </section>

            <ShadowCursor />

            {/* Custom Notification */}
            {notification && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    className={`fixed bottom-4 right-4 z-50 p-4 rounded-xl shadow-lg backdrop-blur-sm border max-w-sm ${notification.type === 'success'
                        ? 'bg-green-500/90 text-white border-green-400'
                        : 'bg-red-500/90 text-white border-red-400'
                        }`}
                >
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                            {notification.type === 'success' ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                        <p className="text-sm font-medium">{notification.message}</p>
                        <button
                            onClick={() => setNotification(null)}
                            className="flex-shrink-0 ml-2 text-white/80 hover:text-white transition-colors"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default ContactPage;

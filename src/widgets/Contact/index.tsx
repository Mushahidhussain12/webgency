'use client';

import { FC, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props { }

const Index: FC<Props> = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        budget: '',
        pages: ''
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
                    name: '',
                    email: '',
                    message: '',
                    budget: '',
                    pages: ''
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="relative border-t border-border-light dark:border-gray-1 bg-gradient-to-b from-bg-2-light to-bg-1-light dark:from-bg-2-dark dark:to-bg-1-dark py-16 md:py-24 lg:py-32 overflow-hidden">
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
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    {/* Section Title */}
                    <motion.div variants={itemVariants} className="text-center mb-8 md:mb-16">
                        <SectionTitle title="CONTACT." classes="mb-4 md:mb-6" />
                        <motion.div
                            variants={itemVariants}
                            className="w-16 md:w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto rounded-full"
                        />
                        <motion.p
                            variants={itemVariants}
                            className="mt-4 md:mt-6 text-sm md:text-lg text-text-1-light/70 dark:text-text-1-dark/70 max-w-2xl mx-auto px-4"
                        >
                            Ready to start your next project? Let&apos;s discuss how we can help bring your vision to life.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-text-1-light dark:text-text-1-dark mb-4 md:mb-6">
                                    Get in Touch
                                </h3>
                                <p className="text-sm md:text-base text-text-1-light/70 dark:text-text-1-dark/70 leading-relaxed mb-6 md:mb-8">
                                    We&apos;re always excited to work on new projects. Send us a message and we&apos;ll get back to you within 24 hours.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-4 md:space-y-6">
                                <motion.div
                                    className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/60 dark:bg-surface-dark/60 backdrop-blur-sm rounded-xl border border-border-light/50 dark:border-gray-1/50"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-1-light dark:text-text-1-dark">Email</h4>
                                        <p className="text-text-1-light/70 dark:text-text-1-dark/70">hello@codurex.com</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/60 dark:bg-surface-dark/60 backdrop-blur-sm rounded-xl border border-border-light/50 dark:border-gray-1/50"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-1-light dark:text-text-1-dark">Phone</h4>
                                        <p className="text-text-1-light/70 dark:text-text-1-dark/70">+92 300 123 4567</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/60 dark:bg-surface-dark/60 backdrop-blur-sm rounded-xl border border-border-light/50 dark:border-gray-1/50"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-1-light dark:text-text-1-dark">Location</h4>
                                        <p className="text-text-1-light/70 dark:text-text-1-dark/70">Karachi, Pakistan</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <div className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 lg:p-10 border border-border-light/50 dark:border-gray-1/50 shadow-lg">
                                <h3 className="text-xl md:text-2xl font-bold text-text-1-light dark:text-text-1-dark mb-4 md:mb-6">
                                    Send us a Message
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
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
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </motion.div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                                Budget Range
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300"
                                            >
                                                <option value="">Rang</option>
                                                <option value="2-4">$2K - $4K</option>
                                                <option value="4-8">$4K - $8K</option>
                                                <option value="8-10">$8K - $10K</option>
                                                <option value="10+">$10K+</option>
                                            </select>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                                Project Pages
                                            </label>
                                            <select
                                                name="pages"
                                                value={formData.pages}
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
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label className="block text-sm font-medium text-text-1-light dark:text-text-1-dark mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/60 dark:bg-gray-800/60 border border-border-light/50 dark:border-gray-1/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-500/50 transition-colors duration-300 resize-none"
                                            placeholder="Tell us about your project..."
                                            required
                                        />
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 py-3 px-6 rounded-xl font-semibold hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </SectionOpacity>

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
        </section>
    );
};

export default Index;

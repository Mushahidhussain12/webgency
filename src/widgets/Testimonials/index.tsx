'use client';

import { FC, useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props { }

const Index: FC<Props> = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "John Smith",
            role: "CEO, TechCorp",
            company: "TechCorp",
            image: "https://ui-avatars.com/api/?name=John+Smith&background=random",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            rating: 5,
            project: "Web Development"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Founder, DesignStudio",
            company: "DesignStudio",
            image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random",
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            rating: 5,
            project: "Mobile App"
        },
        {
            id: 3,
            name: "Michael Brown",
            role: "Marketing Director, GrowthCo",
            company: "GrowthCo",
            image: "https://ui-avatars.com/api/?name=Michael+Brown&background=random",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
            rating: 5,
            project: "E-commerce"
        },
        {
            id: 4,
            name: "Emily Davis",
            role: "CTO, InnovateLab",
            company: "InnovateLab",
            image: "https://ui-avatars.com/api/?name=Emily+Davis&background=random",
            content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
            rating: 5,
            project: "Web Application"
        },
        {
            id: 5,
            name: "David Wilson",
            role: "Owner, BoutiqueStore",
            company: "BoutiqueStore",
            image: "https://ui-avatars.com/api/?name=David+Wilson&background=random",
            content: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.",
            rating: 5,
            project: "Online Store"
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

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

    const testimonialVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <section id="testimonials" className="relative border-t border-border-light dark:border-gray-1 bg-gradient-to-b from-bg-2-light to-bg-1-light dark:from-bg-2-dark dark:to-bg-1-dark py-16 md:py-24 lg:py-32 overflow-hidden">
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
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <SectionTitle title="TESTIMONIALS." classes="mb-6" />
                        <motion.div
                            variants={itemVariants}
                            className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto rounded-full"
                        />
                        <motion.p
                            variants={itemVariants}
                            className="mt-6 text-lg text-text-1-light/70 dark:text-text-1-dark/70 max-w-2xl mx-auto"
                        >
                            Hear what our clients say about working with us
                        </motion.p>
                    </motion.div>

                    {/* Main Testimonial */}
                    <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-12">
                        <div className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border-light/50 dark:border-gray-1/50 shadow-lg">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                {/* Stars */}
                                <div className="flex justify-center mb-6">
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <motion.svg
                                            key={i}
                                            className="w-6 h-6 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </motion.svg>
                                    ))}
                                </div>

                                {/* Quote */}
                                <motion.blockquote
                                    key={`quote-${currentTestimonial}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-xl md:text-2xl font-medium text-text-1-light dark:text-text-1-dark mb-8 leading-relaxed"
                                >
                                    "{testimonials[currentTestimonial].content}"
                                </motion.blockquote>

                                {/* Author */}
                                <motion.div
                                    key={`author-${currentTestimonial}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="flex items-center justify-center space-x-4"
                                >
                                    <motion.img
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold text-text-1-light dark:text-text-1-dark">
                                            {testimonials[currentTestimonial].name}
                                        </h4>
                                        <p className="text-text-1-light/70 dark:text-text-1-dark/70">
                                            {testimonials[currentTestimonial].role}
                                        </p>
                                        <p className="text-sm text-text-1-light/60 dark:text-text-1-dark/60">
                                            {testimonials[currentTestimonial].project}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Testimonial Grid - Mobile: 2 testimonials, Desktop: 3 testimonials */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {/* Mobile: Show 2 testimonials */}
                        <div className="sm:hidden space-y-4">
                            {testimonials.slice(0, 2).map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    variants={testimonialVariants}
                                    className="bg-white/60 dark:bg-surface-dark/60 backdrop-blur-sm rounded-xl p-4 border border-border-light/50 dark:border-gray-1/50 shadow-lg hover:shadow-xl transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center space-x-3 mb-3">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-sm text-text-1-light dark:text-text-1-dark">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-xs text-text-1-light/70 dark:text-text-1-dark/70">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-text-1-light/80 dark:text-text-1-dark/80 text-xs leading-relaxed">
                                        "{testimonial.content.substring(0, 100)}..."
                                    </p>
                                    <div className="flex mt-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Desktop: Show 3 testimonials */}
                        <div className="hidden sm:contents">
                            {testimonials.slice(0, 3).map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    variants={testimonialVariants}
                                    className="bg-white/60 dark:bg-surface-dark/60 backdrop-blur-sm rounded-xl p-6 border border-border-light/50 dark:border-gray-1/50 shadow-lg hover:shadow-xl transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center space-x-3 mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-text-1-light dark:text-text-1-dark">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-text-1-light/70 dark:text-text-1-dark/70">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-text-1-light/80 dark:text-text-1-dark/80 text-sm leading-relaxed">
                                        "{testimonial.content.substring(0, 120)}..."
                                    </p>
                                    <div className="flex mt-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation Dots */}
                    <motion.div variants={itemVariants} className="flex justify-center mt-12 space-x-2">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentTestimonial
                                    ? 'bg-gray-600 dark:bg-gray-400'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </SectionOpacity>
        </section>
    );
};

export default Index;

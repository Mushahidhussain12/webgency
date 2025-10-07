'use client';

import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props { }

const Index: FC<Props> = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const companies = [
        { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
        { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
        { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
        { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
        { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
        { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg' },
        { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },

        { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
        { name: 'Twitter', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg' },
        { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
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

    return (
        <section id="companies" className="relative border-t border-border-light dark:border-gray-1 bg-gradient-to-b from-bg-2-light to-bg-1-light dark:from-bg-2-dark dark:to-bg-1-dark py-16 md:py-24 lg:py-32 overflow-hidden">
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
                        <SectionTitle title="TRUSTED BY." classes="mb-4 md:mb-6" />
                        <motion.div
                            variants={itemVariants}
                            className="w-16 md:w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto rounded-full"
                        />
                        <motion.p
                            variants={itemVariants}
                            className="mt-4 md:mt-6 text-sm md:text-lg text-text-1-light/70 dark:text-text-1-dark/70 max-w-2xl mx-auto px-4"
                        >
                            We&apos;re proud to work with industry leaders and innovative companies
                        </motion.p>
                    </motion.div>

                    {/* Company Logos - Horizontal Scrolling */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex space-x-8 md:space-x-12 lg:space-x-16"
                                animate={{
                                    x: [0, -100 * companies.length],
                                }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                {[...companies, ...companies].map((company, index) => (
                                    <motion.div
                                        key={`${company.name}-${index}`}
                                        className="flex-shrink-0 flex items-center justify-center"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-border-light/50 dark:border-gray-1/50 shadow-lg hover:shadow-xl transition-all duration-300">
                                            <Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={120}
                                                height={48}
                                                className="h-8 md:h-12 w-auto object-contain transition-all duration-300"
                                                loading="lazy"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Additional Static Logos */}
                    <motion.div variants={itemVariants} className="mt-8 md:mt-12">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
                            {companies.slice(0, 6).map((company, index) => (
                                <motion.div
                                    key={company.name}
                                    className="flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="bg-white/60 dark:bg-surface-dark/60 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-border-light/30 dark:border-gray-1/30 shadow-md hover:shadow-lg transition-all duration-300 w-full">
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={120}
                                            height={32}
                                            className="h-5 md:h-6 lg:h-8 w-auto object-contain transition-all duration-300 mx-auto"
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </SectionOpacity>
        </section>
    );
};

export default Index;

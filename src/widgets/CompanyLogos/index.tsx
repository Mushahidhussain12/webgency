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

    const technologies = [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
        { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
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
        <section id="technologies" className="relative border-t border-border-light dark:border-gray-1 bg-gradient-to-b from-bg-2-light to-bg-1-light dark:from-bg-2-dark dark:to-bg-1-dark py-16 md:py-24 lg:py-32 overflow-hidden">
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
                        <SectionTitle title="TECHNOLOGIES." classes="mb-4 md:mb-6" />
                        <motion.div
                            variants={itemVariants}
                            className="w-16 md:w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto rounded-full"
                        />
                        <motion.p
                            variants={itemVariants}
                            className="mt-4 md:mt-6 text-sm md:text-lg text-text-1-light/70 dark:text-text-1-dark/70 max-w-2xl mx-auto px-4"
                        >
                            Tools &amp; frameworks we use to build fast, reliable, and scalable digital products
                        </motion.p>
                    </motion.div>

                    {/* Tech Logos - Horizontal Scrolling Marquee */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex space-x-8 md:space-x-12 lg:space-x-16"
                                animate={{
                                    x: [0, -100 * technologies.length],
                                }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                {[...technologies, ...technologies].map((tech, index) => (
                                    <motion.div
                                        key={`${tech.name}-${index}`}
                                        className="flex-shrink-0 flex flex-col items-center justify-center gap-2"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-border-light/50 dark:border-gray-1/50 shadow-lg hover:shadow-xl transition-all duration-300">
                                            <Image
                                                src={tech.logo}
                                                alt={tech.name}
                                                width={120}
                                                height={48}
                                                className="h-8 md:h-12 w-auto object-contain transition-all duration-300"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-xs md:text-sm font-medium text-text-1-light/60 dark:text-text-1-dark/60">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Static Grid */}
                    <motion.div variants={itemVariants} className="mt-8 md:mt-12">
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-6">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    className="flex flex-col items-center justify-center gap-2"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="bg-white/60 dark:bg-surface-dark/60 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-border-light/30 dark:border-gray-1/30 shadow-md hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center">
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            width={120}
                                            height={32}
                                            className="h-6 md:h-8 lg:h-10 w-auto object-contain transition-all duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-medium text-text-1-light/50 dark:text-text-1-dark/50">
                                        {tech.name}
                                    </span>
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

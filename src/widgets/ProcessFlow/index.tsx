'use client';

import { FC, useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import {
    DiscoveryIcon,
    StrategyIcon,
    DesignIcon,
    DevelopmentIcon,
    TestingIcon,
    LaunchIcon,
} from '@/icons/ProcessIcons';

interface Props { }

const Index: FC<Props> = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [currentStep, setCurrentStep] = useState(0);

    const processSteps = [
        {
            id: 1,
            title: 'Discovery',
            description:
                'We start by understanding your vision, goals, and requirements through detailed consultation.',
            icon: DiscoveryIcon,
            details:
                'Initial consultation, requirement gathering, project scope definition, and timeline planning.',
        },
        {
            id: 2,
            title: 'Strategy',
            description:
                'We develop a comprehensive strategy tailored to your business needs and market position.',
            icon: StrategyIcon,
            details:
                'Market analysis, competitive research, user persona development, and strategic planning.',
        },
        {
            id: 3,
            title: 'Design',
            description:
                'Our design team creates stunning visuals and user experiences that captivate your audience.',
            icon: DesignIcon,
            details:
                'Wireframing, prototyping, UI/UX design, brand identity, and visual design system creation.',
        },
        {
            id: 4,
            title: 'Development',
            description:
                'We build robust, scalable solutions using cutting-edge technologies and best practices.',
            icon: DevelopmentIcon,
            details:
                'Frontend development, backend architecture, database design, API integration, and testing.',
        },
        {
            id: 5,
            title: 'Testing',
            description:
                'Rigorous testing ensures your solution works flawlessly across all devices and platforms.',
            icon: TestingIcon,
            details:
                'Quality assurance, performance testing, security audits, cross-browser compatibility, and user testing.',
        },
        {
            id: 6,
            title: 'Launch',
            description:
                'We launch your project with confidence, providing ongoing support and maintenance.',
            icon: LaunchIcon,
            details:
                'Deployment, go-live support, monitoring setup, documentation, and post-launch optimization.',
        },
    ];

    // Auto-rotate through steps
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % processSteps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [processSteps.length]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const stepVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const CurrentIcon = processSteps[currentStep].icon;

    return (
        <section
            id="process"
            className="relative border-t border-border-light dark:border-gray-1 bg-gradient-to-b from-bg-1-light to-bg-2-light dark:from-bg-1-dark dark:to-bg-2-dark py-16 md:py-24 lg:py-32 overflow-hidden"
        >
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
                    animate={isInView ? 'visible' : 'hidden'}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    {/* Section Title */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <SectionTitle title="OUR PROCESS." classes="mb-6" />
                        <motion.div
                            variants={itemVariants}
                            className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto rounded-full"
                        />
                        <motion.p
                            variants={itemVariants}
                            className="mt-6 text-lg text-text-1-light/70 dark:text-text-1-dark/70 max-w-2xl mx-auto"
                        >
                            A systematic approach that ensures every project is delivered with
                            precision and excellence
                        </motion.p>
                    </motion.div>

                    {/* Process Flow - Static Grid */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                            {processSteps.map((step, index) => {
                                const StepIcon = step.icon;
                                return (
                                    <motion.div
                                        key={step.id}
                                        variants={stepVariants}
                                        className="cursor-pointer"
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => setCurrentStep(index)}
                                    >
                                        <div className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-border-light/50 dark:border-gray-1/50 shadow-lg hover:shadow-xl transition-all duration-300">
                                            <div className="text-center">
                                                <div className="flex justify-center mb-3 md:mb-4">
                                                    <div className={`p-3 md:p-4 rounded-full transition-colors duration-300 ${index === currentStep
                                                        ? 'bg-gray-200 dark:bg-gray-700'
                                                        : 'bg-gray-100 dark:bg-gray-800'
                                                        }`}>
                                                        <StepIcon className="w-8 h-8 md:w-10 md:h-10 text-gray-600 dark:text-gray-400" />
                                                    </div>
                                                </div>
                                                <h3 className="text-sm md:text-lg font-bold text-text-1-light dark:text-text-1-dark">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Current Step Details */}
                    <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
                        <div className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border-light/50 dark:border-gray-1/50 shadow-lg">
                            <div className="text-center mb-8">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex justify-center mb-6"
                                >
                                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
                                        <CurrentIcon className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                                    </div>
                                </motion.div>

                                <motion.h3
                                    key={`title-${currentStep}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-3xl font-bold text-text-1-light dark:text-text-1-dark mb-4"
                                >
                                    {processSteps[currentStep].title}
                                </motion.h3>

                                <motion.p
                                    key={`desc-${currentStep}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-lg text-text-1-light/70 dark:text-text-1-dark/70 mb-6"
                                >
                                    {processSteps[currentStep].description}
                                </motion.p>

                                <motion.p
                                    key={`details-${currentStep}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-text-1-light/60 dark:text-text-1-dark/60"
                                >
                                    {processSteps[currentStep].details}
                                </motion.p>
                            </div>

                            {/* Step Indicators */}
                            <div className="flex justify-center space-x-2">
                                {processSteps.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setCurrentStep(index)}
                                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentStep
                                            ? 'bg-gray-600 dark:bg-gray-400'
                                            : 'bg-gray-300 dark:bg-gray-600'
                                            }`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </SectionOpacity>
        </section>
    );
};

export default Index;

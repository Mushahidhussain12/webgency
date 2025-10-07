'use client';

import { FC, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import HoverCards from '@/components/ui/HoverCards';
import { APPROACH_CARDS } from '@/data';

interface Props { }

const Index: FC<Props> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="approach" className="relative border-t border-border-light dark:border-gray-1 bg-gradient-to-b from-bg-1-light to-bg-2-light dark:from-bg-1-dark dark:to-bg-2-dark py-16 md:py-24 lg:py-32 overflow-hidden">
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
            <SectionTitle title="APPROACH." classes="mb-6" />
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto rounded-full"
            />
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-text-1-light/70 dark:text-text-1-dark/70 max-w-2xl mx-auto"
            >
              Our systematic approach ensures every project is delivered with precision and excellence
            </motion.p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {APPROACH_CARDS.map((card, index) => (
              <motion.div
                key={card.title}
                variants={stepVariants}
                className="relative group"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="relative bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border-light/50 dark:border-gray-1/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Step Number */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-lg font-bold text-gray-700 dark:text-gray-300 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <card.icon className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <motion.h3
                      className="text-xl font-bold text-text-1-light dark:text-text-1-dark"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.title}
                    </motion.h3>

                    <motion.p
                      className="text-text-1-light/70 dark:text-text-1-dark/70 leading-relaxed"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.description}
                    </motion.p>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gray-100/10 to-gray-200/10 dark:from-gray-800/10 dark:to-gray-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    animate={{
                      opacity: hoveredStep === index ? 1 : 0
                    }}
                  />

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-gray-300/50 dark:border-gray-600/50 opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{
                      opacity: hoveredStep === index ? 1 : 0
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Flow Visualization */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white/60 dark:bg-surface-dark/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border-light/50 dark:border-gray-1/50">
              <h3 className="text-2xl font-bold text-center text-text-1-light dark:text-text-1-dark mb-8">
                Our Process Flow
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                {APPROACH_CARDS.map((card, index) => (
                  <div key={card.title} className="flex flex-col items-center space-y-4 flex-1">
                    <motion.div
                      className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <card.icon className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                    </motion.div>

                    <div className="text-center">
                      <h4 className="font-semibold text-text-1-light dark:text-text-1-dark mb-2">
                        {card.title}
                      </h4>
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mx-auto" />
                    </div>

                    {/* Arrow */}
                    {index < APPROACH_CARDS.length - 1 && (
                      <motion.div
                        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300 dark:bg-gray-600"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                      />
                    )}
                  </div>
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
'use client';

import { FC, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';
import { CARDS } from '@/data';

interface Props { }

const Index: FC<Props> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="services" className="relative border-t border-border-light dark:border-gray-1 bg-gradient-to-b from-bg-2-light to-bg-1-light dark:from-bg-2-dark dark:to-bg-1-dark py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-light/5 dark:bg-primary-dark/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-light/5 dark:bg-accent-dark/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Title */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <SectionTitle title="SERVICES." classes="mb-6" />
          <motion.div
            variants={cardVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark mx-auto rounded-full"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8 md:space-y-12">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-border-light/50 dark:border-gray-1/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Background Number */}
                <motion.div
                  variants={numberVariants}
                  className="absolute -top-8 -right-8 text-[120px] md:text-[160px] lg:text-[200px] font-black text-primary-light/10 dark:text-primary-dark/10 pointer-events-none select-none"
                >
                  {card.number}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                    {/* Left Column - Services List */}
                    <div className="flex-1 space-y-4">
                      <motion.h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-1-light dark:text-text-1-dark mb-6"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {card.title}
                      </motion.h3>

                      <div className="space-y-3">
                        {card.services.map((service, serviceIndex) => (
                          <motion.div
                            key={serviceIndex}
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: serviceIndex * 0.1 }}
                          >
                            {service.map((item, itemIndex) => (
                              <motion.div
                                key={item}
                                className="flex items-center gap-2 px-3 py-2 bg-gray-100/50 dark:bg-gray-800/50 rounded-full text-sm font-medium text-text-1-light dark:text-text-1-dark hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
                                <span>{item}</span>
                              </motion.div>
                            ))}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Description */}
                    <div className="flex-1 relative">
                      <motion.p
                        className="text-base sm:text-lg text-text-1-light/80 dark:text-text-1-dark/80 leading-relaxed"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        {card.description}
                      </motion.p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-100/10 to-gray-200/10 dark:from-gray-800/10 dark:to-gray-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0
                  }}
                />

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-gray-300/50 dark:border-gray-600/50 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Index;

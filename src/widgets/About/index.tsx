'use client';

import { FC, useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props { }

const Index: FC<Props> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    years: 0
  });

  // Animate numbers when in view
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const animateNumber = (start: number, end: number, setter: (value: number) => void) => {
        let current = start;
        const increment = (end - start) / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          setter(Math.floor(current));
        }, stepDuration);
      };

      animateNumber(0, 150, (value) => setStats(prev => ({ ...prev, projects: value })));
      animateNumber(0, 75, (value) => setStats(prev => ({ ...prev, clients: value })));
      animateNumber(0, 100, (value) => setStats(prev => ({ ...prev, satisfaction: value })));
      animateNumber(0, 5, (value) => setStats(prev => ({ ...prev, years: value })));
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="about" className="relative border-t border-border-light dark:border-gray-1 bg-gradient-to-b from-bg-1-light to-bg-2-light dark:from-bg-1-dark dark:to-bg-2-dark py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full blur-3xl" />
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
            <SectionTitle title="ABOUT." classes="mb-6" />
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark mx-auto rounded-full"
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.h3
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-1-light dark:text-text-1-dark leading-tight"
                >
                  We're a{' '}
                  <span className="bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent">
                    young, close-knit team
                  </span>
                </motion.h3>

                <motion.p
                  variants={itemVariants}
                  className="text-lg sm:text-xl text-text-1-light/80 dark:text-text-1-dark/80 leading-relaxed"
                >
                  of developers and innovators helping brands worldwide thrive in the digital world.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 pt-8"
              >
                <div className="text-center p-4 bg-white/10 dark:bg-gray-800/20 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-light dark:text-primary-dark mb-2">
                    {stats.projects}+
                  </div>
                  <div className="text-sm text-text-1-light/70 dark:text-text-1-dark/70 uppercase tracking-wide">
                    Projects
                  </div>
                </div>
                <div className="text-center p-4 bg-white/10 dark:bg-gray-800/20 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">
                    {stats.clients}+
                  </div>
                  <div className="text-sm text-text-1-light/70 dark:text-text-1-dark/70 uppercase tracking-wide">
                    Clients
                  </div>
                </div>
                <div className="text-center p-4 bg-white/10 dark:bg-gray-800/20 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-light dark:text-primary-dark mb-2">
                    {stats.satisfaction}%
                  </div>
                  <div className="text-sm text-text-1-light/70 dark:text-text-1-dark/70 uppercase tracking-wide">
                    Satisfaction
                  </div>
                </div>
                <div className="text-center p-4 bg-white/10 dark:bg-gray-800/20 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">
                    {stats.years}+
                  </div>
                  <div className="text-sm text-text-1-light/70 dark:text-text-1-dark/70 uppercase tracking-wide">
                    Years
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={imageVariants}
              className="relative"
            >
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Programming-amico.png"
                  alt="Programming illustration"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4 w-16 h-16 bg-primary-light/20 dark:bg-primary-dark/20 rounded-full blur-sm"
                />
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-4 left-4 w-12 h-12 bg-accent-light/20 dark:bg-accent-dark/20 rounded-full blur-sm"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </SectionOpacity>
    </section>
  );
};

export default Index;
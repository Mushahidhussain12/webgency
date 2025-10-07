'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import useFloatingImages from '@/composables/useFloatingImages';
import { useTheme } from '@/contexts/ThemeContext';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import { main_1, main_2, main_3 } from './images/index';

const Hero = () => {
  const { theme } = useTheme();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: "-100px" });

  const { manageMouseMove } = useFloatingImages(ref1, ref2, ref3);

  const heading1 = useRef(null);
  const heading2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heading1,
    offset: ['start 0.35', 'end 0.1'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Animation variants
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="main" className="relative bg-gradient-to-b from-bg-1-light to-bg-2-light dark:from-bg-1-dark dark:to-bg-2-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={heroRef}
        onMouseMove={(e) => manageMouseMove(e)}
        className="relative left-0 top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main Content */}
        <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8">
          {/* Circle Background - Simple approach */}
          <div
            data-disable-cursor="true"
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-0
              ${theme === 'light'
                ? 'bg-gray-400/80'
                : 'bg-gray-800/60'
              }
              w-[150vw] h-[150vw] sm:w-[140vw] sm:h-[140vw] md:w-[120vw] md:h-[120vw] lg:w-[100vw] lg:h-[100vw] xl:w-[90vw] xl:h-[90vw] 2xl:w-[80vw] 2xl:h-[80vw]`}
          />

          <motion.h1
            ref={heading1}
            className="relative z-30 w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white max-w-6xl mx-auto leading-tight transition-colors duration-500"
            style={{ opacity }}
            variants={itemVariants}
          >
            Turning Ideas into{' '}
            <span className="bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent">
              Reality
            </span>
          </motion.h1>

          <motion.h2
            ref={heading2}
            className="z-30 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500 mt-6 max-w-4xl mx-auto"
            style={{ opacity }}
            variants={itemVariants}
          >
            An Innovative Software Agency from Pakistan
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative z-40 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative z-40 px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 bg-primary-light/20 dark:bg-primary-dark/20 rounded-full blur-sm"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 left-20 w-12 h-12 bg-accent-light/20 dark:bg-accent-dark/20 rounded-full blur-sm"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />

        {/* Background Images */}
        <div ref={ref2} className="absolute left-0 top-0 z-0 h-full w-full">
          <Image src={main_2} fill alt="" className="object-cover" />
        </div>

        <div ref={ref3} className="absolute left-0 top-0 z-0 h-full w-full">
          <Image src={main_3} fill alt="" className="object-cover" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

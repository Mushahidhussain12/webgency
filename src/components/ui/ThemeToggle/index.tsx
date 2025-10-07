'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
    className?: string;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className={`relative flex h-10 w-10 sm:h-12 sm:w-12 cursor-pointer items-center justify-center rounded-full bg-gray-1-light dark:bg-gray-1-dark transition-colors duration-300 hover:bg-accent-light dark:hover:bg-accent-dark ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <motion.div
                className="relative flex items-center justify-center"
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {theme === 'dark' ? (
                    <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-text-1-light dark:text-text-1-dark" />
                ) : (
                    <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-text-1-light dark:text-text-1-dark" />
                )}
            </motion.div>

            {/* Background circle animation */}
            <motion.div
                className="absolute inset-0 rounded-full bg-accent-light dark:bg-accent-dark opacity-0"
                animate={{
                    opacity: theme === 'dark' ? 0 : 0.1,
                    scale: theme === 'dark' ? 0.8 : 1.1
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    );
};

export default ThemeToggle;

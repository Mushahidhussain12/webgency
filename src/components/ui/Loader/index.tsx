'use client';

import { useEffect, useState } from 'react';

const Loader = () => {
    // Read theme instantly from localStorage (prevents flash)
    const getInitialTheme = (): 'light' | 'dark' => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme') as 'light' | 'dark';
            return saved || 'dark';
        }
        return 'dark';
    };

    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [theme] = useState<'light' | 'dark'>(getInitialTheme);

    useEffect(() => {
        // Fade out smoothly
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => setIsLoading(false), 300);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                } ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
        >
            <div className="relative w-16 h-16">
                {/* Outer ring */}
                <div
                    className={`absolute inset-0 rounded-full border-2 border-transparent ${theme === 'light' ? 'border-t-black/20' : 'border-t-white/20'
                        } animate-spin`}
                    style={{ animationDuration: '2s' }}
                />
                {/* Middle ring */}
                <div
                    className={`absolute inset-2 rounded-full border-2 border-transparent ${theme === 'light' ? 'border-t-black/40' : 'border-t-white/40'
                        } animate-spin`}
                    style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
                />
                {/* Inner ring */}
                <div
                    className={`absolute inset-4 rounded-full border-2 border-transparent ${theme === 'light' ? 'border-t-black/60' : 'border-t-white/60'
                        } animate-spin`}
                    style={{ animationDuration: '1s' }}
                />
                {/* Center dot */}
                <div
                    className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse ${theme === 'light' ? 'bg-black/80' : 'bg-white/80'
                        }`}
                />
            </div>
        </div>
    );
};

export default Loader;

'use client';

import { FC } from 'react';

interface Props { }

const Index: FC<Props> = () => {
    return (
        <footer className="flex flex-col sm:flex-row justify-between items-center border-t border-t-border-light dark:border-t-gray-800 px-4 py-6 text-sm text-text-1-light dark:text-text-1-dark transition-colors duration-300 gap-4 sm:gap-0 bg-bg-1-light dark:bg-bg-1-dark">
            <div>© 2025. <a href="https://github.com/Shatlyk1011/agency-website" target='_blank' rel="noreferrer" className="hover:text-black dark:hover:text-accent-dark transition-colors duration-300">Codurex</a></div>
            <ul className="flex space-x-6">
                <li>Mushahid</li>
                <li>Zaid</li>
                <li>More</li>
            </ul>
        </footer>
    );
};

export default Index;

import { FC } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props { }

const Index: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    <SectionOpacity classes="flex flex-col justify-center h-screen">

      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center text-center px-4">
        <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-text-1-light dark:text-text-1-dark transition-colors duration-300 drop-shadow-sm">
          LET&apos;S CONNECT
        </h3>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl font-normal text-text-1-light/80 dark:text-gray-300 leading-relaxed transition-colors duration-300 drop-shadow-sm">
          Let&apos;s collaborate to build smart, innovative software that drives your brand forward and shapes your digital future.
        </p>
        <Button
          onClick={handleFormToggle}
          title="SUBMIT A REQUEST"
          classes="px-8 py-4 w-full max-w-sm bg-black dark:bg-bg-1-dark hover:bg-gray-800 dark:hover:bg-bg-1-dark/80 transition-colors duration-300 text-white"
          btnClasses="mt-8"
        />
      </div>

      <footer className="flex flex-col sm:flex-row justify-between items-center border-t border-t-border-light dark:border-t-gray-800 px-4 py-6 text-sm text-text-1-light dark:text-text-1-dark transition-colors duration-300 gap-4 sm:gap-0">
        <div>© 2025. <a href="https://github.com/Shatlyk1011/agency-website" target='_blank' rel="norelopener" className="hover:text-black dark:hover:text-accent-dark transition-colors duration-300">Codurex</a></div>
        <ul className="flex space-x-6">
          <li>Mushahid</li>
          <li>Zaid</li>
          <li>More</li>
        </ul>
      </footer>
    </SectionOpacity>
  );
};
export default Index;

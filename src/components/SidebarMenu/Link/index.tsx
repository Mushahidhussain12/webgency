import { motion } from 'framer-motion';
import { slide, scale } from '@/shared/utils/animations';

import { FC } from 'react';

interface Props {
  data: any;
  isActive: boolean;
  setSelectedIndicator: any;
  handleClick: () => void;
}

const Index: FC<Props> = ({ data, isActive, setSelectedIndicator, handleClick }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={handleClick}
    >
      <motion.div
        className="absolute left-0 inline-block h-2 w-2 rounded-full bg-black dark:bg-white transition-colors duration-300"
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
      ></motion.div>
      <div tabIndex={0} className="cursor-pointer text-xl font-semibold tracking-wide duration-200 transition-[cubic-bezier(.16,1,.3,1)] hover:translate-x-4 text-text-1-light dark:text-text-1-dark hover:text-black dark:hover:text-white transition-colors duration-300">
        {title}
      </div>
    </motion.div>
  );
};
export default Index;

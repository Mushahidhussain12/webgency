import { SVGProps, FC } from 'react';

export const First: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="32" height="33" className='w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[2vw] lg:h-[2vw] xl:w-[1.5vw] xl:h-[1.5vw] 2xl:w-[1.2vw] 2xl:h-[1.2vw]' viewBox="0 0 32 33" fill="none" {...props}>
    <circle cx="8" cy="8.41406" r="8" fill="currentColor" className="text-black dark:text-text-1-dark" />
    <circle cx="24" cy="24.4141" r="8" fill="currentColor" className="text-black dark:text-text-1-dark" />
  </svg>
);

export default First;

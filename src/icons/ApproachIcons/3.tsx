import { SVGProps, FC } from 'react';

export const Third: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="36" height="36" className='w-[4.5vw] h-[4.5vw] sm:w-[3.5vw] sm:h-[3.5vw] md:w-[3vw] md:h-[3vw] lg:w-[2.5vw] lg:h-[2.5vw] xl:w-[2vw] xl:h-[2vw] 2xl:w-[1.5vw] 2xl:h-[1.5vw]' viewBox="0 0 36 36" {...props}>
    <g clipPath="url(#clip0_250_11)">
      <rect x="3" y="20.6855" width="18" height="18" rx="2" transform="rotate(-25 3 20.6855)" fill="currentColor" className="text-black dark:text-text-1-dark" />
      <rect x="22.9592" y="-1" width="10" height="10" rx="1" fill="currentColor" className="text-black dark:text-text-1-dark" />
    </g>
    <defs>
      <clipPath id="clip0_250_11">
        <rect width="36" height="36" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

import { FC, SVGProps, useState } from 'react';

import { cn } from '@/shared/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  cards: { title: string; icon: FC<SVGProps<SVGSVGElement>>; description: string }[];
  wrapperClasses?: string;
  itemClasses?: string;
}

const Index: FC<Props> = ({ cards, itemClasses, wrapperClasses }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-2 gap-6', itemClasses)}>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={cn('relative flex flex-col p-6 last:col-span-1 lg:last:col-span-2', itemClasses)}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <motion.span
            className={cn(
              'absolute inset-0 z-0 block h-full w-full rounded-lg bg-stroke-light/50 dark:bg-stroke-dark/50 transition-colors duration-300',
              wrapperClasses,
            )}
            layoutId="cardHoverEffect"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredIdx === idx ? 1 : 0,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          />
          <div
            className={cn(
              'z-[1] h-full space-y-4 rounded-lg border border-stroke-light dark:border-stroke-dark p-6 bg-white dark:bg-surface-dark shadow-lg dark:shadow-none transition-colors duration-300',
            )}
          >
            <div className="flex items-center space-x-3">
              {<card.icon />}
              <h6 className="text-lg font-semibold text-text-1-light dark:text-text-1-dark transition-colors duration-300">{card.title}</h6>
            </div>
            <p className="text-sm font-light leading-relaxed text-text-1-light dark:text-text-1-dark/80 transition-colors duration-300">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Index;

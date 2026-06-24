import { useCallback, RefObject } from 'react';

/**
 * Custom hook that applies a subtle parallax floating effect
 * to three image container refs based on mouse movement.
 */
const useFloatingImages = (
  ref1: RefObject<HTMLElement | null>,
  ref2: RefObject<HTMLElement | null>,
  ref3: RefObject<HTMLElement | null>
) => {
  const manageMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Normalise cursor position to [-0.5, 0.5]
      const xNorm = clientX / innerWidth - 0.5;
      const yNorm = clientY / innerHeight - 0.5;

      // Each ref moves at a different speed for depth
      if (ref1.current) {
        ref1.current.style.transform = `translate(${xNorm * 25}px, ${yNorm * 25}px)`;
      }
      if (ref2.current) {
        ref2.current.style.transform = `translate(${xNorm * -15}px, ${yNorm * -15}px)`;
      }
      if (ref3.current) {
        ref3.current.style.transform = `translate(${xNorm * 35}px, ${yNorm * 35}px)`;
      }
    },
    [ref1, ref2, ref3]
  );

  return { manageMouseMove };
};

export default useFloatingImages;

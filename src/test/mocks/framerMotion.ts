import { vi } from 'vitest';
import React from 'react';

const createMotionComponent = (type: string) => {
  return ({ children, ...props }: any) => 
    React.createElement(type, props, children);
};


const framerMotion = {
  motion: {
    div: createMotionComponent('div'),
    span: createMotionComponent('span'),
    button: createMotionComponent('button'),
    ul: createMotionComponent('ul'),
    li: createMotionComponent('li'),
    a: createMotionComponent('a'),
  },
  useScroll: () => ({
    scrollYProgress: {
      get: () => 0,
      onChange: vi.fn(),
      current: 0
    }
  }),
  useTransform: () => ({
    get: () => 0,
    onChange: vi.fn(),
    current: 0
  }),
  animate: vi.fn(),
//   AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
//   useMotionValueEvent: vi.fn()
};
 
export default framerMotion;
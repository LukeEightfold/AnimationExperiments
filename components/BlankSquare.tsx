import { motion } from 'framer-motion';
import React from 'react';

interface BlankSquareProps {
  width: number;
  height: number;
  styles: string;
  delay: number;
  myKey: number;
}

const fadeInVariants = {
  show: {
    opacity: 1,
    y: -30,
    transition: { duration: 0.4 },
  },
  hidden: {
    opacity: 0,
    y: 0,
  },
};

export const BlankSquare: React.FC<BlankSquareProps> = ({
  width,
  height,
  styles,
  myKey = 1,
  delay = 0,
}: BlankSquareProps) => {
  return (
    <motion.div variants={fadeInVariants}>
      <motion.div
        key={myKey}
        className={`w-16 pointer-events-none w-${width}  h-${height} ${styles}`}
        initial={{ y: 0 }}
        animate={{ y: -10 }}
        transition={{
          yoyo: Infinity,
          ease: 'easeInOut',
          duration: 0.8,
          delay: delay,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 203.16 281.07"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_2-2" data-name="Layer 2">
              <polygon
                points="1.02 16.55 30.54 0.57 202.13 99.64 172.62 115.62 1.02 16.55"
                fill="#d8d8d8"
                stroke="#46c7f2"
                strokeMiterlimit="10"
              />
              <polygon
                points="1.94 182.2 173.53 280.21 172.62 115.62 1.02 16.55 1.94 182.2"
                fill="#878e99"
                stroke="#46c7f2"
                strokeMiterlimit="10"
              />
            </g>
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
};

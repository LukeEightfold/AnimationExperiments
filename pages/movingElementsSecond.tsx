import {
  AnimatePresence,
  animationControls,
  motion,
  useAnimation,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Particles from 'react-particles-js';
import partcilesConfig from '../config/partcilesConfig';
import { BuildingColourSVGInline } from '../components/buildingColourInline';
import { BuildingOutlineInlineSVG } from '../components/buildingOutlineInline';
import { BlankSquare } from '../components/BlankSquare';

export default function MovingElementsSecond() {
  const [[maskX, maskY], setMask] = useState<number[]>([0, 0]);
  const [hovered, setIsHovered] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(5);
  const particlesControls = useAnimation();

  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [[conX, conY], setContainerHeightWidth] = useState<
    Array<number | null>
  >([0, 0]);

  const shapeDiv = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    const containerHeight = shapeDiv.current && shapeDiv.current.offsetHeight;
    const containerWidth = shapeDiv.current && shapeDiv.current.offsetWidth;
    setContainerHeightWidth([containerWidth, containerHeight]);
  }, []);

  const circleMaskControls = useAnimation();
  const boxControls = useAnimation();

  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number }) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const handleHover = (e: any) => {
    if (conX && conY) {
      const newMaskX = (e.layerX / conX) * 1800;
      const newMaskY = (e.layerY / conY) * 1531;
      setMask([newMaskX, newMaskY]);
      setRadius(1800);
      setIsHovered(true);
      boxControls.start('show');
      particlesControls.start('show');
    }
  };

  const handleHoverEnd = (e: any) => {
    console.log('HOVER END');
    setIsHovered(false);
    setMask([maskX, maskY]);
    setRadius(0);
    particlesControls.start('hide');
    boxControls.start('hide');
  };

  const particlesVariants = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  const boxVariants = {
    show: () => ({
      x: 0,
      transition: {
        duration: 1,
      },
    }),
    hide: {
      x: -1800,
      transition: {
        duration: 0.75,
      },
    },
  };

  useEffect(() => {
    const sequence = async () => {
      if (!!hovered) {
        await circleMaskControls.start('circleMove');
        await circleMaskControls.start('mouseGrow');
      } else {
        await circleMaskControls.start('mouseShrink');
      }
    };
    sequence();
  }, [hovered]);

  const stagger = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 80,
      transition: {
        duration: 0.2,
        when: 'afterChildren',
      },
    },
  };

  const pageTransition = {
    show: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
    },
  };

  const fadeInVariants = {
    show: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      animate="show"
      initial="hidden"
      exit="hidden"
      variants={pageTransition}
    >
      <div
        className="relative grid place-content-center h-screen "
        ref={shapeDiv}
      >
        <motion.div
          className="z-10 relative"
          variants={stagger}
          animate="show"
          initial="hidden"
          exit="hidden"
        >
          <motion.h2
            key={1}
            className=" text-gray-100 text-center mb-16 text-3xl"
            variants={fadeInVariants}
          >
            Moving Elements Page 1
          </motion.h2>

          <motion.div
            className="relative"
            variants={stagger}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <BlankSquare
              width={16}
              height={16}
              delay={0}
              myKey={2}
              styles="absolute  top-16 -right-16 z-0 "
            />

            <BlankSquare
              width={16}
              height={16}
              delay={0}
              myKey={3}
              styles="absolute top-24 -left-32 z-0 "
            />

            <BlankSquare
              width={16}
              height={16}
              delay={0}
              myKey={4}
              styles="absolute top-0 -left-0 z-0 "
            />
          </motion.div>

          <div className="relative md:h-96 md:w-96 h-72 w-72 z-20">
            {/* This is the black mask  */}
            <svg
              className="secondVideo2"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 1800 1531"
            >
              <defs>
                <filter
                  id="distort"
                  filterUnits="objectBoundingBox"
                  primitiveUnits="userSpaceOnUse"
                  colorInterpolationFilters="linearRGB"
                >
                  {/* <feTurbulence
                    type="turbulence"
                    baseFrequency="0.008"
                    numOctaves="100"
                    result="turbulence"
                  />
                  <feDisplacementMap
                    in2="turbulence"
                    in="SourceGraphic"
                    scale="300"
                  /> */}
                  <feGaussianBlur
                    stdDeviation="100 50"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    in="SourceGraphic"
                    edgeMode="none"
                    result="blur"
                  />
                </filter>
                <mask id="2ndMask">
                  <g filter="url(#distort)">
                    <motion.rect
                      // animate={circleMaskControls}
                      // initial={false}
                      fill="white"
                      width="100%"
                      height="100%"
                      animate={boxControls}
                      initial="hide"
                      variants={boxVariants}
                      className="pointer-events-none"
                    />
                  </g>
                </mask>
              </defs>
              <BuildingColourSVGInline />
              <BuildingOutlineInlineSVG />
            </svg>

            <motion.div
              className="absolute md:h-96 h-72  w-full inset-0 pointer-events-none relative"
              animate={particlesControls}
              initial={{ opacity: 0 }}
              variants={particlesVariants}
            >
              <Particles
                width="300"
                height="100%"
                className="pointer-events-none absolute bottom-0 md:h-96  h-72 particles"
                params={partcilesConfig}
              />
            </motion.div>

            <motion.div
              className="max-w-md  absolute inset-0 "
              onHoverStart={(e) => !hovered && handleHover(e)}
              onHoverEnd={(e) => hovered && handleHoverEnd(e)}
            ></motion.div>
          </div>

          <Link href="/movingElementsThird" passHref>
            <motion.a
              variants={fadeInVariants}
              className="rounded-lg bg-gray-200 py-4 mt-8 px-8 m-auto block text-center w-32 hover:text-gray-50 hover:bg-gray-400 transition duration-300 ease-in-out"
            >
              Navigate
            </motion.a>
          </Link>
        </motion.div>
      </div>

      <div
        className="cursor"
        style={{
          pointerEvents: `none`,
          backgroundColor: 'none',
          border: `1px solid #ccc`,
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      />
    </motion.div>
  );
}

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
import Confetti from 'react-confetti';

export default function MovingElementsThird() {
  const [[maskX, maskY], setMask] = useState<number[]>([0, 0]);
  const [hovered, setIsHovered] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(5);
  const [levelCompleted, setLevelCompleted] = useState<boolean>(false);
  const [hotSpotCompleted, setHotSpotCompleted] = useState<boolean>(false);
  const [confettiOn, setConfettiOn] = useState<boolean>(false);
  const particlesControls = useAnimation();
  const hotSpotAnimationControls = useAnimation();

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
      setRadius(1800 + 50);
      setIsHovered(true);
    }
  };

  const handleHoverEnd = (e: any) => {
    console.log('HOVER END');
    setIsHovered(false);
    setMask([maskX, maskY]);
    setRadius(0);
  };

  const handleClick = () => {
    console.log('clicked');
    setLevelCompleted(!levelCompleted);
    if (!levelCompleted) {
      boxControls.start('show');
      particlesControls.start('show');
      setTimeout(() => {
        setConfettiOn(true);
      }, 1000);
    } else {
      boxControls.start('hide');
      particlesControls.start('hide');
    }
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

  const hotSpotVariants = {
    show: {
      r: 700,
      transition: { duration: 0.4 },
    },
    hide: {
      r: 0,
      transition: { duration: 0.4 },
    },
  };

  const toggleHotSpot = () => {
    console.log('toggle hot spot');
    setHotSpotCompleted(!hotSpotCompleted);
    console.log(hotSpotCompleted);
    if (!hotSpotCompleted) {
      console.log('should run open');
      hotSpotAnimationControls.start('show');
    } else {
      console.log('should run close');
      hotSpotAnimationControls.start('hide');
    }
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
      transition: { duration: 0.4 },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.1 },
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
      <Confetti
        run={confettiOn}
        recycle={false}
        width={1800}
        height={3000}
        numberOfPieces={1000}
      />
      <div
        className="relative grid place-content-center h-screen "
        onClick={() => toggleHotSpot()}
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
            Moving Elements Page 2
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
                <mask id="3rdMask">
                  <g filter="url(#distort)">
                    <motion.circle
                      className="mask"
                      animate={{
                        cy: cursorXY.y + 50,
                        cx: cursorXY.x + 50,
                        // transition: { duration: 3 },
                      }}
                      // y={cursorXY.y - 100}
                      // x={cursorXY.x - 100}

                      r="500"
                      fill="white"
                    />
                  </g>
                </mask>
                <mask id="4thMask">
                  <g filter="url(#distort)">
                    <motion.circle
                      cx="300"
                      cy="300"
                      fill="white"
                      initial="hide"
                      animate={hotSpotAnimationControls}
                      variants={hotSpotVariants}
                      className="pointer-events-none"
                    />
                  </g>
                </mask>
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
              <image
                id="mystique"
                href="Building-Composite-Layers-BLURRED.png"
                height="100%"
                width="100%"
                mask="url(#3rdMask)"
              />
              <image
                id="mystique"
                href="Building-Composite-Layers-BLUE.png"
                height="100%"
                width="100%"
                mask="url(#4thMask)"
              />
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

          <div className="flex justify-between w-full">
            <Link href="/movingElementsSecond" passHref>
              <motion.a
                variants={fadeInVariants}
                className="rounded-lg bg-gray-200 py-4 mt-8 mr-4 px-8 m-auto block text-center  hover:text-gray-50 hover:bg-gray-400 transition duration-300 ease-in-out"
              >
                Navigate
              </motion.a>
            </Link>

            <motion.a
              onClick={() => handleClick()}
              variants={fadeInVariants}
              className="rounded-lg bg-gray-200 py-4 mt-8 mr-4 px-8 m-auto block text-center hover:text-gray-50 hover:bg-gray-400 transition duration-300 ease-in-out"
            >
              Level
            </motion.a>

            <motion.a
              onClick={() => toggleHotSpot()}
              variants={fadeInVariants}
              className="rounded-lg bg-gray-200 py-4 mt-8 px-8 m-auto block text-center hover:text-gray-50 hover:bg-gray-400 transition duration-300 ease-in-out"
            >
              HotSpot
            </motion.a>
          </div>
        </motion.div>

        <div className="absolute bg-gradient-to-b to-gray-700 from-gray-500 inset-0 grainBackground z-0"></div>
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

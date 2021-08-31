import { animationControls, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import Particles from 'react-particles-js';
import partcilesConfig from '../config/partcilesConfig';
import { BuildingColourSVGInline } from '../components/buildingColourInline';
import { BuildingOutlineInlineSVG } from '../components/buildingOutlineInline';

export default function SVGTestRectangleSlide() {
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

  return (
    <>
      <div
        className="relative grid place-content-center h-screen "
        ref={shapeDiv}
      >
        <div className="z-10">
          <h2 className=" text-gray-100 text-center mb-16 text-3xl">
            Recntangle Slide from Left
          </h2>

          <div className="relative md:h-96 md:w-96 h-72 w-72 ">
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
        </div>
        <div className="absolute bg-gradient-to-b to-gray-700 from-gray-500 inset-0 grainBackground z-0"></div>
      </div>

      <div
        className="cursor"
        style={{
          pointerEvents: `none`,
          backgroundColor: 'red',
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      />
    </>
  );
}

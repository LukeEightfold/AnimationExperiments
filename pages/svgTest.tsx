import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { BuildingColourSVG } from '../components/buildingColour';
import { BuildingOutlineSVG } from '../components/buildingOutline';
import Particles from 'react-particles-js';
import partcilesConfig from '../config/partcilesConfig';

export default function SVGTest() {
  const [[maskX, maskY], setMask] = useState<number[]>([0, 0]);
  const [hovered, setIsHovered] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(5);
  const particlesControls = useAnimation();
  const [[conX, conY], setContainerHeightWidth] = useState<
    Array<number | null>
  >([0, 0]);

  const circleMaskControls = useAnimation();
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

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
      const newMaskX = (e.layerX / conX) * conX;
      const newMaskY = (e.layerY / conY) * conY;
      console.log(newMaskX, newMaskY);
      setMask([newMaskX, newMaskY]);
      setRadius(conX);
      setIsHovered(true);
      particlesControls.start('show');
    }
  };

  const handleHoverEnd = (e: any) => {
    setIsHovered(false);
    setMask([maskX, maskY]);
    setRadius(0);
    particlesControls.start('hide');
  };

  const particlesVariants = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  const circleVariants = {
    mouseGrow: ([cx, cy, radius]: Array<number | 0 | null>) => ({
      r: radius,
      transition: {
        duration: 1,
      },
    }),
    mouseShrink: {
      r: 0,
      transition: {
        duration: 0.75,
      },
    },
    circleMove: ([cx, cy, radius]: Array<number | 0 | null>) => ({
      cx: cx,
      cy: cy,
      transition: {
        duration: 0.1,
      },
    }),
  };

  useEffect(() => {
    const sequence = async () => {
      if (!!hovered) {
        // console.log(maskX);
        // console.log(maskY);
        // console.log(conX, conY, radius);
        await circleMaskControls.start(circleVariants.circleMove);
        await circleMaskControls.start(circleVariants.mouseGrow);
      } else {
        await circleMaskControls.start(circleVariants.mouseShrink);
        // console.log(maskX);
        // console.log(maskY);
        // console.log(conX, conY, radius);
      }
    };
    sequence();
  }, [hovered]);

  return (
    <div className="w-screen h-screen from-gray-600 to-gray-900 bg-gradient-to-b grainBackground overflow-hidden">
      <div className="container m-auto  flex justify-center">
        <div className="relative max-w-md h-96 w-96">
          {/* This is the black mask  */}
          <svg
            className="secondVideo2"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <defs>
              <filter id="distort">
                <feTurbulence
                  type="turbulence"
                  baseFrequency="0.01"
                  numOctaves="30"
                  result="turbulence"
                />
                <feDisplacementMap
                  in2="turbulence"
                  in="SourceGraphic"
                  scale="100"
                />
              </filter>

              <mask id="2ndMask">
                <g filter="url(#distort)">
                  <motion.circle
                    // cy="50"
                    // cx="50"
                    custom={[maskX, maskY, radius]}
                    animate={circleMaskControls}
                    initial={false}
                    fill="white"
                    className="pointer-events-none"
                  />
                </g>
              </mask>
            </defs>
          </svg>
          {/* Always On element */}
          <BuildingOutlineSVG
            getSizes={([width, height]) =>
              setContainerHeightWidth([width, height])
            }
          />
          {/* Mask applied here */}
          <BuildingColourSVG />

          <motion.div
            className="absolute h-96 w-full inset-0 pointer-events-none  relative"
            animate={particlesControls}
            initial={{ opacity: 0 }}
            variants={particlesVariants}
          >
            <Particles
              width="300"
              height="100%"
              className="pointer-events-none absolute bottom-0 h-96  particles"
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

      <div
        className="cursor"
        style={{
          pointerEvents: `none`,
          backgroundColor: 'red',
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      />
    </div>
  );
}

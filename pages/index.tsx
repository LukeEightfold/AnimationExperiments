import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const moveCursor = (e: any) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          pointerEvents: `none`,
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      />
      <div className="bg-red border-4 border-solid border-red-400 w-full h-72 overflow-hidden">
        <svg
          width="1200"
          height="800"
          xmlns="http://www.w3.org/2000/svg"
          className="picture"
        >
          <defs>
            <filter id="distort">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.01"
                numOctaves="05"
                result="turbulence"
              />
              <feDisplacementMap
                in2="turbulence"
                in="SourceGraphic"
                scale="100"
              />
            </filter>

            <mask id="mask_transformed">
              <g filter="url(#distort)">
                <motion.rect
                  className="mask"
                  y={cursorXY.y - 100}
                  x={cursorXY.x - 100}
                  // animate={{
                  //   y: `${cursorXY.y}`,
                  //   transition: { duration: 2.9 },
                  // }}

                  width="30%"
                  height="30%"
                  fill="white"
                />
              </g>
            </mask>

            <mask id="mask_mystique">
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

                  r="150"
                  fill="white"
                />
              </g>
            </mask>

            {/* <mask id="mask_mystique">
              <g filter="url(#distort)">
                <motion.circle
                  className="mask"
                  initial={{
                    cy: 0,
                    cx: 0,
                    r: 0,
                  }}
                  animate={{
                    cy: 0,
                    cx: cursorXY.x + 50,
                    r: 1000,
                    transition: { duration: 3, ease: 'easeOut' },
                  }}
                  fill="white"
                />
              </g>
            </mask> */}
          </defs>

          <image
            id="mystique"
            href="Oil-Painting-Colour-SmoothEdge.png"
            height="100%"
            width="100%"
            mask="url(#mask_mystique)"
          />
          {/* <image
            id="transformed"
            href="Oil-Painting-BW-GradientEdge.png"
            height="100%"
            width="100%"
            mask="url(#mask_transformed)"
          /> */}
        </svg>
      </div>

      <div className="w-screen h-72 relative">
        <video
          autoPlay={true}
          id="vid"
          controls={true}
          loop={true}
          width="100%"
          className="h-72 object-cover"
        >
          <source
            src="http://www.paulirish.com/work/octopus.ogv"
            type="video/ogg"
          />
          <source
            src="http://www.paulirish.com/work/octopus.mp4"
            type="video/mp4"
          />
        </video>

        <svg
          className="secondVideo"
          preserveAspectRatio="none"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <defs>
            {/* <filter id="distort">
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
            </filter> */}

            <mask id="2ndMask">
              {/* <g filter="url(#distort)"> */}
              <motion.circle
                className="mask"
                cy="50"
                cx="50"
                r="50"
                fill="white"
                width="30%"
                height="30%"
              />
              {/* </g> */}
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
        </svg>
      </div>
    </>
  );
}

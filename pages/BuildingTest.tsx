import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function BuildingTest() {
  const [[maskX, maskY], setMask] = useState<number[]>([50, 50]);
  const [hovered, setIsHovered] = useState<boolean>(false);
  const circleMaskControls = useAnimation();

  const containerDiv = useRef<HTMLDivElement>(null);

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
    console.log('HOVER START');

    const containerHeight =
      containerDiv.current && containerDiv.current.offsetHeight;
    const containerWidth =
      containerDiv.current && containerDiv.current.offsetWidth;
    if (containerHeight && containerWidth) {
      const newMaskX = (e.layerX / containerWidth) * 100;
      const newMaskY = (e.layerY / containerHeight) * 100;
      setMask([newMaskX, newMaskY]);
      setIsHovered(true);
    }
  };

  const handleHoverEnd = (e: any) => {
    console.log('HOVER END');
    setIsHovered(false);
    setMask([maskX, maskY]);
  };

  const circleVariants = {
    mouseGrow: {
      r: 120,
      transition: {
        duration: 1.5,
      },
    },
    mouseShrink: {
      r: 0,
      transition: {
        duration: 0.75,
      },
    },
    circleMove: ([cx, cy]: number[]) => ({
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
        await circleMaskControls.start(circleVariants.circleMove);
        await circleMaskControls.start(circleVariants.mouseGrow);
      } else {
        await circleMaskControls.start(circleVariants.mouseShrink);
      }
    };
    sequence();
  }, [hovered]);

  return (
    <>
      <div className="container m-auto">
        <div className=" h-96 bg-gray-300 relative" ref={containerDiv}>
          {/* This is the black mask  */}
          <svg
            id="myMask"
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
                    custom={[maskX, maskY]}
                    animate={circleMaskControls}
                    initial={false}
                    fill="white"
                    className="pointer-events-none"
                  />
                </g>
              </mask>

              <mask id="3rdMask">
                <circle
                  cy="50"
                  cx="50"
                  r="50"
                  fill="white"
                  className="pointer-events-none"
                />
              </mask>
            </defs>

            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="black"
              onHoverStart={(e) => !hovered && handleHover(e)}
              onHoverEnd={(e) => hovered && handleHoverEnd(e)}
            />
          </svg>
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
    </>
  );
}

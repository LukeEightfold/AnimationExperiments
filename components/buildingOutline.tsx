import React, { useCallback, useEffect, useRef, useState } from 'react';

interface BuildingOutlineSVGProps {
  getSizes: (sizes: Array<number | null>) => void;
}

export const BuildingOutlineSVG: React.FC<BuildingOutlineSVGProps> = ({
  getSizes,
}: BuildingOutlineSVGProps) => {
  const shapeDiv = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    const containerHeight = shapeDiv.current && shapeDiv.current.offsetHeight;
    const containerWidth = shapeDiv.current && shapeDiv.current.offsetWidth;
    getSizes([containerWidth, containerHeight]);
  }, []);

  return (
    <div
      className="max-w-md pointer-events-none absolute inset-0 h-96"
      ref={shapeDiv}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 1803 1534"
        className="pointer-events-none"
      >
        <g data-name="Layer 2">
          <g
            fill="none"
            stroke="#9ca3af"
            strokeMiterlimit="10"
            strokeWidth="2"
            data-name="OUTLINE ONLY"
          >
            <path d="M112.18 186.23l702.91 408.4v560.84L112.18 753.31V186.23z" />
            <path d="M112.18 750.42L2.01 813.51l664.92 384.19 109.65-64.06-664.4-383.22zM2.01 813.98l664.92 383.72v220.18L2.01 1026.44V813.98z" />
            <path
              data-name="Wall_Down_Side"
              d="M772.13 1131.41l301.97 176.54v224.5L772.13 1351.8v-220.39z"
            />
            <path d="M666.93 1197.7v220.18l105.2-66.08v-215.94l-105.2 61.84zM239.06 325.2v84.28l-63.81-36.92v-83.81l63.81 36.45z" />
            <path d="M236.12 328.6v74.09l-57.93-33.46v-73.69l57.93 33.06z" />
            <path d="M182.47 364.79l-4.44 4.44 58.09 33.6v-7.08l-53.65-30.96z" />
            <path d="M182.47 297.91v66.88l-4.44 4.44v-73.84l4.44 2.52z" />
            <path
              data-name="Window_Frame"
              d="M239.06 424.3v84.28l-63.81-36.92v-83.82l63.81 36.46z"
            />
            <path
              data-name="Window"
              d="M236.12 427.69v74.1l-57.93-33.47v-73.69l57.93 33.06z"
            />
            <path
              data-name="Window_Frame_Down"
              d="M182.47 463.89l-4.44 4.43 58.09 33.61v-7.1l-53.65-30.94z"
            />
            <path
              data-name="Window_Frame_Side"
              d="M182.47 397v66.89l-4.44 4.43v-73.83l4.44 2.51z"
            />
            <path
              data-name="Window_Frame"
              d="M239.06 523.39v84.28l-63.81-36.91v-83.82l63.81 36.45z"
            />
            <path
              data-name="Window"
              d="M236.12 526.79v74.09l-57.93-33.47v-73.67l57.93 33.05z"
            />
            <path
              data-name="Window_Frame_Down"
              d="M182.47 562.99l-4.44 4.42 58.09 33.63v-7.1l-53.65-30.95z"
            />
            <path
              data-name="Window_Frame_Side"
              d="M182.47 496.1v66.89l-4.44 4.42v-73.82l4.44 2.51z"
            />
            <path
              data-name="Window_Frame"
              d="M239.06 622.49v84.28l-63.81-36.91v-83.83l63.81 36.46z"
            />
            <path
              data-name="Window"
              d="M236.12 625.88v74.1l-57.93-33.47v-73.69l57.93 33.06z"
            />
            <path
              data-name="Window_Frame_Down"
              d="M182.47 662.09l-4.44 4.42 58.09 33.62v-7.1l-53.65-30.94z"
            />
            <path
              data-name="Window_Frame_Side"
              d="M182.47 595.19v66.9l-4.44 4.42v-73.83l4.44 2.51z"
            />
            <path
              data-name="Window_Frame"
              d="M239.06 721.58v84.28l-63.81-36.91v-83.82l63.81 36.45z"
            />
            <path
              data-name="Window"
              d="M236.12 724.98v74.09l-57.93-33.46v-73.7l57.93 33.07z"
            />
            <path
              data-name="Window_Frame_Down"
              d="M182.47 761.17l-4.44 4.44 58.09 33.61v-7.09l-53.65-30.96z"
            />
            <path
              data-name="Window_Frame_Side"
              d="M182.47 694.28v66.89l-4.44 4.44v-73.84l4.44 2.51z"
            />
            <path
              data-name="Window_Frame"
              d="M306.09 363.75v84.27l-48.67-28.18v-83.83l48.67 27.74z"
            />
            <path
              data-name="Window"
              d="M303.15 367.14v74.09l-42.8-24.73v-73.69l42.8 24.33z"
            />
            <path
              data-name="Window_Frame_Down"
              d="M264.64 412.07l-4.45 4.43 42.96 24.89v-7.1l-38.51-22.22z"
            />
            <path
              data-name="Window_Frame_Side"
              d="M264.64 345.18v66.89l-4.45 4.43v-73.84l4.45 2.52z"
            />
            <path
              data-name="Window_Frame"
              d="M306.09 463.2v84.29l-48.67-28.19v-83.82l48.67 27.72z"
            />
            <path
              data-name="Window"
              d="M303.15 466.61v74.09l-42.8-24.74v-73.69l42.8 24.34z"
            />
            <path
              data-name="Window_Frame_Down"
              d="M264.64 511.53l-4.45 4.43 42.96 24.9v-7.11l-38.51-22.22z"
            />
            <path
              data-name="Window_Frame_Side"
              d="M264.64 444.64v66.89l-4.45 4.43v-73.83l4.45 2.51z"
            />
            <path
              data-name="Window_Frame"
              d="M306.09 562.31v84.28l-48.67-28.19v-83.82l48.67 27.73z"
            />
            <path
              data-name="Window"
              d="M303.15 565.71v74.09l-42.8-24.74v-73.68l42.8 24.33z"
            />
            <path
              data-name="Window_Frame_Down"
              d="M264.64 610.62l-4.45 4.44 42.96 24.89v-7.1l-38.51-22.23z"
            />
            <path
              data-name="Window_Frame_Side"
              d="M264.64 543.74v66.88l-4.45 4.44v-73.84l4.45 2.52z"
            />
            <path
              data-name="Window_Frame"
              d="M306.09 661.41v84.28l-48.67-28.19v-83.82l48.67 27.73z"
            />
            <path
              data-name="Window"
              d="M303.15 664.8v74.09l-42.8-24.74v-73.69l42.8 24.34z"
            />
            <path
              data-name="Window_Frame_Down"
              d="M264.64 709.72l-4.45 4.43 42.96 24.89v-7.09l-38.51-22.23z"
            />
            <path
              data-name="Window_Frame_Side"
              d="M264.64 642.83v66.89l-4.45 4.43v-73.82l4.45 2.5z"
            />
            <path
              data-name="Window_Frame"
              d="M306.09 760.5v84.28l-48.67-28.19v-83.82l48.67 27.73z"
            />
            <path
              data-name="Window"
              d="M303.15 763.89v74.1l-42.8-24.74v-73.7l42.8 24.34z"
            />
            <path
              data-name="Window_Frame_Down"
              d="M264.64 808.82l-4.45 4.43 42.96 24.89v-7.09l-38.51-22.23z"
            />
            <path
              data-name="Window_Frame_Side"
              d="M264.64 741.92v66.9l-4.45 4.43v-73.83l4.45 2.5z"
            />
            <path
              data-name="Window_Frame"
              d="M371.11 400.48v84.28l-48.67-28.19v-83.82l48.67 27.73z"
            />
            <path
              data-name="Window"
              d="M368.18 403.87v74.09l-42.8-24.74v-73.68l42.8 24.33z"
            />
            <path
              data-name="Window_Frame_Down"
              d="M329.67 448.79l-4.45 4.43 42.96 24.89v-7.09l-38.51-22.23z"
            />
            <path
              data-name="Window_Frame_Side"
              d="M329.67 381.9v66.89l-4.45 4.43v-73.83l4.45 2.51z"
            />
            <path
              data-name="Window_Frame"
              d="M371.11 499.75v84.29l-48.67-28.2v-83.82l48.67 27.73z"
            />
            <path
              data-name="Window"
              d="M368.18 503.15v74.09l-42.8-24.74v-73.68l42.8 24.33z"
            />
            <path
              data-name="Window_Frame_Down"
              d="M329.67 548.08l-4.45 4.42 42.96 24.9v-7.1l-38.51-22.22z"
            />
            <path
              data-name="Window_Frame_Side"
              d="M329.67 481.18v66.9l-4.45 4.42v-73.83l4.45 2.51z"
            />
            <g>
              <path
                data-name="Window_Frame"
                d="M371.11 598.86v84.27l-48.67-28.18v-83.83l48.67 27.74z"
              />
              <path
                data-name="Window"
                d="M368.18 602.25v74.1l-42.8-24.74v-73.69l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M329.67 647.17l-4.45 4.44 42.96 24.88v-7.09l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M329.67 580.28v66.89l-4.45 4.44v-73.84l4.45 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M371.11 697.95v84.28l-48.67-28.19v-83.82l48.67 27.73z"
              />
              <path
                data-name="Window"
                d="M368.18 701.34v74.1l-42.8-24.74V677l42.8 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M329.67 746.26l-4.45 4.44 42.96 24.88v-7.09l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M329.67 679.38v66.88l-4.45 4.44v-73.83l4.45 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M371.11 797.05v84.28l-48.67-28.19v-83.82l48.67 27.73z"
              />
              <path
                data-name="Window"
                d="M368.18 800.44v74.09l-42.8-24.73v-73.69l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M329.67 845.37l-4.45 4.43 42.96 24.89v-7.1l-38.51-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M329.67 778.48v66.89l-4.45 4.43v-73.84l4.45 2.52z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M435 438.05v84.29l-48.67-28.19v-83.83L435 438.05z"
              />
              <path
                data-name="Window"
                d="M432.06 441.45v74.09l-42.8-24.74v-73.69l42.8 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M393.55 486.37l-4.44 4.43 42.95 24.9v-7.1l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M393.55 419.48v66.89l-4.44 4.43v-73.82l4.44 2.5z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M435 537.33v84.29l-48.67-28.19v-83.82L435 537.33z"
              />
              <path
                data-name="Window"
                d="M432.06 540.73v74.09l-42.8-24.73V516.4l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M393.55 585.65l-4.44 4.44 42.95 24.89v-7.1l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M393.55 518.76v66.89l-4.44 4.44v-73.84l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M435 636.44v84.28l-48.67-28.19v-83.82L435 636.44z"
              />
              <path
                data-name="Window"
                d="M432.06 639.83v74.1l-42.8-24.74V615.5l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M393.55 684.75l-4.44 4.44 42.95 24.89v-7.1l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M393.55 617.87v66.88l-4.44 4.44v-73.83l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M435 735.54v84.27l-48.67-28.18V707.8L435 735.54z"
              />
              <path
                data-name="Window"
                d="M432.06 738.93v74.09l-42.8-24.74V714.6l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M393.55 783.85l-4.44 4.43 42.95 24.89v-7.09l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M393.55 716.96v66.89l-4.44 4.43v-73.84l4.44 2.52z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M435 834.63v84.28l-48.67-28.18v-83.82L435 834.63z"
              />
              <path
                data-name="Window"
                d="M432.06 838.03v74.1l-42.8-24.75v-73.69l42.8 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M393.55 882.95l-4.44 4.43 42.95 24.89v-7.09l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M393.55 816.06v66.89l-4.44 4.43v-73.82l4.44 2.5z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M499.38 475.94v84.27l-48.67-28.18V448.2l48.67 27.74z"
              />
              <path
                data-name="Window"
                d="M496.44 479.33v74.1l-42.8-24.73V455l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M457.93 524.25l-4.44 4.45 42.95 24.88v-7.1l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M457.93 457.37v66.88l-4.44 4.45v-73.85l4.44 2.52z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M499.38 575.23v84.27l-48.67-28.19v-83.82l48.67 27.74z"
              />
              <path
                data-name="Window"
                d="M496.44 578.62v74.09l-42.8-24.74v-73.69l42.8 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M457.93 623.54l-4.44 4.43 42.95 24.89v-7.09l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M457.93 556.65v66.89l-4.44 4.43v-73.83l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M499.38 674.31v84.28l-48.67-28.18v-83.83l48.67 27.73z"
              />
              <path
                data-name="Window"
                d="M496.44 677.71v74.09l-42.8-24.73v-73.7l42.8 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M457.93 722.63l-4.44 4.44 42.95 24.88v-7.09l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M457.93 655.75v66.88l-4.44 4.44v-73.84l4.44 2.52z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M499.38 773.41v84.29l-48.67-28.19v-83.82l48.67 27.72z"
              />
              <path
                data-name="Window"
                d="M496.44 776.81v74.09l-42.8-24.74v-73.68l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M457.93 821.73l-4.44 4.43 42.95 24.9v-7.1l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M457.93 754.85v66.88l-4.44 4.43v-73.83l4.44 2.52z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M499.38 872.5v84.28l-48.67-28.18v-83.82l48.67 27.72z"
              />
              <path
                data-name="Window"
                d="M496.44 875.9v74.09l-42.8-24.74v-73.69l42.8 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M457.93 920.82l-4.44 4.43 42.95 24.89v-7.09l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M457.93 853.92v66.9l-4.44 4.43v-73.83l4.44 2.5z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M563.88 512.73V597l-48.67-28.17V485l48.67 27.73z"
              />
              <path
                data-name="Window"
                d="M560.95 516.12v74.1l-42.81-24.74v-73.69l42.81 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M522.43 561.04l-4.44 4.44 42.96 24.89v-7.1l-38.52-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M522.43 494.15v66.89l-4.44 4.44v-73.84l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M563.88 612v84.29l-48.67-28.19v-83.82L563.88 612z"
              />
              <path
                data-name="Window"
                d="M560.95 615.4v74.1l-42.81-24.74v-73.69l42.81 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M522.43 660.32l-4.44 4.44 42.96 24.89v-7.11l-38.52-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M522.43 593.43v66.89l-4.44 4.44v-73.83l4.44 2.5z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M563.88 711.11v84.28l-48.67-28.19v-83.82l48.67 27.73z"
              />
              <path
                data-name="Window"
                d="M560.95 714.51v74.09l-42.81-24.74v-73.69l42.81 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M522.43 759.44l-4.44 4.42 42.96 24.89v-7.1l-38.52-22.21z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M522.43 692.53v66.91l-4.44 4.42v-73.83l4.44 2.5z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M563.88 810.21v84.28l-48.67-28.19v-83.81l48.67 27.72z"
              />
              <path
                data-name="Window"
                d="M560.95 813.61v74.08l-42.81-24.74v-73.68l42.81 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M522.43 858.53l-4.44 4.42 42.96 24.9v-7.1l-38.52-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M522.43 791.64v66.89l-4.44 4.42v-73.82l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M563.88 909.3v84.28l-48.67-28.19v-83.83l48.67 27.74z"
              />
              <path
                data-name="Window"
                d="M560.95 912.7v74.09l-42.81-24.75v-73.68l42.81 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M522.43 957.62l-4.44 4.42 42.96 24.9v-7.1l-38.52-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M522.43 890.72v66.9l-4.44 4.42v-73.83l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M627.01 549.27v84.28l-48.67-28.19v-83.83l48.67 27.74z"
              />
              <path
                data-name="Window"
                d="M624.07 552.66v74.09l-42.79-24.73v-73.7l42.79 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M585.56 597.58l-4.44 4.44 42.95 24.89v-7.11l-38.51-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M585.56 530.69v66.89l-4.44 4.44v-73.84l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M627.01 648.55v84.28l-48.67-28.18v-83.84l48.67 27.74z"
              />
              <path
                data-name="Window"
                d="M624.07 651.95v74.09l-42.79-24.74v-73.69l42.79 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M585.56 696.87l-4.44 4.43 42.95 24.89v-7.1l-38.51-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M585.56 629.98v66.89l-4.44 4.43v-73.84l4.44 2.52z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M627.01 747.65v84.28l-48.67-28.18v-83.83l48.67 27.73z"
              />
              <path
                data-name="Window"
                d="M624.07 751.05v74.09l-42.79-24.74v-73.69l42.79 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M585.56 795.97l-4.44 4.43 42.95 24.89v-7.1l-38.51-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M585.56 729.07v66.9l-4.44 4.43v-73.84l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M627.01 846.75v84.28l-48.67-28.19v-83.82l48.67 27.73z"
              />
              <path
                data-name="Window"
                d="M624.07 850.16v74.08l-42.79-24.74v-73.69l42.79 24.35z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M585.56 895.07l-4.44 4.43 42.95 24.9v-7.1l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M585.56 828.17v66.9l-4.44 4.43v-73.83l4.44 2.5z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M627.01 945.84v84.28l-48.67-28.19v-83.82l48.67 27.73z"
              />
              <path
                data-name="Window"
                d="M624.07 949.23v74.1l-42.79-24.74V924.9l42.79 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M585.56 994.16l-4.44 4.43 42.95 24.88v-7.09l-38.51-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M585.56 927.27v66.89l-4.44 4.43v-73.84l4.44 2.52z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M692.34 587.87v84.27l-48.67-28.18v-83.83l48.67 27.74z"
              />
              <path
                data-name="Window"
                d="M689.4 591.25v74.11l-42.8-24.74v-73.7l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M650.88 636.17l-4.44 4.45 42.96 24.88v-7.09l-38.52-22.24z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M650.88 569.29v66.88l-4.44 4.45v-73.84l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M692.34 687.14v84.28l-48.67-28.19v-83.81l48.67 27.72z"
              />
              <path
                data-name="Window"
                d="M689.4 690.54v74.09l-42.8-24.74V666.2l42.8 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M650.88 735.47l-4.44 4.42 42.96 24.89v-7.09l-38.52-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M650.88 668.57v66.9l-4.44 4.42v-73.82l4.44 2.5z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M692.34 786.24v84.28l-48.67-28.18v-83.83l48.67 27.73z"
              />
              <path
                data-name="Window"
                d="M689.4 789.64v74.1l-42.8-24.75v-73.68l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M650.88 834.56l-4.44 4.43 42.96 24.9v-7.11l-38.52-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M650.88 767.67v66.89l-4.44 4.43v-73.83l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M692.34 885.34v84.29l-48.67-28.19v-83.82l48.67 27.72z"
              />
              <path
                data-name="Window"
                d="M689.4 888.75v74.09l-42.8-24.74v-73.69l42.8 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M650.88 933.67l-4.44 4.43 42.96 24.89v-7.1l-38.52-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M650.88 866.77v66.9l-4.44 4.43v-73.84l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M692.34 984.43v84.28l-48.67-28.19v-83.81l48.67 27.72z"
              />
              <path
                data-name="Window"
                d="M689.4 987.84v74.07l-42.8-24.73V963.5l42.8 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M650.88 1032.75l-4.44 4.43 42.96 24.9v-7.1l-38.52-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M650.88 965.85v66.9l-4.44 4.43v-73.83l4.44 2.5z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M756.97 624.43v84.28l-48.68-28.19V596.7l48.68 27.73z"
              />
              <path
                data-name="Window"
                d="M754.03 627.82v74.1l-42.8-24.74v-73.69l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M715.52 672.75l-4.44 4.43 42.95 24.9v-7.11l-38.51-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M715.52 605.85v66.9l-4.44 4.43v-73.83l4.44 2.5z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M756.97 723.72V808l-48.68-28.19v-83.82l48.68 27.73z"
              />
              <path
                data-name="Window"
                d="M754.03 727.11v74.1l-42.8-24.74v-73.69l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M715.52 772.03l-4.44 4.44 42.95 24.89v-7.1l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M715.52 705.14v66.89l-4.44 4.44v-73.84l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M756.97 822.82v84.28l-48.68-28.19v-83.82l48.68 27.73z"
              />
              <path
                data-name="Window"
                d="M754.03 826.22v74.09l-42.8-24.74v-73.7l42.8 24.35z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M715.52 871.13l-4.44 4.44 42.95 24.89v-7.09l-38.51-22.24z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M715.52 804.24v66.89l-4.44 4.44v-73.84l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M756.97 921.91v84.27l-48.68-28.19v-83.81l48.68 27.73z"
              />
              <path
                data-name="Window"
                d="M754.03 925.3v74.09l-42.8-24.73v-73.7l42.8 24.34z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M715.52 970.22l-4.44 4.44 42.95 24.89v-7.11l-38.51-22.22z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M715.52 903.33v66.89l-4.44 4.44v-73.84l4.44 2.51z"
              />
            </g>
            <g>
              <path
                data-name="Window_Frame"
                d="M756.97 1021.01v84.28l-48.68-28.19v-83.82l48.68 27.73z"
              />
              <path
                data-name="Window"
                d="M754.03 1024.4v74.1l-42.8-24.74v-73.69l42.8 24.33z"
              />
              <path
                data-name="Window_Frame_Down"
                d="M715.52 1069.33l-4.44 4.43 42.95 24.88v-7.08l-38.51-22.23z"
              />
              <path
                data-name="Window_Frame_Side"
                d="M715.52 1002.44v66.89l-4.44 4.43v-73.83l4.44 2.51z"
              />
            </g>
            <g>
              <g data-name="Door_1">
                <path d="M233.65 1009.14l-.16 153.71-76.76-44.85.16-154.61 76.76 45.75z" />
                <path d="M230.71 1012.55l-.15 143.5-70.9-41.74.16-144.14 70.89 42.38z" />
                <path d="M163.95 1109.87l-4.43 4.44 71.04 41.9v-7.1l-66.61-39.24z" />
                <path d="M164.11 972.7l-.16 137.17-4.43 4.44.14-144.12 4.45 2.51z" />
              </g>
              <path
                data-name="Door_Frame"
                d="M157.15 963.44l-.17 154.7-76.76-45.64.16-154.81 76.77 45.75z"
              />
              <path
                data-name="Door"
                d="M154.21 966.84l-.16 144.53-70.87-42.2.14-144.71 70.89 42.38z"
              />
              <path
                data-name="Door_Frame_Down"
                d="M87.44 1064.73l-4.42 4.44 71.03 42.35v-7.1l-66.61-39.69z"
              />
              <path
                data-name="Door_Frame_Side"
                d="M87.6 926.99l-.16 137.74-4.42 4.44.16-144.69 4.42 2.51z"
              />
              <g data-name="Door_2">
                <g data-name="Door_1">
                  <path
                    data-name="Door_Frame"
                    d="M408.79 1112.11l-.16 153.69-76.75-45.06.17-154.39 76.74 45.76z"
                  />
                  <path
                    data-name="Door"
                    d="M405.86 1115.5l-.15 143.52-70.88-42.15.15-143.73 70.88 42.36z"
                  />
                  <path
                    data-name="Door_Frame_Down"
                    d="M339.11 1212.44l-4.42 4.43 71.02 42.29v-7.08l-66.6-39.64z"
                  />
                  <path
                    data-name="Door_Frame_Side"
                    d="M339.27 1075.65l-.16 136.79-4.42 4.43.14-143.73 4.44 2.51z"
                  />
                </g>
                <g data-name="Door_2">
                  <path
                    data-name="Door_Frame"
                    d="M332.36 1066.6l-.14 154.33-76.76-44.99.15-155.09 76.75 45.75z"
                  />
                  <path
                    data-name="Door"
                    d="M329.43 1070l-.15 144.15-70.89-41.56.16-144.95 70.88 42.36z"
                  />
                  <path
                    data-name="Door_Frame_Down"
                    d="M262.68 1168.17l-4.44 4.42 71.04 41.71v-7.11l-66.6-39.02z"
                  />
                  <path
                    data-name="Door_Frame_Side"
                    d="M262.84 1030.16l-.16 138.01-4.44 4.42.15-144.95 4.45 2.52z"
                  />
                </g>
              </g>
              <g>
                <g data-name="Door_1">
                  <path
                    data-name="Door_Frame"
                    d="M588.7 1218.34l-.16 153.72-76.74-45.4.13-154.08 76.77 45.76z"
                  />
                  <path
                    data-name="Door"
                    d="M585.76 1221.74l-.15 143.51-70.88-42.28.15-143.6 70.88 42.37z"
                  />
                  <path
                    data-name="Door_Frame_Down"
                    d="M519 1318.53l-4.42 4.44 71.03 42.45v-7.12L519 1318.53z"
                  />
                  <path
                    data-name="Door_Frame_Side"
                    d="M519.16 1181.89l-.16 136.64-4.42 4.44.15-143.58 4.43 2.5z"
                  />
                </g>
                <g data-name="Door_2">
                  <path
                    data-name="Door_Frame"
                    d="M512.76 1173.01l-.16 154.17-76.75-45.32.14-154.6 76.77 45.75z"
                  />
                  <path
                    data-name="Door"
                    d="M509.82 1176.4l-.16 143.99-70.87-41.87.14-144.49 70.89 42.37z"
                  />
                  <path
                    data-name="Door_Frame_Down"
                    d="M443.07 1274.08l-4.44 4.44 71.03 42.03v-7.11l-66.59-39.36z"
                  />
                  <path
                    data-name="Door_Frame_Side"
                    d="M443.21 1136.56l-.14 137.52-4.44 4.44.16-144.48 4.42 2.52z"
                  />
                </g>
              </g>
              <g>
                <g data-name="Door_1">
                  <path
                    data-name="Door_Frame"
                    d="M1032.31 1353.88l-.14 153.67-76.76-45.82.15-153.63 76.75 45.78z"
                  />
                  <path
                    data-name="Door"
                    d="M1029.39 1357.25l-.16 143.52-70.88-42.75.15-143.12 70.89 42.35z"
                  />
                  <path
                    data-name="Door_Frame_Down"
                    d="M962.64 1453.58l-4.43 4.44 71.02 42.92v-7.11l-66.59-40.25z"
                  />
                  <path
                    data-name="Door_Frame_Side"
                    d="M962.79 1317.62l-.15 136.14-4.43 4.45.14-143.13 4.44 2.54z"
                  />
                </g>
                <g data-name="Door_2">
                  <path
                    data-name="Door_Frame"
                    d="M956.19 1308.44l-.15 153.7-76.77-46.21.16-153.25 76.76 45.76z"
                  />
                  <path
                    data-name="Door"
                    d="M953.25 1311.83l-.15 143.54-70.89-42.79.16-143.11 70.88 42.36z"
                  />
                  <path
                    data-name="Door_Frame_Down"
                    d="M886.49 1408.16l-4.42 4.42 71.03 42.93v-7.09l-66.61-40.26z"
                  />
                  <path
                    data-name="Door_Frame_Side"
                    d="M886.65 1271.98l-.16 136.18-4.42 4.42.14-143.1 4.44 2.5z"
                  />
                </g>
              </g>
            </g>
            <path
              data-name="Wall_Side"
              d="M710.69 653.5l234.32 139.05v590.07l-234.32-134.01V653.5z"
            />
            <g data-name="Windows">
              <g data-name="Window_1">
                <path
                  data-name="Window_Frame"
                  d="M830.45 795.08l-.16 140.4-76.77-46.21.16-139.94 76.77 45.75z"
                />
                <path
                  data-name="Window"
                  d="M827.51 798.47l-.16 130.24-70.89-42.77.16-129.83 70.89 42.36z"
                />
                <path
                  data-name="Window_Frame_Down"
                  d="M760.75 881.51l-4.43 4.43 68.95 41.91v-7.08l-64.52-39.26z"
                />
                <path
                  data-name="Window_Frame_Side"
                  d="M760.91 758.63l-.16 122.88-4.43 4.43.14-129.81 4.45 2.5z"
                />
              </g>
              <g data-name="Window_2">
                <path
                  data-name="Window_Frame"
                  d="M902.2 837.92l-.15 140.41-76.78-45.86.16-140.3 76.77 45.75z"
                />
                <path
                  data-name="Window"
                  d="M899.25 841.31l-.15 130.22-70.88-42.75.16-129.83 70.87 42.36z"
                />
                <path
                  data-name="Window_Frame_Down"
                  d="M832.51 924.34l-4.44 4.44 71.03 42.92v-7.1l-66.59-40.26z"
                />
                <path
                  data-name="Window_Frame_Side"
                  d="M832.66 801.48l-.15 122.86-4.44 4.44.15-129.82 4.44 2.52z"
                />
              </g>
              <path d="M753.68 749.33v26.59l148.52 84.3v-24.46l-148.52-86.43z" />
              <g data-name="Window_3">
                <path
                  data-name="Window_Frame"
                  d="M830.45 935.17l-.16 140.42-76.77-46.21.16-139.97 76.77 45.76z"
                />
                <path
                  data-name="Window"
                  d="M827.51 938.57l-.16 130.22-70.89-42.76.16-129.82 70.89 42.36z"
                />
                <path
                  data-name="Window_Frame_Down"
                  d="M760.75 1021.6l-4.43 4.43 68.95 41.68v-7.1l-64.52-39.01z"
                />
                <path
                  data-name="Window_Frame_Side"
                  d="M760.91 898.72l-.16 122.88-4.43 4.43.14-129.82 4.45 2.51z"
                />
              </g>
              <g data-name="Window_4">
                <path
                  data-name="Window_Frame"
                  d="M902.2 978.03l-.15 140.4-76.78-45.85.16-140.33 76.77 45.78z"
                />
                <path
                  data-name="Window"
                  d="M899.25 981.41l-.15 130.22-70.88-42.76.16-129.81 70.87 42.35z"
                />
                <path
                  data-name="Window_Frame_Down"
                  d="M832.51 1064.44l-4.44 4.43 71.03 42.92v-7.11l-66.59-40.24z"
                />
                <path
                  data-name="Window_Frame_Side"
                  d="M832.66 941.59l-.15 122.85-4.44 4.43.15-129.8 4.44 2.52z"
                />
              </g>
              <path
                data-name="Windows_Frame_Front"
                d="M753.52 889.05v27.03L902.2 1004v-26.07l-148.68-88.88z"
              />
              <g data-name="Window_5">
                <path
                  data-name="Window_Frame"
                  d="M830.45 1073.79l-.16 140.4-76.77-46.21.16-139.95 76.77 45.76z"
                />
                <path
                  data-name="Window"
                  d="M827.51 1077.17l-.16 130.24-70.89-42.78.16-129.8 70.89 42.34z"
                />
                <path
                  data-name="Window_Frame_Down"
                  d="M760.75 1160.19l-4.43 4.44 68.95 41.97v-7.1l-64.52-39.31z"
                />
                <path
                  data-name="Window_Frame_Side"
                  d="M760.91 1037.34l-.16 122.85-4.43 4.44.14-129.8 4.45 2.51z"
                />
              </g>
              <g data-name="Window_6">
                <path
                  data-name="Window_Frame"
                  d="M902.2 1116.63l-.15 140.4-76.78-45.85.16-140.31 76.77 45.76z"
                />
                <path
                  data-name="Window"
                  d="M899.25 1120.02l-.15 130.21-70.88-42.74.16-129.84 70.87 42.37z"
                />
                <path
                  data-name="Window_Frame_Down"
                  d="M832.51 1203.04l-4.44 4.45 71.03 42.9v-7.09l-66.59-40.26z"
                />
                <path
                  data-name="Window_Frame_Side"
                  d="M832.66 1080.18l-.15 122.86-4.44 4.45.15-129.82 4.44 2.51z"
                />
              </g>
              <path
                data-name="Windows_Frame_Front"
                d="M753.52 1167.96v27.03l148.68 87.91v-26.08l-148.68-88.86zM753.52 1032.41v27.03l148.68 87.93v-26.08l-148.68-88.88z"
              />
            </g>
            <g>
              <path d="M945.01 792.55v590.07l857-495.88-.72-589.85-856.28 495.66zM1074.1 1307.95v224.5l727.85-419.31.06-226.4-727.91 421.21z" />
              <g data-name="Windows">
                <g data-name="Window_1">
                  <path
                    data-name="Window_Frame"
                    d="M1113.04 775.75v84.27l48.66-28.55v-83.84l-48.66 28.12z"
                  />
                  <path
                    data-name="Window"
                    d="M1115.97 779.15v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1154.48 823.69l4.44 4.44-42.95 25.25v-7.09l38.51-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1154.48 756.8v66.89l4.44 4.44v-73.84l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_2">
                  <path
                    data-name="Window_Frame"
                    d="M1113.04 874.84v84.28l48.66-28.57v-83.81l-48.66 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1115.97 878.24v74.09l42.8-25.1v-73.7l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1154.48 922.79l4.44 4.44-42.95 25.25v-7.1l38.51-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1154.48 855.89v66.9l4.44 4.44v-73.84l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_3">
                  <path
                    data-name="Window_Frame"
                    d="M1113.04 973.95v84.27l48.66-28.56v-83.82l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1115.97 977.35v74.08l42.8-25.11v-73.68l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1154.48 1021.89l4.44 4.43-42.95 25.26v-7.1l38.51-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1154.48 955v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_4">
                  <path
                    data-name="Window_Frame"
                    d="M1113.04 1073.05v84.28l48.66-28.56v-83.83l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1115.97 1076.44v74.1l42.8-25.11v-73.69l-42.8 24.7z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1154.48 1120.99l4.44 4.44-42.95 25.25v-7.09l38.51-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1154.48 1054.11v66.88l4.44 4.44v-73.84l-4.44 2.52z"
                  />
                </g>
                <g data-name="Window_5">
                  <path
                    data-name="Window_Frame"
                    d="M1113.04 1172.13v84.27l48.66-28.54v-83.82l-48.66 28.09z"
                  />
                  <path
                    data-name="Window"
                    d="M1115.97 1175.53v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1154.48 1220.08l4.44 4.43-42.95 25.25v-7.08l38.51-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1154.48 1153.19v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_6">
                  <path
                    data-name="Window_Frame"
                    d="M1175.59 738.66v84.28l48.65-28.56v-83.83l-48.65 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1178.51 742.06v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1217.02 786.61l4.44 4.43-42.95 25.26v-7.09l38.51-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1217.02 719.72v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_7">
                  <path
                    data-name="Window_Frame"
                    d="M1175.59 837.77v84.27l48.65-28.55v-83.83l-48.65 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1178.51 841.16v74.1l42.8-25.11v-73.7l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1217.02 885.72l4.44 4.43-42.95 25.25v-7.09l38.51-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1217.02 818.82v66.9l4.44 4.43v-73.83l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_8">
                  <path
                    data-name="Window_Frame"
                    d="M1175.59 936.85v84.28l48.65-28.57v-83.82l-48.65 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1178.51 940.25v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1217.02 984.79l4.44 4.44-42.95 25.26v-7.11l38.51-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1217.02 917.9v66.89l4.44 4.44V915.4l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_9">
                  <path
                    data-name="Window_Frame"
                    d="M1175.59 1035.95v84.28l48.65-28.55v-83.83l-48.65 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1178.51 1039.35v74.1l42.8-25.12v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1217.02 1083.91l4.44 4.42-42.95 25.25v-7.09l38.51-22.58z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1217.02 1017v66.91l4.44 4.42v-73.83l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_10">
                  <path
                    data-name="Window_Frame"
                    d="M1175.59 1135.04v84.28l48.65-28.56v-83.82l-48.65 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1178.51 1138.44v74.1l42.8-25.12v-73.68l-42.8 24.7z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1217.02 1182.98l4.44 4.44-42.95 25.25v-7.09l38.51-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1217.02 1116.09v66.89l4.44 4.44v-73.84l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_11">
                  <path
                    data-name="Window_Frame"
                    d="M1240.22 702.09v84.29l48.66-28.56v-83.83l-48.66 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1243.14 705.49v74.1l42.8-25.11v-73.7l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1281.66 750.04l4.44 4.44-42.96 25.25v-7.09l38.52-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1281.66 683.15v66.89l4.44 4.44v-73.83l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_12">
                  <path
                    data-name="Window_Frame"
                    d="M1240.22 801.19v84.27l48.66-28.55v-83.83l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1243.14 804.59v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1281.66 849.14l4.44 4.43-42.96 25.26v-7.1l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1281.66 782.24v66.9l4.44 4.43v-73.83l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_13">
                  <path
                    data-name="Window_Frame"
                    d="M1240.22 900.29v84.28l48.66-28.55v-83.83l-48.66 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1243.14 903.7v74.09l42.8-25.12v-73.69l-42.8 24.72z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1281.66 948.24l4.44 4.43-42.96 25.26v-7.09l38.52-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1281.66 881.34v66.9l4.44 4.43v-73.83l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_14">
                  <path
                    data-name="Window_Frame"
                    d="M1240.22 999.38v84.28l48.66-28.56v-83.83l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1243.14 1002.78v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1281.66 1047.33l4.44 4.43-42.96 25.26v-7.09l38.52-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1281.66 980.43v66.9l4.44 4.43v-73.83l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_15">
                  <path
                    data-name="Window_Frame"
                    d="M1240.22 1098.49v84.27l48.66-28.56v-83.82l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1243.14 1101.88v74.1l42.8-25.11v-73.7l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1281.66 1146.42l4.44 4.45-42.96 25.24v-7.08l38.52-22.61z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1281.66 1079.54v66.88l4.44 4.45v-73.84l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_16">
                  <path
                    data-name="Window_Frame"
                    d="M1305.55 663.5v84.28l48.66-28.56V635.4l-48.66 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1308.47 666.9V741l42.8-25.12v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1346.99 711.45l4.43 4.43-42.95 25.25v-7.09l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1346.99 644.55v66.9l4.43 4.43v-73.83l-4.43 2.5z"
                  />
                </g>
                <g data-name="Window_17">
                  <path
                    data-name="Window_Frame"
                    d="M1305.55 762.6v84.27l48.66-28.56v-83.82l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1308.47 766v74.08l42.8-25.1v-73.7l-42.8 24.72z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1346.99 810.55l4.43 4.43-42.95 25.24v-7.08l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1346.99 743.65v66.9l4.43 4.43v-73.83l-4.43 2.5z"
                  />
                </g>
                <g data-name="Window_18">
                  <path
                    data-name="Window_Frame"
                    d="M1305.55 861.7v84.28l48.66-28.56V833.6l-48.66 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1308.47 865.09v74.1l42.8-25.11v-73.7l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1346.99 909.65l4.43 4.43-42.95 25.25v-7.09l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1346.99 842.75v66.9l4.43 4.43v-73.83l-4.43 2.5z"
                  />
                </g>
                <g data-name="Window_19">
                  <path
                    data-name="Window_Frame"
                    d="M1305.55 960.78v84.28l48.66-28.55v-83.83l-48.66 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1308.47 964.18v74.1l42.8-25.12v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1346.99 1008.74l4.43 4.42-42.95 25.25v-7.08l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1346.99 941.84v66.9l4.43 4.42v-73.83l-4.43 2.51z"
                  />
                </g>
                <g data-name="Window_20">
                  <path
                    data-name="Window_Frame"
                    d="M1305.55 1059.89v84.28l48.66-28.56v-83.82l-48.66 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1308.47 1063.29v74.09l42.8-25.11v-73.7l-42.8 24.72z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1346.99 1107.84l4.43 4.43-42.95 25.25v-7.09l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1346.99 1040.95v66.89l4.43 4.43v-73.84l-4.43 2.52z"
                  />
                </g>
                <g data-name="Window_21">
                  <path
                    data-name="Window_Frame"
                    d="M1368.68 626.96v84.28l48.66-28.56v-83.82l-48.66 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1371.6 630.36v74.09l42.8-25.11v-73.7l-42.8 24.72z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1410.12 674.9l4.44 4.44-42.96 25.25v-7.09l38.52-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1410.12 608v66.9l4.44 4.44V605.5l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_22">
                  <path
                    data-name="Window_Frame"
                    d="M1368.68 726.06v84.27l48.66-28.56v-83.82l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1371.6 729.45v74.1l42.8-25.12v-73.68l-42.8 24.7z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1410.12 774l4.44 4.43-42.96 25.26v-7.1l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1410.12 707.1V774l4.44 4.43v-73.82l-4.44 2.49z"
                  />
                </g>
                <g data-name="Window_23">
                  <path
                    data-name="Window_Frame"
                    d="M1368.68 825.16v84.28l48.66-28.57v-83.82l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1371.6 828.56v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1410.12 873.11l4.44 4.43-42.96 25.25v-7.1l38.52-22.58z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1410.12 806.21v66.9l4.44 4.43V803.7l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_24">
                  <path
                    data-name="Window_Frame"
                    d="M1368.68 924.24v84.29l48.66-28.56v-83.83l-48.66 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1371.6 927.64v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1410.12 972.19l4.44 4.43-42.96 25.26v-7.09l38.52-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1410.12 905.3v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_25">
                  <path
                    data-name="Window_Frame"
                    d="M1368.68 1023.35v84.27l48.66-28.56v-83.82l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1371.6 1026.74v74.1l42.8-25.11v-73.7l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1410.12 1071.29l4.44 4.44-42.96 25.25v-7.1l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1410.12 1004.4v66.89l4.44 4.44v-73.84l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_26">
                  <path
                    data-name="Window_Frame"
                    d="M1433.19 590.17v84.28l48.65-28.56v-83.83l-48.65 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1436.1 593.56v74.1l42.8-25.11v-73.68l-42.8 24.69z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1474.62 638.12l4.44 4.43-42.96 25.25v-7.09l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1474.62 571.21v66.91l4.44 4.43v-73.83l-4.44 2.49z"
                  />
                </g>
                <g data-name="Window_27">
                  <path
                    data-name="Window_Frame"
                    d="M1433.19 689.25v84.29l48.65-28.56v-83.82l-48.65 28.09z"
                  />
                  <path
                    data-name="Window"
                    d="M1436.1 692.66v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1474.62 737.21l4.44 4.43-42.96 25.25v-7.09l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1474.62 670.32v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_28">
                  <path
                    data-name="Window_Frame"
                    d="M1433.19 788.36v84.28l48.65-28.56v-83.82l-48.65 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1436.1 791.77v74.08l42.8-25.11v-73.69l-42.8 24.72z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1474.62 836.31l4.44 4.43-42.96 25.25v-7.08l38.52-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1474.62 769.41v66.9l4.44 4.43v-73.83l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_29">
                  <path
                    data-name="Window_Frame"
                    d="M1433.19 887.45v84.27l48.65-28.55v-83.83l-48.65 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1436.1 890.85v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1474.62 935.4l4.44 4.43-42.96 25.25v-7.09l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1474.62 868.5v66.9l4.44 4.43V866l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_30">
                  <path
                    data-name="Window_Frame"
                    d="M1433.19 986.55v84.28l48.65-28.55v-83.83l-48.65 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1436.1 989.95v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1474.62 1034.5l4.44 4.43-42.96 25.25v-7.08l38.52-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1474.62 967.61v66.89l4.44 4.43v-73.82l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_31">
                  <path
                    data-name="Window_Frame"
                    d="M1497.57 552.29v84.27l48.65-28.56v-83.82l-48.65 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1500.49 555.69v74.09l42.79-25.11v-73.7l-42.79 24.72z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1539 600.23l4.44 4.44-42.95 25.25v-7.09l38.51-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1539 533.34v66.89l4.44 4.44v-73.84l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_32">
                  <path
                    data-name="Window_Frame"
                    d="M1497.57 651.38v84.28l48.65-28.56v-83.82l-48.65 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1500.49 654.77v74.1l42.79-25.1v-73.7l-42.79 24.7z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1539 699.33l4.44 4.44-42.95 25.25v-7.09l38.51-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1539 632.43v66.9l4.44 4.44v-73.84l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_33">
                  <path
                    data-name="Window_Frame"
                    d="M1497.57 750.47v84.29l48.65-28.56v-83.82l-48.65 28.09z"
                  />
                  <path
                    data-name="Window"
                    d="M1500.49 753.88v74.09l42.79-25.11v-73.7l-42.79 24.72z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1539 798.42l4.44 4.44-42.95 25.25v-7.08l38.51-22.61z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1539 731.53v66.89l4.44 4.44v-73.83l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_34">
                  <path
                    data-name="Window_Frame"
                    d="M1497.57 849.58v84.28l48.65-28.56v-83.82l-48.65 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1500.49 852.98v74.09l42.79-25.11v-73.69l-42.79 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1539 897.53l4.44 4.43-42.95 25.26v-7.1l38.51-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1539 830.64v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_35">
                  <path
                    data-name="Window_Frame"
                    d="M1497.57 948.67v84.28l48.65-28.56v-83.82l-48.65 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1500.49 952.07v74.09l42.79-25.11v-73.69l-42.79 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1539 996.62l4.44 4.43-42.95 25.25v-7.09l38.51-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1539 929.73v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_36">
                  <path
                    data-name="Window_Frame"
                    d="M1561.44 514.71v84.28l48.66-28.56V486.6l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1564.36 518.11v74.09l42.8-25.11v-73.7l-42.8 24.72z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1602.88 562.66l4.44 4.43-42.96 25.25v-7.09l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1602.88 495.76v66.9l4.44 4.43v-73.83l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_37">
                  <path
                    data-name="Window_Frame"
                    d="M1561.44 613.8v84.28l48.66-28.56v-83.83l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1564.36 617.2v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1602.88 661.75l4.44 4.43-42.96 25.25v-7.08l38.52-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1602.88 594.86v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_38">
                  <path
                    data-name="Window_Frame"
                    d="M1561.44 712.89v84.28l48.66-28.55v-83.83l-48.66 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1564.36 716.29v74.09l42.8-25.11v-73.68l-42.8 24.7z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1602.88 760.85l4.44 4.42-42.96 25.26v-7.1l38.52-22.58z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1602.88 693.95v66.9l4.44 4.42v-73.83l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_39">
                  <path
                    data-name="Window_Frame"
                    d="M1561.44 812v84.27l48.66-28.55V783.9l-48.66 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1564.36 815.4v74.09l42.8-25.11v-73.7l-42.8 24.72z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1602.88 859.95l4.44 4.43-42.96 25.25v-7.09l38.52-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1602.88 793.05v66.9l4.44 4.43v-73.83l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_40">
                  <path
                    data-name="Window_Frame"
                    d="M1561.44 911.11v84.27l48.66-28.56V883l-48.66 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1564.36 914.5v74.1l42.8-25.12v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1602.88 959.04l4.44 4.44-42.96 25.25v-7.09l38.52-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1602.88 892.15v66.89l4.44 4.44v-73.84l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_41">
                  <path
                    data-name="Window_Frame"
                    d="M1626.48 478.17v84.26l48.65-28.55v-83.82l-48.65 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1629.4 481.56v74.09l42.8-25.11v-73.68l-42.8 24.7z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1667.91 526.11l4.44 4.43-42.95 25.25v-7.09l38.51-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1667.91 459.21v66.9l4.44 4.43V456.7l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_42">
                  <path
                    data-name="Window_Frame"
                    d="M1626.48 577.25v84.28l48.65-28.55v-83.82l-48.65 28.09z"
                  />
                  <path
                    data-name="Window"
                    d="M1629.4 580.65v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1667.91 625.21l4.44 4.42-42.95 25.26v-7.09l38.51-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1667.91 558.3v66.91l4.44 4.42V555.8l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_43">
                  <path
                    data-name="Window_Frame"
                    d="M1626.48 676.35v84.28l48.65-28.55v-83.83l-48.65 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1629.4 679.75v74.1l42.8-25.11v-73.7l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1667.91 724.3l4.44 4.44-42.95 25.25v-7.09l38.51-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1667.91 657.41v66.89l4.44 4.44V654.9l-4.44 2.51z"
                  />
                </g>
                <g data-name="Window_44">
                  <path
                    data-name="Window_Frame"
                    d="M1626.48 775.45v84.27l48.65-28.55v-83.83l-48.65 28.11z"
                  />
                  <path
                    data-name="Window"
                    d="M1629.4 778.85v74.09l42.8-25.11v-73.69l-42.8 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1667.91 823.4l4.44 4.43-42.95 25.25v-7.09l38.51-22.59z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1667.91 756.5v66.9l4.44 4.43V754l-4.44 2.5z"
                  />
                </g>
                <g data-name="Window_45">
                  <path
                    data-name="Window_Frame"
                    d="M1626.48 874.53v84.29l48.65-28.56v-83.82l-48.65 28.09z"
                  />
                  <path
                    data-name="Window"
                    d="M1629.4 877.94v74.09l42.8-25.11v-73.7l-42.8 24.72z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1667.91 922.49l4.44 4.43-42.95 25.26v-7.09l38.51-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1667.91 855.6v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                  />
                </g>
                <path
                  data-name="Window_Frame"
                  d="M1693.5 439.24v84.28l63.81-36.92v-83.82l-63.81 36.46z"
                />
                <path
                  data-name="Window"
                  d="M1696.44 442.63v74.1l57.93-33.46v-73.69l-57.93 33.05z"
                />
                <path
                  data-name="Window_Frame_Down"
                  d="M1750.09 478.83l4.44 4.44-58.09 33.61v-7.09l53.65-30.96z"
                />
                <path
                  data-name="Window_Frame_Side"
                  d="M1750.09 411.94v66.89l4.44 4.44v-73.84l-4.44 2.51z"
                />
                <path
                  data-name="Window_Frame"
                  d="M1693.5 538.34v84.28l63.81-36.92v-83.81l-63.81 36.45z"
                />
                <path
                  data-name="Window"
                  d="M1696.44 541.73v74.1l57.93-33.47v-73.68l-57.93 33.05z"
                />
                <path
                  data-name="Window_Frame_Down"
                  d="M1750.09 577.93l4.44 4.43-58.09 33.62v-7.11l53.65-30.94z"
                />
                <path
                  data-name="Window_Frame_Side"
                  d="M1750.09 511.04v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                />
                <path
                  data-name="Window_Frame"
                  d="M1693.5 637.43v84.28l63.81-36.92v-83.81l-63.81 36.45z"
                />
                <path
                  data-name="Window"
                  d="M1696.44 640.83v74.09l57.93-33.46v-73.69l-57.93 33.06z"
                />
                <path
                  data-name="Window_Frame_Down"
                  d="M1750.09 677.03l4.44 4.43-58.09 33.62v-7.1l53.65-30.95z"
                />
                <path
                  data-name="Window_Frame_Side"
                  d="M1750.09 610.14v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                />
                <g>
                  <path
                    data-name="Window_Frame"
                    d="M1693.5 736.53v84.28l63.81-36.92v-83.81l-63.81 36.45z"
                  />
                  <path
                    data-name="Window"
                    d="M1696.44 739.92v74.1l57.93-33.47v-73.69l-57.93 33.06z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1750.09 776.11l4.44 4.44-58.09 33.62v-7.1l53.65-30.96z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1750.09 709.23v66.88l4.44 4.44v-73.83l-4.44 2.51z"
                  />
                </g>
                <g>
                  <path
                    data-name="Window_Frame"
                    d="M1693.5 835.63v84.27l63.81-36.91v-83.81l-63.81 36.45z"
                  />
                  <path
                    data-name="Window"
                    d="M1696.44 839.03v74.09l57.93-33.47v-73.68l-57.93 33.06z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1750.09 875.22l4.44 4.43-58.09 33.61v-7.09l53.65-30.95z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1750.09 808.33v66.89l4.44 4.43v-73.83l-4.44 2.51z"
                  />
                </g>
                <g>
                  <path
                    data-name="Window_Frame"
                    d="M1241.73 1264.45v171.33l48.68-28.06v-171.37l-48.68 28.1z"
                  />
                  <path
                    data-name="Window"
                    d="M1244.67 1267.85v161.65l42.78-25.11v-161.25l-42.78 24.71z"
                  />
                  <path
                    data-name="Window_Frame_Down"
                    d="M1283.19 1399.95l4.42 4.44-42.94 25.25v-7.09l38.52-22.6z"
                  />
                  <path
                    data-name="Window_Frame_Side"
                    d="M1283.19 1245.52v154.43l4.42 4.44V1243l-4.42 2.52z"
                  />
                  <g>
                    <path
                      data-name="Window_Frame"
                      d="M1241.73 1264.45v64.33l48.68-28.56v-63.87l-48.68 28.1z"
                    />
                    <path
                      data-name="Window"
                      d="M1244.67 1267.85v54.14l42.78-25.11v-53.74l-42.78 24.71z"
                    />
                    <path
                      data-name="Window_Frame_Down"
                      d="M1283.19 1292.45l4.42 4.43-42.94 25.25v-7.09l38.52-22.59z"
                    />
                    <path
                      data-name="Window_Frame_Side"
                      d="M1283.19 1245.52v46.93l4.42 4.43V1243l-4.42 2.52z"
                    />
                  </g>
                </g>
                <g>
                  <g data-name="Big_Window">
                    <path
                      data-name="Window_Frame"
                      d="M1304.5 1228.58v171l48.67-27.72v-171.4l-48.67 28.12z"
                    />
                    <path
                      data-name="Window"
                      d="M1307.44 1231.97v161.63l42.78-25.1v-161.24l-42.78 24.71z"
                    />
                    <path
                      data-name="Window_Frame_Down"
                      d="M1345.95 1364.07l4.43 4.43-42.94 25.28v-7.12l38.51-22.59z"
                    />
                    <path
                      data-name="Window_Frame_Side"
                      d="M1345.95 1209.63v154.44l4.43 4.43v-161.38l-4.43 2.51z"
                    />
                  </g>
                  <g data-name="Small_Window">
                    <path
                      data-name="Window_Frame"
                      d="M1304.5 1228.58v64.32l48.67-28.57v-63.87l-48.67 28.12z"
                    />
                    <path
                      data-name="Window"
                      d="M1307.44 1231.97v54.14l42.78-25.09v-53.76l-42.78 24.71z"
                    />
                    <path
                      data-name="Window_Frame_Down"
                      d="M1345.95 1256.56l4.43 4.46-42.94 25.24v-7.1l38.51-22.6z"
                    />
                    <path
                      data-name="Window_Frame_Side"
                      d="M1345.95 1209.63v46.93l4.43 4.46v-53.9l-4.43 2.51z"
                    />
                  </g>
                </g>
                <g>
                  <g data-name="Big_Window">
                    <path
                      data-name="Window_Frame"
                      d="M1368.68 1191.24v171.33l48.67-28.05v-171.36l-48.67 28.08z"
                    />
                    <path
                      data-name="Window"
                      d="M1371.61 1194.64v161.65l42.8-25.1v-161.25l-42.8 24.7z"
                    />
                    <path
                      data-name="Window_Frame_Down"
                      d="M1410.13 1326.75l4.43 4.44-42.95 25.24v-7.1l38.52-22.58z"
                    />
                    <path
                      data-name="Window_Frame_Side"
                      d="M1410.13 1172.3v154.45l4.43 4.44v-161.4l-4.43 2.51z"
                    />
                  </g>
                  <g data-name="Small_Window">
                    <path
                      data-name="Window_Frame"
                      d="M1368.68 1191.24v64.33l48.67-28.56v-63.85l-48.67 28.08z"
                    />
                    <path
                      data-name="Window"
                      d="M1371.61 1194.64v54.14l42.8-25.1v-53.74l-42.8 24.7z"
                    />
                    <path
                      data-name="Window_Frame_Down"
                      d="M1410.13 1219.23l4.43 4.45-42.95 25.25v-7.1l38.52-22.6z"
                    />
                    <path
                      data-name="Window_Frame_Side"
                      d="M1410.13 1172.3v46.93l4.43 4.45v-53.89l-4.43 2.51z"
                    />
                  </g>
                </g>
                <g>
                  <g data-name="Big_Window">
                    <path
                      data-name="Window_Frame"
                      d="M1433.18 1153.89v84.27l48.67-28.54v-83.84l-48.67 28.11z"
                    />
                    <path
                      data-name="Window"
                      d="M1436.12 1157.28v74.08l42.77-25.1v-73.69l-42.77 24.71z"
                    />
                    <path
                      data-name="Window_Frame_Down"
                      d="M1474.63 1201.83l4.43 4.43-42.94 25.27v-7.1l38.51-22.6z"
                    />
                    <path
                      data-name="Window_Frame_Side"
                      d="M1474.63 1134.93v66.9l4.43 4.43v-73.82l-4.43 2.49z"
                    />
                  </g>
                  <g data-name="Small_Window">
                    <path
                      data-name="Window_Frame"
                      d="M1433.18 1249.81v75.66l48.67-28.17v-75.59l-48.67 28.1z"
                    />
                    <path
                      data-name="Window"
                      d="M1436.12 1253.21v65.47l42.77-25.11v-65.07l-42.77 24.71z"
                    />
                    <path
                      data-name="Window_Frame_Down"
                      d="M1474.63 1289.14l4.43 4.43-42.94 25.25v-7.09l38.51-22.59z"
                    />
                    <path
                      data-name="Window_Frame_Side"
                      d="M1474.63 1230.87v58.27l4.43 4.43v-65.21l-4.43 2.51z"
                    />
                  </g>
                </g>
                <g>
                  <g data-name="Big_Window">
                    <path
                      data-name="Window_Frame"
                      d="M1494.61 1118.81v84.28l48.68-28.55v-83.83l-48.68 28.1z"
                    />
                    <path
                      data-name="Window"
                      d="M1497.55 1122.2v74.1l42.79-25.11v-73.68l-42.79 24.69z"
                    />
                    <path
                      data-name="Window_Frame_Down"
                      d="M1536.07 1166.78l4.43 4.41-42.95 25.26v-7.09l38.52-22.58z"
                    />
                    <path
                      data-name="Window_Frame_Side"
                      d="M1536.07 1099.88v66.9l4.43 4.41v-73.82l-4.43 2.51z"
                    />
                  </g>
                  <g data-name="Small_Window">
                    <path
                      data-name="Window_Frame"
                      d="M1494.61 1214.75v75.66l48.68-28.56v-75.19l-48.68 28.09z"
                    />
                    <path
                      data-name="Window"
                      d="M1497.55 1218.15v65.47l42.79-25.11v-65.07l-42.79 24.71z"
                    />
                    <path
                      data-name="Window_Frame_Down"
                      d="M1536.07 1254.07l4.43 4.44-42.95 25.25v-7.1l38.52-22.59z"
                    />
                    <path
                      data-name="Window_Frame_Side"
                      d="M1536.07 1195.81v58.26l4.43 4.44v-65.22l-4.43 2.52z"
                    />
                  </g>
                </g>
              </g>
              <g data-name="Doors">
                <g data-name="Door_1">
                  <g data-name="Door_1">
                    <path
                      data-name="Door_Frame"
                      d="M1170.08 1304.13v172.48l57.04-32.68v-172.49l-57.04 32.69z"
                    />
                    <path
                      data-name="Door"
                      d="M1173.01 1306.89v162.93l51.17-29.26v-162.34l-51.17 28.67z"
                    />
                    <path
                      data-name="Door_Frame_Down"
                      d="M1219.9 1436.14l4.43 4.42-51.32 29.42v-7.1l46.89-26.74z"
                    />
                    <path
                      data-name="Door_Frame_Side"
                      d="M1219.9 1280.74v155.4l4.43 4.42v-162.32l-4.43 2.5z"
                    />
                  </g>
                  <g data-name="Door_2">
                    <path
                      data-name="Door_Frame"
                      d="M1113.04 1336.2v173.49l57.04-32.89v-172.67l-57.04 32.07z"
                    />
                    <path
                      data-name="Door"
                      d="M1115.97 1339.6v163.31l51.17-29.47v-162.51l-51.17 28.67z"
                    />
                    <path
                      data-name="Door_Frame_Down"
                      d="M1162.87 1469.01l4.41 4.43-51.31 29.61v-7.1l46.9-26.94z"
                    />
                    <path
                      data-name="Door_Frame_Side"
                      d="M1162.87 1313.45v155.56l4.41 4.43v-162.51l-4.41 2.52z"
                    />
                  </g>
                  <g data-name="Window">
                    <path
                      data-name="Window_Frame"
                      d="M1113.04 1336.58v39.96l114.08-65.61v-39.49l-114.08 65.14z"
                    />
                    <path
                      data-name="Window"
                      d="M1115.97 1339.98v29.76l108.21-62.15v-29.37l-108.21 61.76z"
                    />
                    <path
                      data-name="Window_Frame_Down"
                      d="M1224.2 1300.56l.13 7.03-108.36 62.31v-7.11l108.23-62.23z"
                    />
                    <path
                      data-name="Window_Frame_Side"
                      d="M1219.9 1280.74v22.4l4.43 4.45v-29.35l-4.43 2.5z"
                    />
                  </g>
                </g>
                <g data-name="Door_2">
                  <g data-name="Door_1">
                    <path
                      data-name="Door_Frame"
                      d="M1564.4 1076v173.87l99.02-56.98v-174.55L1564.4 1076z"
                    />
                    <path
                      data-name="Door"
                      d="M1567.32 1079.4v163.69l93.16-53.52v-164.44l-93.16 54.27z"
                    />
                    <path
                      data-name="Door_Frame_Down"
                      d="M1656.2 1185.11l4.44 4.46-93.32 53.67v-7.11l88.88-51.02z"
                    />
                    <path
                      data-name="Door_Frame_Side"
                      d="M1656.2 1027.5v157.61l4.44 4.46v-164.59l-4.44 2.52z"
                    />
                  </g>
                  <g data-name="Door_2">
                    <path
                      data-name="Door_Frame"
                      d="M1663.06 1018.11v175.02l99.03-56.94V960.45l-99.03 57.66z"
                    />
                    <path
                      data-name="Door"
                      d="M1665.99 1021.5v164.83l93.17-53.48v-165.6l-93.17 54.25z"
                    />
                    <path
                      data-name="Door_Frame_Down"
                      d="M1754.87 1128.4l4.44 4.45-93.32 53.62v-7.08l88.88-50.99z"
                    />
                    <path
                      data-name="Door_Frame_Side"
                      d="M1754.87 969.61v158.79l4.44 4.45V967.11l-4.44 2.5z"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g>
              <path d="M1501 123.61l-427.03 247.95L433.01 1.16 112.18 186.23 817.55 595.3l-106.86 58.2 234.2 139.08 856.53-495.5L1501 123.61z" />
              <path d="M1759.35 297.1L945.01 768.17 753.46 654.51l106.95-58.7-706.47-409.42L433 25.47l640.99 370.42 427.02-247.94 258.34 149.15z" />
              <path d="M860.41 595.81v23.68l-85.81 47.54-21.14-12.52 104.22-57.19 2.73-1.51zM1759.35 297.1l-21.11 12.2-237.23-136.96v.02l-.04-.02-427 247.93L433 49.85h-.02L175.03 198.6l-21.09-12.21L433 25.47l640.14 369.79 427.87-247.31 258.34 149.15z" />
              <path d="M880.63 256.96L684.12 369.01l324.68 185.44 193.09-112.31-321.26-185.18z" />
              <path
                data-name="Front"
                d="M1008.8 554.45v96.06l193.09-112.83v-95.54L1008.8 554.45z"
              />
              <path
                data-name="Side"
                d="M684.12 369.03l324.68 185.42v96.06L684.12 465.95v-96.92z"
              />
              <g>
                <path
                  data-name="Above"
                  d="M1569.17 233.13L1287.89 393.8l64.35 38.34 279.19-161.69-62.26-37.32z"
                />
                <path
                  data-name="Front"
                  d="M1352.24 432.14v47.87l279.19-160.57v-48.99l-279.19 161.69z"
                />
                <path
                  data-name="Side"
                  d="M1287.89 393.8l64.35 38.18v48.03l-64.35-37.31v-48.9z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

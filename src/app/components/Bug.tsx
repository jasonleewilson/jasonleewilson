"use client";

import React, { useRef } from "react";
import Image from "next/image";

const Bug: React.FC = () => {
  const bugRef = useRef<HTMLImageElement | null>(null);

  const moveRandomly = () => {
    const bug = bugRef.current;
    if (!bug) return;

    const bugWidth = bug.offsetWidth;
    const bugHeight = bug.offsetHeight;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const maxLeft = viewportWidth - bugWidth;
    const maxTop = viewportHeight - bugHeight;

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);

    // Generate random rotation between -180 and 180 degrees
    const randomRotation = Math.floor(Math.random() * 360) - 180;

    // Apply new position and rotation
    bug.style.left = `${randomLeft}px`;
    bug.style.top = `${randomTop}px`;
    bug.style.transform = `rotate(${randomRotation}deg)`;
  };

  return (
    <Image
      ref={bugRef}
      src='/images/fly.gif'
      alt='Flying bug'
      width={120}
      height={120}
      onMouseEnter={moveRandomly}
      className='absolute top-[56%] left-[30%] z-[9999] transition-all duration-300 ease-in-out'
    />
  );
};

export default Bug;

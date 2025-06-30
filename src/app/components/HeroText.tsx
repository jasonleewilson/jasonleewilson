"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function HeroText() {
  // add in gsap animated text
  useGSAP(() => {
    gsap.to("#hero-title", {
      ease: "power1.inOut",
      opacity: 1,
      duration: 0.3,
      y: 0,
    });

    gsap.fromTo(
      "#hero-paragraph",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <>
      <h1
        id='hero-title'
        className='text-4xl md:text-4xl font-medium opacity-0 translate-y-10'
      >
        jasonleewilson.
        <strong className='font-medium text-primary sm:block '>
          {" "}
          Senior Frontend Developer.{" "}
        </strong>
      </h1>

      <h2
        id='hero-paragraph'
        className='mt-4 font-medium leading-6 text-xl/relaxed md:text-2xl opacity-0'
      >
        I build pixel-perfect, engaging, <br />
        and accessible digital experiences.
      </h2>
    </>
  );
}

export default HeroText;

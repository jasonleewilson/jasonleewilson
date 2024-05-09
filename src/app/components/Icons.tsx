import React from "react";

import {
  SiTailwindcss,
  SiHtml5,
  SiSass,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFigma,
  SiNextdotjs,
  SiNetlify,
} from "react-icons/si";

export default function Icons() {
  return (
    <div>
      <div className='icons flex m-8 justify-center'>
        <div className='has-tooltip'>
          <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
            html5
          </span>
          <SiHtml5 className='html5' title='html5' />
        </div>
        <div className='has-tooltip'>
          <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
            css3
          </span>
          <SiCss3 className='css3' title='css3' />
        </div>
        <div className='has-tooltip'>
          <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
            js
          </span>
          <SiJavascript className='js' title='js' />
        </div>
        {/* <div className='has-tooltip'>
                <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                  sass
                </span>
                <SiSass className='sass' title='sass' />
              </div> */}
        <div className='has-tooltip'>
          <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
            tailwindcss
          </span>
          <SiTailwindcss className='tailwindcss' title='tailwindcss' />
        </div>
        <div className='has-tooltip'>
          <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
            react
          </span>
          <SiReact title='react' />
        </div>
        {/* <div className='has-tooltip'>
                <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                  figma
                </span>
                <SiFigma className='figma' title='figma' />
              </div> */}
        <div className='has-tooltip'>
          <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
            nextjs
          </span>
          <SiNextdotjs title='nextjs' />
        </div>
        <div className='has-tooltip'>
          <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
            nettlify
          </span>
          <SiNetlify title='netlify' />
        </div>
      </div>
    </div>
  );
}

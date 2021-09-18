import Image from 'next/image';
import React, { ReactElement, useRef, useState } from 'react'
import UTRGV from "../images/utrgv.png";

function Experience(): ReactElement {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive(active === false ? true : false);
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
  }
  return (
    <div id="/experience" className="flex flex-col justify-center items-center mt-4 border-b border-black pb-3 snap-start">
      <div className="bg-white rounded-t-2xl w-3/4 p-2 border-b border-black cursor-pointer" onClick={toggleAccordion}>
        <h1 className="text-xl md:text-4xl uppercase font-bold text-center">ut: rio grande valley</h1>
      </div>

      <div ref={contentSpace} style={{ maxHeight: `${height}` }} className="overflow-y-hidden flex flex-col w-3/4 transition-max-height duration-1000 ease-in-out bg-white rounded-b-2xl">
        <div className="flex justify-between align-middle p-2">
          <div>
            <h1 className="flex flex-col text-xl md:text-2xl font-bold">Research Assistant</h1>
            <p><strong>Technology:</strong> Matlab, AFC(autocorrelation function), Faster R-CNN, Yolo</p>
            <p><strong>Duration:</strong> May 2019 - August 2019</p>
            <p><strong>Description:</strong></p>
          </div>

          <div>
            <Image alt="" src={UTRGV} height={132} width={100} />
          </div>

        </div>

        <div className="px-8 pb-4">
          <ul className="list-disc">
            <li>Developed a program using Matlab to
              see how well it can learn on automatically
              annotated data. The goal was to check if
              automatically generated training data is
              viable for machines.
            </li>

            <li>Used three different supervised
              learning models to run through our
              500 custom images. To get the four
              coordinates of where said object
              (mostly pedestrian) is in our images.
            </li>

            <li>Then compared the coordinates to our
              ground truth that I made using an annotated toolbox
              that was provided, to obtain three different Average
              Precision recall graphs.</li>
          </ul>
        </div>
      </div>

      {/*<button
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-footnote light">thid</p>
        <Image src={LOGO} />
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-y-hidden transition-max-height duration-700 ease-in bg-white"
      >
        <div className=" p-10">hi</div>
      </div>

      <div>
        <p>hello there</p>
      </div>*/}
    </div>
  )
}

export default Experience

import React, { ReactElement, useState } from 'react';
import about from "../images/about.jpg";
import Image from "next/image";
import ReactCardFlip from 'react-card-flip';
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

function About(): ReactElement {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div id="/about" className="mt-4 border-b border-black snap-start">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="flex justify-center">
          <div className="container bg-white w-3/4 md:w-3/5 flex flex-col rounded-2xl mb-4">
            <Image src={about} className="rounded-t-2xl" height={1200} width={1920} />

            <div className="flex items-center justify-center">
              <p className="uppercase font-bold text-3xl p-2">About Me</p>
              <ChevronRightIcon onClick={handleClick} className="h-10 cursor-pointer text-green-400" />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="container bg-white w-1/2 md:w-3/5 flex flex-col rounded-md mb-4 p-4 shadow-lg">
            <h3 className="text-center text-sm lg:text-3xl p-2 text-black">Hello, my name is Pablo Armando Sandoval</h3>
            <p className="text-xs lg:text-3xl p-2">I am an inspired software developer who is driven to create amazing applications
              and learn new types of frameworks and programming languages. I've learned
              <strong> Reactjs</strong>, <strong>Nextjs</strong>; <strong>tailwindcss </strong> 
              to make it easier to add css into html. <strong>Firebase</strong> for authentication 
              and data storing and a little bit of dynamodb to understand how nosql works. 
              All this to help create clones such as <strong>amazon</strong>, 
              <strong>twitter</strong>, <strong> discord</strong>, <strong>linkedin</strong>, 
              and <strong>facebook</strong>. I'm willing to learn new things to gain lots of 
              experiences and become a better engineer that could land me the best companies 
              for my career. On a side note, when I'm not working with code or learning something
              new. I'm either playing video games, talking with friends or just listening to music on my 
              relaxing time.</p>
            <ChevronLeftIcon onClick={handleClick} className="h-10 cursor-pointer text-green-400" />
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default About

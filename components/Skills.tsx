import Image from 'next/image';
import React, { ReactElement, ReactNode, forwardRef } from 'react';
import { skills } from "../typescript/skillList";

function Skills(): ReactElement {
  return (
    <div id="/skills" className="md:p-4 lg:p-3 pb-2 flex flex-col items-center lg:items-baseline lg:flex-row lg:justify-evenly border-b border-black snap-start">
      {/**programming languages */}
      <div className="w-3/4 md:w-3/5 lg:w-1/5">
        <div className="mt-4 xl:transition xl:duration-300 xl:transform xl:hover:scale-105 xl:cursor-pointer">
          <div className="bg-white shadow-2xl rounded-t-2xl p-2 text-center border-b-2 border-black text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold">
            <h1>Programming Languages</h1>
          </div>

          <div className="bg-white rounded-b-2xl p-2">
            {skills.programmingLanguages.map((skill: any, index: number) => (
              <a href={skill.link} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center space-x-4 p-4 xl:mb-3 xl:hover:bg-gray-200 xl:hover:rounded-full group">
                <Image alt="" src={skill.svgSrc} height={60} width={60} className="xl:group-hover:animate-pulse" />
                <p className="font-bold text-2xl lg:text-base">{skill.skillName}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/**frontend */}
      <div className="w-3/4 md:w-3/5 lg:w-1/5">
        <div className="mt-4 xl:transition xl:duration-300 xl:transform xl:hover:scale-105 xl:cursor-pointer">
          <div className="bg-white rounded-t-2xl p-2 text-center border-b-2 border-black text-xl md:text-2xl lg:text-3xl font-bold">
            <h1>Frontend</h1>
          </div>

          <div className="bg-white rounded-b-2xl p-2">
            {skills.frontend.map((skill: any, index: number) => (
              <a href={skill.link} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center space-x-4 p-4 xl:mb-3 xl:hover:bg-gray-200 xl:hover:rounded-full group">
                <Image alt="" src={skill.svgSrc} height={60} width={60} className="xl:group-hover:animate-pulse" />
                <p className="font-bold text-2xl lg:text-base">{skill.skillName}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/**backend database hostingPlatforms */}
      <div className="flex flex-col lg:space-y-3 w-3/4 md:w-3/5 lg:w-1/5">
        <div className="">
          <div className="mt-4 xl:transition xl:duration-300 xl:transform xl:hover:scale-105 xl:cursor-pointer">
            <div className="bg-white rounded-t-2xl p-2 text-center border-b-2 border-black text-xl md:text-2xl lg:text-3xl font-bold">
              <h1>Backend</h1>
            </div>

            <div className="bg-white rounded-b-2xl p-2">
              {skills.backend.map((skill: any, index: number) => (
                <a href={skill.link} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center space-x-4 p-4 xl:mb-3 xl:hover:bg-gray-200 xl:hover:rounded-full group">
                  <Image alt="" src={skill.svgSrc} height={60} width={60} className="xl:group-hover:animate-pulse" />
                  <p className="font-bold text-2xl lg:text-base">{skill.skillName}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-4 xl:transition xl:duration-300 xl:transform xl:hover:scale-105 xl:cursor-pointer">
            <div className="bg-white rounded-t-2xl p-2 text-center border-b-2 border-black text-xl md:text-2xl lg:text-3xl font-bold">
              <h1>Database</h1>
            </div>

            <div className="bg-white rounded-b-2xl p-2">
              {skills.databases.map((skill: any, index: number) => (
                <a href={skill.link} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center space-x-4 p-4 xl:mb-3 xl:hover:bg-gray-200 xl:hover:rounded-full group">
                  <Image alt="" src={skill.svgSrc} height={60} width={60} className="xl:group-hover:animate-pulse" />
                  <p className="font-bold text-2xl lg:text-base">{skill.skillName}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-4 xl:transition xl:duration-300 xl:transform xl:hover:scale-105 xl:cursor-pointer">
            <div className="bg-white rounded-t-2xl p-2 text-center border-b-2 border-black text-xl md:text-2xl lg:text-3xl font-bold">
              <h1>Hosting Platform</h1>
            </div>

            <div className="bg-white rounded-b-2xl p-2">
              {skills.hostingPlatforms.map((skill: any, index: number) => (
                <a href={skill.link} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center space-x-4 p-4 xl:mb-3 xl:hover:bg-gray-200 xl:hover:rounded-full group">
                  <Image alt="" src={skill.svgSrc} height={60} width={60} className="xl:group-hover:animate-pulse" />
                  <p className="font-bold text-2xl lg:text-base">{skill.skillName}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/**version control */}
      <div className="w-3/4 md:w-3/5 lg:w-1/5">
        <div className="mt-4 xl:transition xl:duration-300 xl:transform xl:hover:scale-105 xl:cursor-pointer">
          <div className="bg-white rounded-t-2xl p-2 text-center border-b-2 border-black text-xl md:text-2xl lg:text-3xl font-bold">
            <h1>Version Control</h1>
          </div>

          <div className="bg-white rounded-b-2xl p-2">
            {skills.versionControl.map((skill: any, index: number) => (
              <a href={skill.link} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center space-x-4 p-4 xl:mb-3 xl:hover:bg-gray-200 xl:hover:rounded-full group">
                <Image alt="" src={skill.svgSrc} height={60} width={60} className="xl:group-hover:animate-pulse" />
                <p className="font-bold text-2xl lg:text-base">{skill.skillName}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

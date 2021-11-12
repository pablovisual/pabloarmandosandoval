import React, { ReactElement, useRef, useState } from 'react';
import { HomeIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon, AcademicCapIcon, DesktopComputerIcon, FolderIcon, BriefcaseIcon, PhoneIcon, InformationCircleIcon } from "@heroicons/react/outline";
import HeaderOptions from './HeaderOptions';
import { animateScroll as scroll } from "react-scroll";

function Header(): ReactElement {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');

  const contentSpace = useRef(null);

  const [clicked, setClicked] = useState(true);

  const dropDown = () => {
    setClicked(!clicked);

    setActive(active === false ? true : false);
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
  }

  return (
    <div className="lg:flex items-center border-b border-black h-18 bg-white sticky z-10 top-0 p-4">
      <div className="flex flex-1 justify-between flex-row-reverse lg:flex-row">
        <HomeIcon onClick={() => scroll.scrollToTop()} className="h-8 text-green-400 cursor-pointer" />

        <div onClick={dropDown} className="lg:hidden">
          {clicked ? <MenuIcon className="h-8 text-green-400" /> : <XIcon className="h-8 text-green-400" />}
        </div>
      </div>

      <div className="hidden lg:flex md:space-x-10">
        <HeaderOptions Icon={<InformationCircleIcon className="h-6" />} title="about" LinkToSection="/about" />
        <HeaderOptions Icon={<DesktopComputerIcon className="h-6" />} title="skills" LinkToSection="/skills" />
        <HeaderOptions Icon={<BriefcaseIcon className="h-6" />} title="experience" LinkToSection="/experience" />
        <HeaderOptions Icon={<FolderIcon className="h-6" />} title="projects" LinkToSection="/projects" />
        <HeaderOptions Icon={<AcademicCapIcon className="h-6" />} title="education" LinkToSection="/education" />
        <HeaderOptions Icon={<PhoneIcon className="h-6" />} title="contact" LinkToSection="/contacts" />
      </div>


      <div ref={contentSpace} style={{ maxHeight: `${height}` }} className="flex w-full flex-col uppercase overflow-y-hidden lg:hidden space-y-2 transition-max-height duration-700 ease-in">
        <HeaderOptions onClick={dropDown} title="about" LinkToSection="/about" />
        <HeaderOptions onClick={dropDown} title="skills" LinkToSection="/skills" />
        <HeaderOptions onClick={dropDown} title="experience" LinkToSection="/experience" />
        <HeaderOptions onClick={dropDown} title="projects" LinkToSection="/projects" />
        <HeaderOptions onClick={dropDown} title="education" LinkToSection="/education" />
        <HeaderOptions onClick={dropDown} title="contact" LinkToSection="/contacts" />
      </div>

    </div>
  )
}

export default Header;
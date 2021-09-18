import React, { ReactElement } from 'react'
import { AcademicCapIcon, PhoneIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

interface Props {
  Icon?: React.ComponentProps<'svg'>;
  title: string;
  onClick?: any;
  LinkToSection?: string;
}

function HeaderOptions({ Icon, title, onClick, LinkToSection }: Props): ReactElement {
  return (
    <div className="flex group w-full justify-center text-green-400 items-center cursor-pointer hover:text-green-400 ">
      <div className="xl:group-hover:animate-bounce">
        {Icon}
      </div>

      <p className="uppercase font-bold"><Link to={`${LinkToSection}`} smooth={true} duration={2000}>{title}</Link></p>
    </div>
  )
}

export default HeaderOptions

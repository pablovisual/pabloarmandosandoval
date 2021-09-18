import React, { ReactElement } from 'react'
import Image from "next/image";
import CS from "../images/compsci.jpg";
import Typical from "react-typical";

function CoverPage(): ReactElement {
  return (
    <div style={{backgroundImage: "none" }} className="h-screen flex justify-center items-center">
      <Image className="" src={CS} layout="fill" />
      <div className="absolute text-center p-2">
        <Typical 
          steps={["Hi, My Name is Pablo Sandoval. 👋", 3500, "I love to game and hear music. 🎮🎵", 3500, "Hang out with friends. 🤜🤛", 3500, "But most importantly, coding is my passion. 💻", 3500]}
          loop={Infinity}
          wrapper="p"
          className="text-xl md:text-3xl lg:text-6xl text-white font-bold"
          />
      </div>
    </div>
  )
}

export default CoverPage

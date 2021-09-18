import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinFill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";


interface contact {
  icon: any;
  iconColor: string;
  link: string;
  name: string;
}

interface ContactList {
  Links?: contact[] | undefined;
}

export const contactList: ContactList = {
  Links: [
    /*{
      name: "Email",
      email: "pabloarmandosandoval@gmail.com",
      icon: <StarIcon />,
      color: "rgb(76, 175, 80)",
    },*/

    {
      icon: <VscGithubAlt />,
      iconColor: "rgb(23, 21, 21)",
      link: "https://github.com/pablovisual",
      name: "github",
    },

    {
      icon: <FaLinkedinIn style={{marginBottom: "3px"}} />,
      iconColor: "rgb(40, 103, 178)",
      link: "https://www.linkedin.com/in/pablo-sandoval-645336172/",
      name: "linkedIn",
    },
  ],
};
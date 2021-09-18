//@ts-nocheck
import * as React from "react";
import  { VscFileCode }  from "react-icons/vsc";
import { AcademicCapIcon } from "@heroicons/react/outline";
import { VerticalTimelineElement, VerticalTimelineElementProps } from "react-vertical-timeline-component";

interface source {
  Title: string;
  Link: string;
}

interface List {
  props: VerticalTimelineElementProps | VerticalTimelineElement;
  title: string;
  subtitle: string
  content: string;
  tools: string[],
  sourceButtons: { sources: source[] },
}

export const projectList: List[] = [
  {
    props: {
      date: '04/20/2021',
      className: 'vertical-timeline-element--project',
      contentStyle: { background: 'white', color: 'black', borderTop: "6px solid rgb(47, 216, 29)", borderRadius: "1rem" },
      contentArrowStyle: { borderRight: '7px solid  white' },
      iconStyle: { background: 'rgb(128, 255, 114)' },
      icon: <VscFileCode className="text-white" />,
      key: 1,
    },

    title: 'Hulu v2',
    subtitle: 'Online Course',
    content: 'Social Media',
    tools: [
      "Heroicons",
      "NextJS",
      "ReactJS",
      "tailwindcss",
      "TMDB",
      "Vercel",
    ],
    sourceButtons: {
      sources: [
        {
          Title: "Source Code",
          Link: "https://github.com/pablovisual/Hulu2.0",
        },

        {
          Title: "View Demo",
          Link: "https://hulu2-0-snowy.vercel.app/",
        },
      ],
    }
  },

  {
    props: {
      date: '04/05/2021',
      className: 'vertical-timeline-element--work',
      contentStyle: { background: 'white', color: 'black', borderTop: "6px solid rgb(47, 216, 29)", borderRadius: "1rem" },
      contentArrowStyle: { borderRight: '7px solid  white' },
      iconStyle: { background: 'rgb(128, 255, 114)', color: '#fff' },
      icon: <VscFileCode className="text-white" />,
      key: 2,
    },
    title: 'whatsapp v2',
    subtitle: 'Online Course',
    content: 'Social Media',
    tools: [
      "Firebase",
      "Material-UI",
      "NextJS",
      "ReactJS",
    ],
    sourceButtons: {
      sources: [
        {
          Title: "Source Code",
          Link: "https://github.com/pablovisual/whatsapp-v2",
        },

        {
          Title: "View Demo",
          Link: "https://whatsapp-v2-mu.vercel.app/",
        }
      ],
    },
  },

  {
    props: {
      date: 'In Progress',
      className: 'vertical-timeline-element--project',
      contentStyle: { background: 'white', color: 'black', borderTop: "6px solid rgb(47, 216, 29)", borderRadius: "1rem" },
      contentArrowStyle: { borderRight: '7px solid  white' },
      iconStyle: { background: 'rgb(128, 255, 114)', color: '#fff' },
      icon: <VscFileCode className="text-white" />,
      key: 3,
    },
    title: 'Linkedin Clone',
    subtitle: 'Online Course',
    content: 'Social Media',
    tools: [
      "Firebase",
      "Material-UI",
      "ReactJS",
      "Redux",
    ],
    sourceButtons: {
      sources: [
        {
          Title: "Source Code",
          Link: "https://github.com/pablovisual/linkedin-clone",
        },

        {
          Title: "View Demo",
          Link: "https://linkedin-clone-fbac6.web.app/",
        }
      ],
    },
  },

  {
    props: {
      date: 'In Progress',
      className: 'vertical-timeline-element--project',
      contentStyle: { background: 'white', color: 'black', borderTop: "6px solid rgb(47, 216, 29)", borderRadius: "1rem" },
      contentArrowStyle: { borderRight: '7px solid  white' },
      iconStyle: { background: 'rgb(128, 255, 114)', color: '#fff' },
      icon: <VscFileCode className="text-white" />,
      key: 4,
    },
    title: 'Twitter Clone',
    subtitle: 'Online Course',
    content: 'Social Media',
    tools: [
      "Firebase",
      "Material-UI",
      "ReactJS",
      "Redux",
    ],
    sourceButtons: {
      sources: [
        {
          Title: "Source Code",
          Link: "https://github.com/pablovisual/twitter-clone",
        },

        {
          Title: "View Demo",
          Link: "https://twitter-clone-d1663.web.app",
        }
      ],
    },
  },

  {
    props: {
      date: 'In Progress',
      className: 'vertical-timeline-element--project',
      contentStyle: { background: 'white', color: 'black', borderTop: "6px solid rgb(47, 216, 29)", borderRadius: "1rem" },
      contentArrowStyle: { borderRight: '7px solid  white' },
      iconStyle: { background: 'rgb(128, 255, 114)', color: '#fff' },
      icon: <VscFileCode className="text-white" />,
      key: 5,
    },
    title: 'Facebook Clone',
    subtitle: 'Online Course',
    content: 'Social Media',
    tools: [
      "Firebase",
      "Material-UI",
      "ReactJS",
      "Redux",
    ],
    sourceButtons: {
      sources: [
        {
          Title: "Source Code",
          Link: "https://github.com/pablovisual/facebook-clone",
        },

        {
          Title: "View Demo",
          Link: "https://facebook-clone-57447.web.app",
        }
      ],
    },
  },

  {
    props: {
      date: 'In Progress',
      className: 'vertical-timeline-element--project',
      contentStyle: { background: 'white', color: 'black', borderTop: "6px solid rgb(47, 216, 29)", borderRadius: "1rem" },
      contentArrowStyle: { borderRight: '7px solid  white' },
      iconStyle: { background: 'rgb(128, 255, 114)', color: '#fff' },
      icon: <VscFileCode className="text-white" />,
      key: 6,
    },
    title: 'Discord clone',
    subtitle: 'Online Course',
    content: 'Social Media',
    tools: [
      "Firebase",
      "Material-UI",
      "ReactJS",
      "Redux",
    ],
    sourceButtons: {
      sources: [
        {
          Title: "Source Code",
          Link: "https://github.com/pablovisual/discord-clone",
        },

        {
          Title: "View Demo",
          Link: "https://discord-clone-aa115.web.app",
        }
      ],
    },
  },

  {
    props: {
      date: '12/08/2020',
      className: 'vertical-timeline-element--project',
      contentStyle: { background: 'white', color: 'black', borderTop: "6px solid rgb(47, 216, 29)", borderRadius: "1rem" },
      contentArrowStyle: { borderRight: '7px solid  white' },
      iconStyle: { background: 'rgb(128, 255, 114)', color: '#fff' },
      icon: <VscFileCode className="text-white" />,
      key: 7,
    },
    title: 'Amazon Clone',
    subtitle: 'Online Course',
    content: 'Social Media',
    tools: [
      "Firebase",
      "Material-UI",
      "ReactJS",
      "Redux",
    ],
    sourceButtons: {
      sources: [
        {
          Title: "Source Code",
          Link: "https://github.com/pablovisual/amazon-clone",
        },

        {
          Title: "View Demo",
          Link: "https://challenge-42cfe.web.app",
        }
      ],
    },
  },

  {
    props: {
      date: '09/04/2019',
      className: 'vertical-timeline-element--website',
      contentStyle: { background: 'white', color: 'black', borderTop: "6px solid rgb(47, 216, 29)", borderRadius: "1rem" },
      contentArrowStyle: { borderRight: '7px solid  white' },
      iconStyle: { background: 'rgb(128, 255, 114)', color: '#fff' },
      icon: <VscFileCode className="text-white" />,
      key: 8,
    },
    title: "My website",
    subtitle: 'First one I published.',
    content: 'Porfolio',
    tools: [
      "Bootstrap",
      "CSS",
      "HTML",
      "Javascript",
    ],

    sourceButtons: {
      sources: [
        {
          Title: "Source Code",
          Link: "https://github.com/pablovisual/website",
        },

        {
          Title: "View Site",
          Link: "http://pabloarmandosandoval.herokuapp.com/",
        }
      ],
    },
  },

  {
    props: {
      date: 'In Progress',
      className: 'vertical-timeline-element--education',
      contentStyle: { background: 'white', color: 'black', borderTop: "6px solid rgb(47, 216, 29)", borderRadius: "1rem" },
      contentArrowStyle: { borderRight: '7px solid  white' },
      iconStyle: { background: 'rgb(128, 255, 114)', color: '#fff' },
      icon: <AcademicCapIcon className="text-white"/>,
      key: 9,
    },
    title: "Basketball Scoreboard",
    subtitle: 'Flutter',
    content: 'App',
    tools: [
      "Dart",
      "Flutter",
      "Material-UI",
    ],
    sourceButtons: {
      sources: [
        {
          Title: "Source Code",
          Link: "https://github.com/pablovisual/sportsApp/tree/master/sideproject",
        },

        {
          Title: "View Demo",
          Link: "#",
        }
      ],
    },
  },
]
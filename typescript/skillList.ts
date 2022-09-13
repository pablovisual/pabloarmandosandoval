import HTML5 from "../svg/html5-icon.svg";
import CSS3 from "../svg/css3.svg";
import TAILWINDCSS from "../svg/tailwindcss-icon.svg";
import FLUTTER from "../svg/flutterio-icon.svg";
import JAVASCRIPT from "../svg/javascript.svg";
import BOOTSTRAP from "../svg/bootstrap-icon.svg";
import REACTJS from "../svg/reactjs-icon.svg";
import NEXTJS from "../svg/next-js.svg";
import REDUX from "../svg/redux.svg";
import REACT_ROUTER from "../svg/react-router.svg";
import MATERIALUI from "../svg/material-ui-1.svg";
import STYLED_COMPONENTS from "../svg/styled-components.svg";
import NODE_JS from "../svg/nodejs-icon.svg";
import EXPRESS from "../svg/expressjs-icon.svg";
import FLASK from "../svg/flask.svg";
import MONGODB from "../svg/mongodb-icon.svg";
import HEROKU from "../svg/heroku-icon.svg";
import GITHUB from "../svg/github-icon.svg";
import CPLUSPLUS from "../svg/c++.svg";
import DART from "../svg/dartlang-icon.svg";
import JAVA from "../svg/java-icon.svg";
import PYTHON from "../svg/python-icon.svg";
import FIREBASE from "../svg/firebase-icon.svg";
import GIT from "../svg/git-icon.svg";
import NPM from "../svg/npmjs-icon.svg";
import TERMINAL from "../svg/command-line.svg";
import TYPESCRIPT from "../svg/typescriptlang-icon.svg";

interface skill {
  link: string;
  svgAltText: string;
  svgSrc: any;
  skillName: string;
}

interface Skills {
  frontend: skill[];
  backend: skill[];
  hostingPlatforms: skill[];
  programmingLanguages: skill[];
  databases: skill[];
  versionControl: skill[];
  packageManager: skill[];
}

export const skills: Skills = {
  frontend: [
    {
      link: "https://getbootstrap.com/",
      svgAltText: "Bootstrap",
      svgSrc: BOOTSTRAP,
      skillName: "Bootstrap",
    },

    {
      link: "https://www.w3schools.com/css/",
      svgAltText: "CSS 3",
      svgSrc: CSS3,
      skillName: "CSS",
    },

    /*{
      link: "https://flutter.dev/",
      svgAltText: "Flutter",
      svgSrc: FLUTTER,
      skillName: "Flutter",
    },*/

    {
      link: "https://www.w3schools.com/html/",
      svgAltText: "HTML 5",
      svgSrc: HTML5,
      skillName: "HTML",
    },

    {
      link: "https://www.javascript.com/",
      svgAltText: "JavaScript",
      svgSrc: JAVASCRIPT,
      skillName: "JavaScript",
    },

    {
      link: "https://material-ui.com/",
      svgAltText: "Material-UI",
      svgSrc: MATERIALUI,
      skillName: "Material-UI",
    },

    {
      link: "https://nextjs.org/",
      svgAltText: "Next.JS",
      svgSrc: NEXTJS,
      skillName: "Next.JS",
    },

    {
      link: "https://reactjs.org/",
      svgAltText: "React.JS",
      svgSrc: REACTJS,
      skillName: "React.JS",
    },

    /*{
      link: "https://reacttraining.com/react-router/",
      svgAltText: "React Router",
      svgSrc: REACT_ROUTER,
      skillName: "React Router",
    },*/

    /*{
      link: "https://redux.js.org/",
      svgAltText: "Redux",
      svgSrc: REDUX,
      skillName: "Redux",
    },*/

    {
      link: "https://styled-components.com/",
      svgAltText: "Styled-Components",
      svgSrc: STYLED_COMPONENTS,
      skillName: "Styled-Components",
    },

    {
      link: "https://tailwindcss.com/",
      svgAltText: "TailWindCSS",
      svgSrc: TAILWINDCSS,
      skillName: "TailWindCSS",
    },

    {
      link: "https://www.typescriptlang.org/",
      svgAltText: "TypeScript",
      svgSrc: TYPESCRIPT,
      skillName: "TypeScript",
    },
  ],
  backend: [
    /*{
      link: "https://expressjs.com/",
      svgAltText: "Express",
      svgSrc: EXPRESS,
      skillName: "Express",
    },

    {
      link: "https://firebase.google.com/",
      svgAltText: "Firebase",
      svgSrc: FIREBASE,
      skillName: "Firebase",
    },*/

    {
      link: "https://nodejs.org/en/",
      svgAltText: "Node.JS",
      svgSrc: NODE_JS,
      skillName: "Node.JS",
    },
  ],

  hostingPlatforms: [
    {
      link: "https://firebase.google.com/",
      svgAltText: "Firebase",
      svgSrc: FIREBASE,
      skillName: "Firebase",
    },

    {
      link: "https://pages.github.com/",
      svgAltText: "GitHub",
      svgSrc: GITHUB,
      skillName: "GitHub",
    },

    {
      link: "https://www.heroku.com/",
      svgAltText: "Heroku",
      svgSrc: HEROKU,
      skillName: "Heroku",
    },
  ],

  programmingLanguages: [
    {
      link: "https://www.cplusplus.com/",
      svgAltText: "C++",
      svgSrc: CPLUSPLUS,
      skillName: "C++ <fluent>",
    },

    /*{
      link: "https://dart.dev/",
      svgAltText: "Dart",
      svgSrc: DART,
      skillName: "Dart",
    },*/

    {
      link: "https://www.java.com/en/",
      svgAltText: "Java",
      svgSrc: JAVA,
      skillName: "Java <intermediate>"
    },

    {
      link: "https://www.javascript.com/",
      svgAltText: "JavaScript",
      svgSrc: JAVASCRIPT,
      skillName: "JavaScript <intermediate>",
    },

    {
      link: "https://www.python.org/",
      svgAltText: "Python",
      svgSrc: PYTHON,
      skillName: "Python <beginner>",
    },
  ],

  databases: [
    /*{
      link: "https://firebase.google.com/",
      svgAltText: "Firebase",
      svgSrc: FIREBASE,
      skillName: "Firebase",
    },*/

    {
      link: "https://www.mongodb.com/",
      svgAltText: "MongoDB",
      svgSrc: MONGODB,
      skillName: "MongoDB",
    },
  ],

  versionControl: [
    {
      link: "https://git-scm.com/",
      svgAltText: "GIT",
      svgSrc: GIT,
      skillName: "GIT",
    },

    {
      link: "https://en.wikipedia.org/wiki/Cmd.exe",
      svgAltText: "Terminal",
      svgSrc: TERMINAL,
      skillName: "Terminal"
    },
  ],

  packageManager: [
    {
      link: "https://www.npmjs.com/",
      svgAltText: "NPM",
      svgSrc: NPM,
      skillName: "NPM",
    },
  ]
}
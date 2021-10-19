import { faAndroid, faAngular, faCss3Alt, faGitAlt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faHome,
  faProjectDiagram,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { MenuItemDetails } from "../Interfaces/MenuBar";
import { Skill } from "../Interfaces/Skills";

export const menuBar: Array<MenuItemDetails> = [
  {
    name: "HOME",
    link: "/home",
    icon: faHome,
    title: "Home Page",
  },
  {
    name: "Resume",
    link: "#resume",
    icon: faFile,
    title: "Download Resume",
  },
  {
    name: "Experience",
    link: "#experience",
    icon: faUserTag,
    title: "See Experience",
  },
  {
    name: "Projects",
    link: "#projects",
    icon: faProjectDiagram,
    title: "See Projects",
  },
];

export const skillSet: Array<Skill> = [
  { name: "ReactJS", icon: faReact },
  { name: "Javascript", icon:faJs },
  { name: "React Native", icon: faAndroid },
  { name: "Angular 2 CLI", icon: faAngular },
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "GIT", icon: faGitAlt },
];

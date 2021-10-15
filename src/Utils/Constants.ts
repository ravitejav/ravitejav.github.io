import { faFile, faHome, faProjectDiagram, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { MenuItemDetails } from "../Interfaces/MenuBar";

export const menuBar: Array<MenuItemDetails> = [
  {
    name: "HOME",
    link: "/home",
    icon: faHome,
    title: "Home Page"
  },
  {
    name: "Resume",
    link: "#resume",
    icon: faFile,
    title: "Download Resume"
  },
  {
    name: "Experience",
    link: "#experience",
    icon: faUserTag,
    title: "See Experience"
  },
  {
    name: "Projects",
    link: "#projects",
    icon: faProjectDiagram,
    title: "See Projects"
  },
];

import {
  faAndroid,
  faAngular,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJava,
  faJs,
  faReact,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faHome,
  faLeaf,
  faProjectDiagram,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { MenuItemDetails } from "../Interfaces/MenuBar";
import { Skill } from "../Interfaces/Skills";
import { ExperienceModal } from "../Interfaces/ExperienceModal";
import { Projects } from "../Interfaces/Projects";
import { COMPANY, ROLES } from "./CompanyConstants";
import { OtherProfile } from "../Interfaces/OtherProfile";

const menuBar: Array<MenuItemDetails> = [
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

const skillSet: Array<Skill> = [
  { name: "ReactJS", icon: faReact },
  { name: "Javascript", icon: faJs },
  { name: "React Native", icon: faAndroid },
  { name: "Angular 2 CLI", icon: faAngular },
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "GIT", icon: faGitAlt },
  { name: "JAVA", icon: faJava },
  { name: "SPRING BOOT", icon: faLeaf }
];

const getTimeGap = (from: Date): string => {
  const today = new Date();
  const time = today.getTime() - from.getTime();
  const gap = Math.floor(time / (1000 * 60 * 60 * 24 * 30.5));
  const years = Math.floor(gap / 12) || 0;
  const months = gap % 12;
  return years > 0 ? `${years} Yr ${months} Months` : ` ${months} Months`;
};

const Experiences: Array<ExperienceModal> = [
  {
    companyName: COMPANY.ORACLE,
    totalExperience: getTimeGap(new Date("Mon Nov 22 2021 00:00:00 GMT+0530")),
    isCurrent: true,
    imageUrl:
      "https://lh3.googleusercontent.com/d/1zk7iNUWH1s2gC5IxuxFWz3vV924LqHwg",
    desc: "We improved the knowledge management application for a better user experience in articles such as bookmarks, notifications, and similar article suggestions for existing articles or documents.",
    work: [
      {
        from: new Date("Mon Nov 22 2021 00:00:00 GMT+0530"),
        to: new Date(),
        position: ROLES.APD,
        workExperience: [
          "Improved the user experience by adding the notification and bookmarks feature in the application",
          "Developed a full-fledged module for suggesting similar articles or documents based on user interactivity with knowledge management application",
          "Implemented APIs for major user functionalities"
        ],
      },
    ],
  },
  {
    companyName: COMPANY.QUOTIENT,
    totalExperience: "6 Months",
    imageUrl:
    "https://lh3.googleusercontent.com/d/16yJhjXUhd7_AzmmAUccW_j7nZuSjdsl8",
    desc: "Implemented the UI logic for cashback offers on Quotient's official website: coupons.com. The application is intelligent enough to scan uploaded bills, fetch relevant coupons and offer the user the best possible cashback offer.",
    work: [
      {
        from: new Date("Tue Jun 01 2021 00:00:00 GMT+0530"),
        to: new Date("Mon Nov 22 2021 00:00:00 GMT+0530"),
        position: ROLES.SDE2,
        workExperience:[
          "As part of the development team designed and architected the UI for the cashback offers feature. It has many functionalities and integrations such as the ability to select the store, upload purchase receipts, and claim cashback to PayPal wallet or simply claim suggested coupons.",
          "Improvised the website performance by 16% and configured the application for SEO"
        ]
      },
    ],
  },
  {
    companyName: COMPANY.ACCOLITE,
    totalExperience: "1 Yr 11 Months (+5Months Intern)",
    imageUrl:
      "https://lh3.googleusercontent.com/d/1A_Hj05XAaPjl-pDB19OzXZzXV0Vr3om1",
    desc: "Worked on Epos and other related projects which allows agents to create, verify, and approve proposals. Built an end-to-end automated application that allows agents to create proposals and bank analysts to verify and approve the proposals",
    work: [
      {
        from: new Date("Sun Mar 01 2020 00:00:00 GMT+0530"),
        to: new Date("Fri May 28 2021 00:00:00 GMT+0530"),
        position: ROLES.SENIOR_SD,
        workExperience: [
          "Built the Automated Identity Card Verification system(OCR) module in the Epos to verify the users in the early stages of creating a proposal.",
          "Designed and implemented the web application to verify the submitted applications. This module has automated verification of basic details and allows bank analysts to verify other details",
          "Developed an automated application that transforms CSV, excel information in spreadsheets to metadata, which is used in multiple applications.",
        ],
      },
      {
        from: new Date("Mon Jul 01 2019 00:00:00 GMT+0530"),
        to: new Date("Sun Mar 01 2020 00:00:00 GMT+0530"),
        position: ROLES.SD,
        workExperience:
          "Developed the Epos Application to create and submit proposals by agents, following which we redesigned the application storage mechanism in such a way that boosted the performance level by 200%, and achieved real-time synchronization with the servers.",
      },
      {
        from: new Date("Thu Jan 03 2019 00:00:00 GMT+0530"),
        to: new Date("Fri May 31 2019 00:00:00 GMT+0530"),
        position: ROLES.INTERN,
        workExperience:
          "Designed and Implemented modules for converting voluminous complex SQL structured data stored in RDMS to a simpler format that is understandable by NO-SQL Couchbase, for analyzing the transaction and suggesting relevant offers to the user.",
      },
    ],
  },
];

const allProjects: Projects = {
  personalProjects: [
    {
      desc: "It is Application for one to one or Group chats. This application currently allow text messages with real-time synchronization",
      projectName: "Chatter",
      url: "https://ravitejav.github.io/Chatter",
      technologies: ["ReactJS", "Firebase Realtime DB"],
      imageUrl:
        "https://lh3.googleusercontent.com/d/1UZHYce7LsoLB-w7ifTtz8fHKKZBm5Keg",
    },
    {
      desc: "INSPIRION is an application for allowing user to know about the current on going events, and help with registration process for the Events available in Fest.",
      projectName: "INSPIRION 18.0",
      url: "",
      technologies: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "PAYTM",
        "JAVA",
        "SPRING BOOT",
      ],
      imageUrl:
        "https://lh3.googleusercontent.com/d/1yMkvm-EdhCSZgLv1LDLC4PzTfSe6Fwtw",
    },
    {
      desc: "it is the Application used for creating short URL",
      projectName: "TinyUrl",
      url: "",
      technologies: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACTJS",
        "JAVA",
        "SPRING BOOT",
      ],
      imageUrl:
        "https://lh3.googleusercontent.com/d/1vEnM1QwcAQKeKr8K7UE-4AZc-BVg0PJZ",
    },
  ],
};

const personalProjects = () => allProjects.personalProjects;

const OtherProfiles: Array<OtherProfile> = [
  {
    name: "StackOverFlow",
    url: "https://stackoverflow.com/users/9436673/raviteja-v",
    icon: faStackOverflow,
  },
];

const RESUME_LINK =  "https://drive.google.com/file/d/1cXxCsBYdKLKaGjP2Zn-TF9g1zSV_2CsU/view?usp=sharing";

export { menuBar, skillSet, Experiences, OtherProfiles, personalProjects, RESUME_LINK };

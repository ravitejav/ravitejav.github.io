import {
  faAndroid,
  faAngular,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faHome,
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
    desc: "We improved the knowledge management application for a better user experience in articles such as bookmarks, notifications, and  similar article suggestions for existing articles or documents.",
    work: [
      {
        from: new Date("Mon Nov 22 2021 00:00:00 GMT+0530"),
        to: new Date(),
        position: ROLES.APDIC3,
        workExperience: [
          "Imporved the user experience by adding the notification and bookmarks feature in the application",
          "Created an module for suggesting the article or document based on the activities of user",
          "Implemented APIs for major user functionalities"
        ],
      },
    ],
  },
  {
    companyName: COMPANY.QUOTIENT,
    totalExperience: "8 Months",
    imageUrl:
    "https://lh3.googleusercontent.com/d/16yJhjXUhd7_AzmmAUccW_j7nZuSjdsl8",
    desc: "Implemented the UI and Logic for cashback offers in coupouns.com, It is application to avail the coupons's and claim the discounted products.",
    work: [
      {
        from: new Date("Tue Jun 01 2021 00:00:00 GMT+0530"),
        to: new Date(),
        position: ROLES.SDE2,
        workExperience:
          "As part of the development team implemented and launched the cashback offers a feature in coupons.com. It allows users to select the store, upload the purchase receipt, and get the cashback amount credited into their Paypal account. And Worked on improvising the performance and SEO of the website.",
      },
    ],
  },
  {
    companyName: COMPANY.ACCOLITE,
    totalExperience: "1 Yr 11 Months (+5Months Intern)",
    imageUrl:
      "https://lh3.googleusercontent.com/d/1A_Hj05XAaPjl-pDB19OzXZzXV0Vr3om1",
    desc: "Worked on various projects to create, verify, and approve proposals. For the creation of the proposal, we have created the User Application, an automated system to verify the data using OCR, and approval of the proposal is done using various tech stacks React Native, ReactJS, Angular 2.",
    work: [
      {
        from: new Date("Sun Mar 01 2020 00:00:00 GMT+0530"),
        to: new Date("Fri May 28 2021 00:00:00 GMT+0530"),
        position: ROLES.SENIOR_SD,
        workExperience: [
          "Built the Automated Identity Card Verification system (OCR) Module in the Epos to verify the Users in early stages of create a proposal.",
          "Designed and produced the web Application to verify the submitted applications. This module has Automated verification of basic details, in details has been verified manually",
          "Built an Automated application to convert the spreadsheet data to Meta Data, this Meta Data is used in the many application.",
        ],
      },
      {
        from: new Date("Mon Jul 01 2019 00:00:00 GMT+0530"),
        to: new Date("Sun Mar 01 2020 00:00:00 GMT+0530"),
        position: ROLES.SD,
        workExperience:
          "Developed the Epos Application to create and submit proposals by agents. In the later redesigned the application storage mechanism to increase the performance level by 200%, and made the application synchronised with the servers one time.",
      },
      {
        from: new Date("Thu Jan 03 2019 00:00:00 GMT+0530"),
        to: new Date("Fri May 31 2019 00:00:00 GMT+0530"),
        position: ROLES.INTERN,
        workExperience:
          "Designed and Implemented data transformation of a large tabled database to a non-tabled database, for analysing the transaction and suggestions for the users.",
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

export { menuBar, skillSet, Experiences, OtherProfiles, personalProjects };

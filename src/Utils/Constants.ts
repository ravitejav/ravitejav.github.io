import { faAndroid, faAngular, faCss3Alt, faGitAlt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faHome,
  faProjectDiagram,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { MenuItemDetails } from "../Interfaces/MenuBar";
import { Skill } from "../Interfaces/Skills";
import { ExperienceModal } from "../Interfaces/ExperienceModal";
import { COMPANY, ROLES } from "./CompanyConstants";

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

export const Experiences: Array<ExperienceModal> = [
  {
    companyName: COMPANY.QUOTIENT,
    from: new Date('Tue Jun 01 2021 00:00:00 GMT+0530'),
    to: new Date(),
    work: [
      {
        from: new Date('Tue Jun 01 2021 00:00:00 GMT+0530'),
        to: new Date(),
        position: ROLES.SDE2,
        workExperience: 'As part of development team implemented recently launched cashback offers feature in coupons.com. It allows users to select the store, upload the purchase receipt and gets the cash back amount credited into their Paypal account. And Worked on improvising the performance and SEO of the website.',
      }
    ],
  },
  {
    companyName: COMPANY.ACCOLITE,
    from: new Date(1562524200),
    to: new Date('Fri May 28 2021 00:00:00 GMT+0530'),
    work: [
      {
        from: new Date('Sun Mar 01 2020 00:00:00 GMT+0530'),
        to: new Date('Fri May 28 2021 00:00:00 GMT+0530'),
        position: ROLES.SENIOR_SD,
        workExperience: [
          'Built the Automated Identity Card Verification system (OCR) Module in the Epos to verify the Users in early stages of create a proposal.',
          'Designed and produced the web Application to verify the submitted applications. This module has Automated verification of basic details, in details has been verified manually',
          'Built an Automated application to convert the spreadsheet data to Meta Data, this Meta Data is used in the many application.'
        ],
      },
      {
        from: new Date('Mon Jul 01 2019 00:00:00 GMT+0530'),
        to: new Date('Sun Mar 01 2020 00:00:00 GMT+0530'),
        position: ROLES.SD,
        workExperience: 'Developed the Epos Application to create and submit proposals by agents. In the later redesigned the application storage mechanism to increase the performance level by 200%, and made the application synchronised with the servers one time.',
      },
      {
        from: new Date('Thu Jan 03 2019 00:00:00 GMT+0530'),
        to: new Date('Fri May 31 2019 00:00:00 GMT+0530'),
        position: ROLES.INTERN,
        workExperience: 'Designed and Implemented data transformation of a large tabled database to a non- tabled database, for analysing the transaction and suggestions for the users.',
      },
    ]
  }
];

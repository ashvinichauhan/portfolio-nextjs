import vu from "../Images/vu.png";
import jsp from "../Images/jsp.jpeg";
import hhs from "../Images/hhs.jpg";
import echobazar from "../Images/echobazar.png";
import vishwaevents from "../Images/vishwaevents.png";
import film from "../Images/film.png";
import react from '../Images/re.svg';
import express from '../Images/express.svg';
import node from '../Images/nodejs.svg';
import mongodb from '../Images/mongodb.svg';
import nextjs from '../Images/next.svg';
import tailwind from '../Images/tail.svg';
import stripe from '../Images/stripe.svg';
import redux from '../Images/redux.svg';
import exp1 from '../Images/exp1.svg'
import exp2 from '../Images/exp2.svg'
import exp3 from '../Images/exp3.svg'

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const education = [
  {
    course: "Bachelor Of Technology In AI&DS",
    collegeName: "Fr. Conceicao Rodrigues College of Engineering, Mumbai",
    completion: "2022 - 2025 | Pursuing",
    img: vu,
  },
  {
    course: "Diploma In Computer Engineering",
    collegeName: "Bhausaheb Vartak Polytechnic, Vasai",
    completion: "2019 - 2022 | Completed",
    img: jsp,
  },
  {
    course: "Secondary School Of Certificate",
    collegeName: "Holy Family Convent High School, Vasai",
    completion: "2015 - 2019 | Completed",
    img: hhs,
  },
];

export const projects = [
    {
      id: 1,
      title: "DocDialog",
      des: "Developed a Chatbot for Large document files data extraction",
      img: echobazar,
      iconLists: [react , nextjs, mongodb],
      link: "https://docdialog.vercel.app/",
    },
    {
      id: 2,
      title: "Amazon Web Scraping tool",
      des: "Developed a web scraping tool using Python to extract product data from Amazon.",
      img: vishwaevents,
      iconLists: [mongodb ,express, react, node],
      link: "https://amazonwebscraping.vercel.app/",
    },
    {
      id: 3,
      title: "Automating Crpyto Website",
      des: "AAn automatic crypto website built using Python for backend API integration,",
      img: film,
      iconLists: [react, redux, tailwind],
      link: "https://automatingcryptowebsite.vercel.app/",
    },
]

export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern",
    company : "CodSoft",
    desc: "Hands-on experience in building and deploying web applications using React, Node.js, and MongoDB. Successfully contributed to various projects, enhancing functionality and improving user experience.",
    className: "md:col-span-2",
    img: exp1,
  },
  {
    id: 2,
    title: "Python Developer - Intern",
    company : "InternPe",
    desc: "Experienced in software development, testing, debugging, and proficient in Python for data analysis, automation, with interests in machine learning and web development.",
    className: "md:col-span-2", 
    img: exp2,
  },
  {
    id: 3,
    title: "Web Developer - Intern",
    company : "Webworks Solution",
    desc: "Developed and maintained responsive web applications using HTML, CSS, and JavaScript. Collaborated with senior developers to enhance user interfaces and optimize performance. Gained hands-on experience in",
    className: "md:col-span-2", 
    img: exp3,
  }
];

export const skillsData = [
  'HTML',
  'CSS',
  'javascript',
  'React',
  'nextjs',
  'MongoDB',
  'MySQL',
  'Git',
  'Github',
  'Bootstrap',
  'Figma',
  'Firebase',
  'MaterialUI',
  'Stripe',
  'Nodejs',
  'Markdown',
  'redux',
  'Java',
  'Python'
]

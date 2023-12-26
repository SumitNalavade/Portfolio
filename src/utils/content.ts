import type { IExperience, IProject, ITechnology } from "./interfaces";

import TAMUHealthLogo from "../assets/TAMUHealth-icon.jpg";
import TAMUEngineeringIcon from "../assets/TAMUEngineering-icon.png";
import ACCLogo from "../assets/ACC-icon.jpg";
import CryptLogo from "../assets/crypt-icon.jpg";
import CNTVLogo from "../assets/CNTV-icon.jpg";

import readmeEditorIcon from "../assets/readmeEditor-icon.png";
import fisdIcon from "../assets/fisd-icon.jpg";
import gradualIcon from "../assets/gradual-icon.jpg";
import yelpcampIcon from "../assets/yelpcamp-icon.png";
import gptStudyIcon from "../assets/gptStudy-icon.webp";

import reactIcon from "../assets/react-icon.png";
import svelteIcon from "../assets/svelte-icon.png";
import nextIcon from "../assets/next-icon.png";
import sveltekitIcon from "../assets/sveltekit-icon.svg";
import typescriptIcon from "../assets/typescript-icon.png";
import javascriptIcon from "../assets/javascript-icon.png";
import pythonIcon from "../assets/python-icon.png";
import javaIcon from "../assets/java-icon.png";
import nodeIcon from "../assets/node-icon.png";
import graphqlIcon from "../assets/graphql-icon.png";
import mongodbIcon from "../assets/mongodb-icon.png";
import postgresqlIcon from "../assets/postgresql-icon.svg";
import firebaseIcon from "../assets/firebaseIcon.png";

export const topTechnologies: ITechnology[] = [
  {
    name: "React",
    icon: reactIcon,
    description: "UI Library",
    type: "libraries/frameworks",
  },

  {
    name: "Svelte",
    icon: svelteIcon,
    description: "UI Library",
    type: "libraries/frameworks",
  },
  {
    name: "Next.js",
    icon: nextIcon,
    description: "Full-Stack Framework",
    type: "libraries/frameworks",
  },
  {
    name: "SvelteKit",
    icon: sveltekitIcon,
    description: "Full-Stack Framework",
    type: "libraries/frameworks",
  },
  {
    name: "Node.js",
    icon: nodeIcon,
    description: "Backend Framework/Runtime",
    type: "libraries/frameworks",
  },
  {
    name: "TypeScript",
    icon: typescriptIcon,
    description: "Programming Language",
    type: "languages",
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
    description: "Programming Language",
    type: "languages",
  },
  {
    name: "Python",
    icon: pythonIcon,
    description: "Programming Language",
    type: "languages",
  },
  {
    name: "Java",
    icon: javaIcon,
    description: "Programming Language",
    type: "languages",
  },
  {
    name: "Graph QL",
    icon: graphqlIcon,
    description: "Query Language",
    type: "other",
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
    description: "Backend-As-A-Service",
    type: "other",
  },
  {
    name: "Mongo DB",
    icon: mongodbIcon,
    description: "Database",
    type: "databases",
  },
  {
    name: "PostgreSQL",
    icon: postgresqlIcon,
    description: "Database",
    type: "databases",
  },
];

export const experiences: IExperience[] = [
  {
    type: "Experience",
    title: "Computer Science Research Assistant",
    employer: "Texas A&M University Health Science Center",
    icon: TAMUHealthLogo,
    location: "Bryan, Texas",
    duration: "Present",
    start: "June, 2023",
    description: `
Contributed to the development of OliviaHealth, a grant funded project lead by the Texas A&M Health Science Center to alleviate maternal and familial care.

Developed an intuitive user interface using React.js, TypeScript, Vite.js, Google APIs and supporting client side libraries.

Built scalable backend services with Python, Flask and SQLAlchemy to securely handle server-side session based authentication, database querying and natural language processing with sentence transformers and Pytorch.

Integrated an SBERT machine learning model into an API to turn natural language prompts from users into SQL queries to retrieve data from a PostgreSQL database.

Continuously gathered user feedback and conducted usability testing, utilizing libraries such as Jest and Selenium.

Deployed application on the Texas A&M STAR (Secure Technologies for Aggie Researchers) infrastructure within an AWS (Amazon Web Services) virtual machine.`,
  },
  {
    type: "Experience",
    title: "Undergraduate Teaching Assistant",
    employer: "Texas A&M University College of Engineering",
    icon: TAMUEngineeringIcon,
    location: "College Station, Texas",
    duration: "Present",
    start: "June, 2023",
    description: `
Served as a peer tutor for the ENGR 102 (Introduction to the design and development of computer applications for engineers in Python) course.

Assisted students in their Python programming coursework by attending lectures and conducting weekly office hours.`,
  },
  {
    type: "Experience",
    title: "Front End Software Engineer",
    employer: "Crypt Cloud",
    icon: CryptLogo,
    location: "Austin, Texas",
    duration: "3 Months",
    start: "June, 2022",
    end: "Auguest, 2022",
    description: `
Architected and developed Crypt Cloud’s front-end web application that ensures the secure encryption, storage, and retrieval of user data on the IPFS network, employing the SHA-256 and AES block cipher algorithms.

Leveraged capabilities of the Next.js framework to deliver performance, bolster search engine optimization (SEO), and enhance page insights.

Transitioned existing services from JavaScript to TypeScript, prioritizing modularity and maintainability reducing potential bugs and errors.`,
  },
  {
    type: "Experience",
    title: "Project Manager/Lead Developer",
    employer: "Aggie Coding Club",
    icon: ACCLogo,
    location: "College Station, Texas",
    start: "August, 2022",
    end: "May, 2023",
    duration: "8 Months",
    description: `
Served a project manager with the Aggie Coding Club, leading a team of 20+ students to develop a cross platform mobile app for iOS/Android.

Utilized modern technologies including React Native, TypeScript, Express.js/Node.js and Google Firebase, resulting in a seamless developer and user experience.

Conducted regular stand-up meetings to align goals, discuss progress, and provide mini-lessons, fostering growth and skill enhancement.`,
  },
  {
    type: "Experience",
    title: "Student Journalist",
    employer: "Coyote Nation TV",
    icon: CNTVLogo,
    location: "Frisco, Texas",
    duration: "3 Years",
    start: "August, 2019",
    end: "May, 2022",
    description: `
As a student journalist at Coyote Nation TV, I worked with a small team of passionate creators to maintain Heritage High School's broadcasting program, a media outlet meant to educate, inform and entertain the students body.

In my three years with this program, I was able to create dozens of stories and segments tailored to tell the stories of students and offer an insight into the dynamic world of a High School student's life.`,
  },
];

export const projects: IProject[] = [
  {
    type: "Project",
    title: "VS Code ReadMe Editor",
    icon: readmeEditorIcon,
    demoUrl:
      "https://marketplace.visualstudio.com/items?itemName=SumitNalavade.vscode-readme-editor",
    githubUrl: "https://github.com/SumitNalavade/VS-Code-ReadMe-Editor",
    platform: "Other",
    language: "TypeScript",
    description: `
Built an extension within VS Code with React.js to create and edit ReadMe and other markdown files without having to leave the editor.

Improved the user experience by including prebuilt components and templates along with live edit previews.

Deployed the project on the VS Code Marketplace and earned a 5 star rating with over 13,000 downloads.

![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/SumitNalavade.vscode-readme-editor) ![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/SumitNalavade.vscode-readme-editor)

Inspired by:
https://readme.so/

## Features:
- Accessible directly inside VS Code project workspace
- Prebuilt components and templates to speed up users' workflow
- Ability to import and manipulate existing markdown files
- Live preview to see changes in real time
- Ability to download updated documents for free


## Demo 🚀
![App Screenshot](https://github.com/SumitNalavade/VS-Code-ReadMe-Editor/blob/main/assets/demo/demo_1.gif?raw=true)
![App Screenshot](https://github.com/SumitNalavade/VS-Code-ReadMe-Editor/blob/main/assets/demo/demo_2.gif?raw=true)
`,
  },
  {
    type: "Project",
    title: "FriscoISD HAC API",
    platform: "Serverside",
    icon: fisdIcon,
    demoUrl: "https://friscoisdhacapi.vercel.app/",
    githubUrl: "https://github.com/SumitNalavade/FriscoISDHACAPI",
    language: "Python",
    description: `
Built and maintained a free and open source REST API to interact with students' data and informations from the Frisco ISD Home Access Center (HAC).

Implemented webscraping and http request scraping in a python based backend environment.

Used the Python Requests and BeautifulSoup library to send HTTP requests to Home Access Center, bypass CSRF token, parse the HTML content and return a student’s academic information in JSON format.

Built an interactive documentation site along with an integrated API explorer with Typescript, React.js and Next.js 

Deployed API and website on Vercel serverless functions. 

Continuing maintenance of API as it powers several iOS, Android and Web applications serving Frisco ISD students.`,
  },
  {
    type: "Project",
    title: "Gradual Grades",
    platform: "Mobile",
    language: "JavaScript",
    icon: gradualIcon,
    githubUrl: "https://github.com/SumitNalavade/Gradual-React-Native",
    description: `
Developed a cross platform mobile app with React Native for Frisco ISD students to access their online gradebook on iOS/Android platforms.

Built a REST API with Python and Go to scrape student information such as course grades, transcripts and schedules from the Frisco ISD student portal with a sub 1000ms response time.

Built a documentation website with React.js and Next.js providing language-specific examples and an interactive API explorer.

Launched application on the Apple App Store and Google Play Store, accumulating over 3000 downloads and hundreds of daily requests

## Features:
- Custom API to access data from Frisco ISD Home Access Center
- Real time updates for student grades, GPAs and schedules
- Real Time GPA Predictor
- Implemented a 'What if' calculator to predict students' grades and GPAs by manipulating assignment grades
- Cross Platform
- 100% free with no ads


## Screenshots
![](https://github.com/SumitNalavade/Gradual-React-Native/blob/master/assets/mockups.png?raw=true)
    `,
  },
  {
    type: "Project",
    title: "GPT Study",
    platform: "Web",
    language: "TypeScript",
    icon: gptStudyIcon,
    githubUrl: "https://github.com/SumitNalavade/GPTStudy",
    demoUrl: "https://gpt-study.vercel.app/",
    description: `
Built a web application for students to generate study material after uploading their course material with generative AI.

Integrated the Open AI GPT API and the Open API JavaScript SDK in a frontend built with React.js and Next.js.

Once a user uploads a set of example questions, the AI algorithm generates an array of additional questions based on the provided examples. This feature enhances the study experience, offering users a vast repertoire of diverse and challenging questions to master.

Integrated Google Firebase to handle user authentication through OAuth and email/password verification along with a real-time document database to ensure user data was stored securely and delivered reliability.

## Built with:
- TypeScript
- React.js
- Next.js
- TailwindCSS
- Open Ai API

## Screenshots  
![App Screenshot](https://github.com/SumitNalavade/GPTStudy/blob/main/public/screenshots.png?raw=true)
    `,
  },
  {
    type: "Project",
    title: "YelpCamp",
    platform: "Web",
    language: "JavaScript",
    icon: yelpcampIcon,
    githubUrl: "https://github.com/SumitNalavade/YelpCamp",
    demoUrl: "https://yelpcamp-dwzt.onrender.com/",
    description: `
Yelp-like full-stack web application from the 2022 Web Developer Bootcamp

## Lessons Learned / Technologies Used
- MVC (Model-View-Controller) architecture to achieve seperation of concerns and maintain independence in relation to backend/frontend services.
    
- Express.js minimal, unopinionated backend framework to keep serverside boilerplate as low as possible. Especially useful for learning how to piece different technologies together to develop a complete backend.
    
- Express-Session to learn how cookies work to deliver a rich user experience through client and serverside cookies.
    
- Passport.js for authentication and authorization.
    
- MongoDB as the primary NoSQL database to store campgrounds, users, reviews and session details.
    
- Mongoose as an ORM(Object relation mapping) library to interact with MongoDB.
    
- Cloudinary to store images of campgrounds when users create new campgrounds, and to optimize them for when client-side requests them.
    
- Mapbox to deliver an interactive map for users to visually see the location of campgrounds through a cluster map and a zoomed in map for each campground.
    
- EJS (Embedded JavaScript Templates) as a templating language to create dynamic user experices.
    
- Bootstrap as the driving CSS framework to create visually appealing user experiences.
    
- Render to host the complete application
    `,
  },
];

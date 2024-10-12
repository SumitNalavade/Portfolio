import type { IExperience, IProject } from "./interfaces";

import HumanaLogo from "../assets/humana-logo.webp";
import TAMUHealthLogo from "../assets/TAMUHealth-icon.jpg";
import TAMUEngineeringIcon from "../assets/TAMUEngineering-icon.png";
import ACCLogo from "../assets/ACC-icon.jpg";
import CryptLogo from "../assets/crypt-icon.jpg";
import CNTVLogo from "../assets/CNTV-icon.jpg";

import MaroonRidesIcon from "../assets/maroon-rides-icon.webp";
import readmeEditorIcon from "../assets/readmeEditor-icon.png";
import gradualIcon from "../assets/gradual-icon.jpg";

export const experiences: IExperience[] = [
  {
    type: "Experience",
    title: "Software Engineering Intern",
    employer: "Humana",
    icon: HumanaLogo,
    location: "Louisville, Kentucky",
    duration: "Present",
    start: "May, 2024",
    description: `
Developed a RAG based Generative AI chat application using React, Java SpringBoot, PostgreSQL (PG Vector) and LangChain to answer customer questions from over 2000 Coverage PDFs and winning first place in the company-wide hackathon.

Implemented custom React components in TypeScript for Humana’s medicare enrollments platform as part of an Agile scrum team, writing clean and maintainable code, conducting code reviews and participating in Agile ceremonies.`,
  },
  {
    type: "Experience",
    title: "Full Stack Software Engineer",
    employer: "Texas A&M University Health Science Center",
    icon: TAMUHealthLogo,
    location: "Bryan, Texas",
    duration: "Present",
    start: "June, 2023",
    description: `
Contributed to OliviaHealth, a grant-funded project led by Texas A&M Health Science Center, enhancing maternal and familial care.

Developed an intuitive user interface using React.js, TypeScript, JWT (JSON Web Tokens), Google APIs and supporting client side libraries.

Built scalable backend services with Python, Flask and SQLAlchemy to securely handle server-side session based authentication, database querying and natural language processing with sentence transformers and Pytorch.

Integrated cloud services such as AWS EC2 for scalable infrastructure, AWS S3 for storage, and AWS Lambda for serverless computing.

Integrated an SBERT machine learning model into an API to turn natural language prompts from users into SQL queries to retrieve data from a PostgreSQL database.

![](https://raw.githubusercontent.com/SumitNalavade/Portfolio/main/src/assets/ichild-poster.png)  

![](https://raw.githubusercontent.com/SumitNalavade/Portfolio/refs/heads/main/src/assets/ichild-demo.png)`,
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
Served as a peer tutor and technical lead for CSCE 482 (Senior Capstone Design), assisting students in building and deploying a full-stack web application to complete their degree requirements.

Served as a peer tutor for the ENGR 102 (Introduction to the design and development of computer applications for engineers in Python) course.`,
  },
  {
    type: "Experience",
    title: "Technical Lead",
    employer: "Aggie Coding Club",
    icon: ACCLogo,
    location: "College Station, Texas",
    start: "August, 2022",
    duration: "Present",
    description: `
Served a technical lead and developer to lead development of cross-platform mobile applications for iOS and Android.

Conducted code reviews and meetings to prioritize high coding standards, emphasizing readability, maintainability and scalability.

Coordinated efforts of backend and multiple frontend teams by hosting weekly meetings to align goals, expectations and progress.

<div style="display: flex; justify-content: space-around;">
    <div style="width: 40%;">
        <img src="https://raw.githubusercontent.com/SumitNalavade/Portfolio/main/src/assets/0x0ss-portrait.png" style="width: 100%;" alt="Image 1">
    </div>
    <div style="width: 40%;">
        <img src="https://raw.githubusercontent.com/SumitNalavade/Portfolio/main/src/assets/0x0ss2-portrait.png" style="width: 100%;" alt="Image 2">
    </div>
</div>
`,
  },
  {
    type: "Experience",
    title: "Front End Developer",
    employer: "Crypt Cloud",
    icon: CryptLogo,
    location: "Austin, Texas",
    duration: "3 Months",
    start: "June, 2022",
    end: "August, 2022",
    description: `
Architected and developed Crypt Cloud’s front-end web application that ensures the secure encryption, storage, and retrieval of user data on the IPFS network, employing the SHA-256 and AES block cipher algorithms.

Leveraged capabilities of the Next.js framework to deliver performance, bolster search engine optimization (SEO), and enhance page insights.

Transitioned existing services from JavaScript to TypeScript, prioritizing modularity and maintainability reducing potential bugs and errors.`,
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
    title: "RAG based Generative AI chat",
    icon: HumanaLogo,
    githubUrl: "https://github.com/SumitNalavade/InsureAI",
    platform: "Web",
    language: "TypeScript",
    description: `
Won first place in Humana hackathon by building a RAG (Retrieval-Augmented-Generation) chatbot with React, Java SpringBoot, PostgreSQL (PG Vector) and LangChain.

Customers can upload insurance documentation and ask specific questions about their coverage details via a React.js web application.

User queries are matched against embedded document vectors in a database with LangChain, and then used to generate responses about their specific insurance coverage details via GPT-4o large language model.

![](https://raw.githubusercontent.com/SumitNalavade/InsureAI/refs/heads/main/Screenshot%202024-10-12%20at%202.13.45%20PM.png)  

![](https://raw.githubusercontent.com/SumitNalavade/InsureAI/refs/heads/main/Screenshot%202024-10-12%20at%202.14.07%20PM.png)
`,
  },
  {
    type: "Project",
    title: "Maroon Rides",
    icon: MaroonRidesIcon,
    demoUrl:
      "https://maroonrides.app/",
    githubUrl: "https://github.com/Maroon-Rides/MaroonRides",
    platform: "Mobile",
    language: "TypeScript",
    description: `
Developed a cross platform mobile app with React Native to provide live transportation updates, including live bus locations, routes and stops for Texas A&M students with over 15,000 installs and thousands of Daily-Active-Users.

Developed a route-planning features that integrates with Google Maps Platform to provide users with accurate route options and customizations.

Built CI/CD pipelines for automating production build and submissions to app stores with GitHub Actions using Gradle for Android and XCodeBuild for iOS.

<div style="display: flex; justify-content: space-around;">
    <div style="width: 40%;">
        <img src="https://raw.githubusercontent.com/SumitNalavade/Portfolio/main/src/assets/0x0ss-portrait.png" style="width: 100%;" alt="Image 1">
    </div>
    <div style="width: 40%;">
        <img src="https://raw.githubusercontent.com/SumitNalavade/Portfolio/main/src/assets/0x0ss2-portrait.png" style="width: 100%;" alt="Image 2">
    </div>
</div>

![](https://raw.githubusercontent.com/SumitNalavade/Portfolio/main/src/assets/revrides-poster.png)
`,
  },
  {
    type: "Project",
    title: "Gradual Grades / FriscoISDHACAPI",
    icon: gradualIcon,
    demoUrl:
      "https://friscoisdhacapi.vercel.app/",
    githubUrl: "https://github.com/SumitNalavade/FriscoISDHACAPI",
    platform: "Other",
    language: "Python / Typescript",
    description: `
Developed a cross platform mobile app with React Native for Frisco ISD students to access their online gradebook on iOS/Android platforms.

Built an open-source REST API with Python and Golang to scrape student information such as course grades, transcripts and schedules from the Frisco ISD student portal.

Built a documentation website with React.js and Next.js providing language-specific examples and an interactive API explorer.

Deployed application on the Apple App Store and Google Play Store, accumulating over 5000 downloads and hundreds of daily active users.

![](https://github.com/SumitNalavade/Gradual-React-Native/blob/master/assets/mockups.png?raw=true)
`,
  },
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

Deployed the project on the VS Code Marketplace and earned a 5 star rating with over 23,000 downloads.

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
];

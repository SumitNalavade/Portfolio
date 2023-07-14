import type { IExperience, IProject } from "./interfaces";

import TAMUHealthLogo from "../assets/TAMUHealth-icon.jpg";
import TAMULogo from "../assets/TAMU-icon.jpg";
import ACCLogo from "../assets/ACC-icon.jpg";
import CryptLogo from "../assets/crypt-icon.jpg";
import CNTVLogo from "../assets/CNTV-icon.jpg";

import readmeEditorIcon from "../assets/readmeEditor-icon.png";
import fisdIcon from "../assets/fisd-icon.jpg";
import gradualIcon from "../assets/gradual-icon.jpg";
import yelpcampV2Icon from "../assets/yelpcampV2-icon.png";
import yelpcampIcon from "../assets/yelpcamp-icon.png";
import gptStudyIcon from "../assets/gptStudy-icon.webp";

import readmeEditorScreenshot from "../assets/vscode-readme-editor-screenshot.png";
import fisdHacApiScreenshot from "../assets/friscoisd-hac-api-screenshot.png";
import yelpcampV2Screenshot from "../assets/yelpcampV2-screenshot.png";
import yelpcampScreenshot from "../assets/yelpcamp-screenshot.png";
import gradualScreenshot from "../assets/gradual-screenshot.png";
import gptStudyScreenshot from "../assets/gptStudy-screenshot.png";

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

Developed a highly intuitive user interface using React.js and TypeScript, empowering users to effortlessly customize preferences and tailor the output to their specific needs.

Integrated an SBERT machine learning model into an API to enable responsive handling of user queries, akin to advanced language models like Chat-GPT and Google Bard.

Expanded the algorithm's scope by incorporating a broader range of parameters, including user preferences, historical data, and contextual information, to enhance the relevance of the generated output.

Focused on building a resilient and scalable backend architecture with Python and Flask, facilitating seamless integration with the frontend. 

Streamlined data flow, ensuring data consistency and establishing reliable communication channels between the frontend and backend systems.

Continuously gathered valuable user feedback and conducted extensive usability testing, utilizing. libraries such as Jest and Selenium.`,
  },
  {
    type: "Experience",
    title: "Academic Peer Mentor",
    employer: "Texas A&M University",
    icon: TAMULogo,
    location: "College Station, Texas",
    duration: "Present",
    start: "June, 2023",
    description: `
Provided regular, one-on-one peer academic coaching to students who live on campus.

Raised academic expectations with engagement and compassion through programs and services.

Serving as a resource to connect students with programs and initiatives that enhance learning and success.

Partnered with Resident Advisors to foster campus community and feelings of belonging on-campus.

Offered opportunities for academic and personal development within the residence halls

Held weekly office hours to support students’ academic and personal goals`,
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
Led a team of 20+ students to create a cross platform mobile app at Texas A&M University to connect new students with similar interests.

Implemented mobile technologies including React Native and TypeScript and backend technologies including Node.js, Express.js and Google Firebase.

Created a REST API to relay information from frontend client to backend server to Google Firestore database.

Taught team members how to use Git, React Native, TypeScript, Firebase etc…

Held weekly stand-up meetings to discuss progress, update team on goals and held mini-lessons covering various technologies.
    `,
  },
  {
    type: "Experience",
    title: "Front End Software Engineer",
    employer: "Crypt",
    icon: CryptLogo,
    location: "Austin, Texas",
    duration: "3 Months",
    start: "June, 2022",
    end: "Auguest, 2022",
    description: `
Designed and developed Crypt’s front-end web application to securely encrypt, store and retrieve user data on the IPFS network using SHA-256 and AES block cipher.

Used modern technologies including TypeScript, Next.js, React.js and Tailwind.

Replaced Create-React-App build tooling on the existing codebase to Next.js static site generation to greatly improve performance, SEO and page insights.

Documented and tested codebase before releasing to the company.`,
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
    screenshot: readmeEditorScreenshot,
    demoUrl:
      "https://marketplace.visualstudio.com/items?itemName=SumitNalavade.vscode-readme-editor",
    githubUrl: "https://github.com/SumitNalavade/VS-Code-ReadMe-Editor",
    platform: "Other",
    language: "TypeScript",
    description: `
Built a VS Code Extension to allow users to easily create and manage ReadMe files for their projects.

Built with React.js and TypeScript inside a VS Code Webview.

![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/SumitNalavade.vscode-readme-editor) ![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/SumitNalavade.vscode-readme-editor)

Inspired by:
https://readme.so/

Features:
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
    screenshot: fisdHacApiScreenshot,
    demoUrl: "https://https://friscoisdhacapi.vercel.app/",
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
    screenshot: gradualScreenshot,
    githubUrl: "https://github.com/SumitNalavade/Gradual-React-Native",
    description: `
Cross platform mobile app for HAC client built for FRISCO ISD students

Built with React Native/Expo for iOS and Android
  
Features:
Custom API powers real time grades from Home Access Center (HAC)
    
Real time GPA Predictor
    
'What if' calculator to predict class averages by adding/manipulating assignment grades
Cross platform
    
Technologies Used:
React Native/Expo
Node.js
Express.js
Flask
Vercel
    `,
  },
  {
    type: "Project",
    title: "GPT Study",
    platform: "Web",
    language: "TypeScript",
    icon: gptStudyIcon,
    screenshot: gptStudyScreenshot,
    githubUrl: "https://github.com/SumitNalavade/GPTStudy",
    demoUrl: "https://gpt-study.vercel.app/",
    description: `
GPT Study is a web app that revolutionizes the way students study – akin to Quizlet but with a twist.

This platform empowers users to effortlessly create comprehensive study sets with artificial intelligence technology.

Once a user uploads a set of example questions, the AI algorithm generates an array of additional questions based on the provided examples. This feature enhances the study experience, offering users a vast repertoire of diverse and challenging questions to master.

The study sets are then saved to users accounts allowing them to access their materials from anywhere and at anytime!GPT Study is a web app that revolutionizes the way students study – akin to Quizlet but with a twist. This platform empowers users to effortlessly create comprehensive study sets with artificial intelligence technology. Once a user uploads a set of example questions, the AI algorithm generates an array of additional questions based on the provided examples. This feature enhances the study experience, offering users a vast repertoire of diverse and challenging questions to master. The study sets are then saved to users accounts allowing them to access their materials from anywhere and at anytime!
    `,
  },
  {
    type: "Project",
    title: "YelpCamp V2",
    platform: "Web",
    language: "TypeScript",
    icon: yelpcampV2Icon,
    screenshot: yelpcampV2Screenshot,
    demoUrl: "https://yelpcampv2.vercel.app/",
    githubUrl: "https://github.com/SumitNalavade/YelpCampV2",
    description: `
Rewrite of the YelpCamp project from the 2022 web developer bootcamp

Tech Stack:
Client: React, Next.js, TailwindCSS, DaisyUI, NextAuth
Server: Apollo Server, GraphQL, Prisma, PostgreSQL
    `,
  },
  {
    type: "Project",
    title: "YelpCamp",
    platform: "Web",
    language: "JavaScript",
    icon: yelpcampIcon,
    screenshot: yelpcampScreenshot,
    githubUrl: "https://github.com/SumitNalavade/YelpCamp",
    demoUrl: "https://yelpcamp-dwzt.onrender.com/",
    description: `
Yelp-like full-stack web application from the 2022 Web Developer Bootcamp

Lessons Learned / Technologies Used
MVC (Model-View-Controller) architecture to achieve seperation of concerns and maintain independence in relation to backend/frontend services.
    
Express.js minimal, unopinionated backend framework to keep serverside boilerplate as low as possible. Especially useful for learning how to piece different technologies together to develop a complete backend.
    
Express-Session to learn how cookies work to deliver a rich user experience through client and serverside cookies.
    
Passport.js for authentication and authorization.
    
MongoDB as the primary NoSQL database to store campgrounds, users, reviews and session details.
    
Mongoose as an ORM(Object relation mapping) library to interact with MongoDB.
    
Cloudinary to store images of campgrounds when users create new campgrounds, and to optimize them for when client-side requests them.
    
Mapbox to deliver an interactive map for users to visually see the location of campgrounds through a cluster map and a zoomed in map for each campground.
    
EJS (Embedded JavaScript Templates) as a templating language to create dynamic user experices.
    
Bootstrap as the driving CSS framework to create visually appealing user experiences.
    
Render to host the complete application
    `,
  },
];

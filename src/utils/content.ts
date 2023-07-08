import type { IExperience } from "./interfaces";

import TAMUHealthLogo from "../assets/TAMUHealth-icon.jpg";
import TAMULogo from "../assets/TAMU-icon.jpg";
import ACCLogo from "../assets/ACC-icon.jpg";
import CryptLogo from "../assets/crypt-icon.jpg";
import CNTVLogo from "../assets/CNTV-icon.jpg";

export const experiences: IExperience[] = [
    {
      title: "Computer Science Research Assistant",
      employer: "Texas A&M University Health Science Center",
      image: TAMUHealthLogo,
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
      title: "Academic Peer Mentor",
      employer: "Texas A&M University",
      image: TAMULogo,
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
      title: "Project Manager/Lead Developer",
      employer: "Aggie Coding Club",
      image: ACCLogo,
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
      title: "Front End Software Engineer",
      employer: "Crypt",
      image: CryptLogo,
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
      title: "Student Journalist",
      employer: "Coyote Nation TV",
      image: CNTVLogo,
      location: "Frisco, Texas",
      duration: "3 Years",
      start: "August, 2019",
      end: "May, 2022",
      description: `As a student journalist at Coyote Nation TV, I work with a small team of passionate creators to maintain Heritage High School's broadcasting program, a media outlet meant to educate, inform and entertain the students of HHS. In my three years in this program so far I've been able to create dozens of stories and segments tailored to tell the stories of students and offer an insight into the dynamic world of a High School student's life.`,
    },
  ]
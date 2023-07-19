export interface IContent {
    title: string
    description: string
    icon: string
    type: "Experience" | "Project"
}

export interface IExperience extends IContent {
    employer: string
    location: string
    start: string
    end?: string
    duration: string
}

export interface IProject extends IContent {
    demoUrl?: string
    githubUrl?: string
    platform: "Web" | "Mobile" | "Desktop" | "Serverside" | "Other"
    language: string
}

export interface ITechnology {
    name: string;
    icon: string;
    description: string;
    type: "languages" | "libraries/frameworks" | "databases" | "other";
  }
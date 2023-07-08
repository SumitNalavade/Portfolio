export interface IContent {
    title: string
    description: string
    image: string
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
    
}
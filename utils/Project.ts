export interface IProject {
    name: string
    description: string
    imagePath: string
    url: string
    language?: string
    default_branch?: string
    readMe?: string
};

export type ProjectsContextType = {
    projects: IProject[],
    saveProjects: (projects: IProject[]) => void;
}
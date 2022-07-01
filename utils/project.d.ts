export interface IProject {
    title: string;
    description: string,
    imagePath?: string,
    url: string,
    default_branch?: string
    language?: string
    readMe?: string
};

export type ProjectsContextType = {
    projects: IProject[],
    saveProjects: (projects: IProject[]) => void;
}
export interface IProject {
    title: string;
    description: string,
    imagePath?: string,
    url: string,
    default_branch?: string
    language?: string
};

export interface IFeaturedProject extends IProject {
    longDescription: string
};
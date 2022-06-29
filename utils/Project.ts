export interface IProject {
    title: string;
    description: string,
    imagePath?: string,
    url: string
};

export interface IFeaturedProject extends IProject {
    longDescription: string
};
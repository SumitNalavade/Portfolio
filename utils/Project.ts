interface IProject {
    title: string;
    description: string,
    imagePath: string,
    link: string
};

export default class Project implements IProject {
    title: string;
    description: string;
    imagePath: string;
    link: string;
    
    constructor(title: string, description: string, imagePath: string, link: string) {
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
        this.link = link
    };
}

export class FeaturedProject extends Project {
    longDescription: string;

    constructor(title: string, description: string, imagePath: string, link: string, longDescription: string) {
        super(title, description, imagePath, link);
        this.longDescription = longDescription;
    };
}

import axios from "axios";
import { Marked } from "@ts-stack/markdown";
import { IProject } from "../utils/Project";

export default async function getProjects() {
    const repos: [any]  = (await axios.get("https://api.github.com/users/SumitNalavade/repos?sort=created")).data;

    const projects: IProject[] = repos.map((repo: any) => {
        return {
            title: repo.name,
            description: repo.description,
            url: repo.url,
            default_branch: repo.default_branch
        }
    })

    return projects;
};

export async function getImages() {
    const projects = await getProjects();
    let readMes = projects.map(async (project: IProject) => {
        try {
            return await (await axios.get(`https://raw.githubusercontent.com/SumitNalavade/${project.title}/${project.default_branch}/README.md`)).data
        } catch {
            return "Temp"
        }
    });

    const settledReadMes = await Promise.allSettled(readMes);
    settledReadMes.map((readme: any) => {
        readme.value = Marked.parse(readme.value).match(/<img[^>]+src="([^">]+)"/);

        if(!readme.value) {
            readme.value = ["https://pngimg.com/uploads/github/github_PNG15.png", "https://pngimg.com/uploads/github/github_PNG15.png"]
        }
    });

    return settledReadMes;
};

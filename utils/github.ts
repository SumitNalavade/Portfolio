import axios from "axios";
import { Marked } from "@ts-stack/markdown";
import { IProject } from "../utils/Project";

export async function getProject(name: string) {
    const repo: IProject = (await axios.get(`https://api.github.com/repos/SumitNalavade/${name}`)).data;

    try {
        repo.readMe = (await axios.get(`https://raw.githubusercontent.com/SumitNalavade/${repo.name}/${repo.default_branch}/README.md`)).data;
    } catch {
        repo.readMe = repo.description;
    }
    
    repo.imagePath = `https://opengraph.githubassets.com/1/SumitNalavade/${repo.name}`

    return repo;
}


export async function getPinnedProjects() {
    const projects: IProject[] = (await axios.get("https://gh-pinned-repos.egoist.sh/?username=SumitNalavade")).data.map((repo: any) => {
        return {
            name: repo.repo,
            description: repo.description,
            url: repo.link,
            imagePath: repo.image,
            language: repo.language
        }
    });

    return projects;
}
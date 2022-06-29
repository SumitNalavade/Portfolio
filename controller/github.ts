import axios from "axios";
import { IProject } from "../utils/Project";

export default async function getProjects() {
    const repos: [any]  = (await axios.get("https://api.github.com/users/SumitNalavade/repos?sort=created")).data;

    const projects: IProject[] = repos.map((repo: any) => {
        return {
            title: repo.name,
            description: repo.description,
            url: repo.url
        }
    })

    return projects;
};
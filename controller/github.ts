import axios from "axios";
import { Marked } from "@ts-stack/markdown";
import { IProject } from "../utils/Project";

export async function getAllProjects() {
    /*
        Get all of the repos from github,
        Loop through each repo and get the README,
        Filter out just the image URL in the README,
        Add the imageURL to the final object
    */

    const projects = (await axios.get("https://api.github.com/users/SumitNalavade/repos?sort=updated")).data.map(async (repo: any) => {
        let imagePath: string = "";

        try {
            const readme = (await axios.get(`https://raw.githubusercontent.com/SumitNalavade/${repo.name}/${repo.default_branch}/README.md`)).data;
            imagePath = (Marked.parse(readme).match(/<img[^>]+src="([^">]+)"/)![1])
        } catch {
            imagePath = `https://opengraph.githubassets.com/1/SumitNalavade/${repo.name}`
        }

        return {
            title: repo.name,
            description: repo.description,
            url: repo.url,
            default_branch: repo.default_branch,
            imagePath: imagePath + "?raw=true"
        }
    });

    // @ts-ignore
    const result = (await Promise.allSettled(projects)).map(({ status, value }) => value);

    return result;
};

export async function getPinnedProjects() {
    const projects: [IProject] = (await axios.get("https://gh-pinned-repos.egoist.sh/?username=SumitNalavade")).data.map((repo: any) => {
        return {
            title: repo.repo,
            description: repo.description,
            imagePath: repo.image,
            url: repo.link
        }
    });

    return projects
};

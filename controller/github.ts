import axios from "axios";
import { Marked } from "@ts-stack/markdown";

export default async function getProjects() {
    /*
        Get all of the repos from github,
        Loop through each repo and get the README,
        Filter out just the image URL in the README,
        Add the imageURL to the final object
    */

    const projects = (await axios.get("https://api.github.com/users/SumitNalavade/repos?sort=created")).data.map(async (repo: any) => {
        let imagePath: string = "";

        try {
            const readme = (await axios.get(`https://raw.githubusercontent.com/SumitNalavade/${repo.name}/${repo.default_branch}/README.md`)).data;
            imagePath = (Marked.parse(readme).match(/<img[^>]+src="([^">]+)"/)![1])
        } catch {
            imagePath = "https://pngimg.com/uploads/github/github_PNG15.png"
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

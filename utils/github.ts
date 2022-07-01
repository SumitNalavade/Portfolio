import axios from "axios";
import { Marked } from "@ts-stack/markdown";
import { IProject } from "../utils/Project";

export async function getPinnedProjects() {

    const projects: IProject[] = (await axios.get("https://gh-pinned-repos.egoist.sh/?username=SumitNalavade")).data.map(async (repo: any) => {
        let readMe: string = "";

        try {
            readMe = (await axios.get(`https://raw.githubusercontent.com/SumitNalavade/${repo.repo}/main/README.md`)).data;
        } catch {
            try {
                readMe =(await axios.get(`https://raw.githubusercontent.com/SumitNalavade/${repo.repo}/master/README.md`)).data;
            } catch {
                readMe = repo.description
            }
        }

        return {
            title: repo.repo,
            description: repo.description,
            url: repo.link,
            imagePath: repo.image,
            readMe: readMe,
            language: repo.language
        }
    });
    
    // @ts-ignore
    const result = (await Promise.allSettled(projects)).map(({ status, value }) => value);

    return result
}

//https://ghchart.rshah.org/username
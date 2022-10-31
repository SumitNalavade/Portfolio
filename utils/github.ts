import axios from "axios";
import { Marked } from "@ts-stack/markdown";
import { IProject } from "../utils/Project";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export async function getProject(name: string) {
    const repo: any = (await axios.get(`https://api.github.com/repos/SumitNalavade/${name}`)).data;

    try {
        repo.readMe = (await axios.get(`https://raw.githubusercontent.com/SumitNalavade/${repo.name}/${repo.default_branch}/README.md`)).data;
    } catch {
        repo.readMe = repo.description;
    }
    
    repo.imagePath = `https://opengraph.githubassets.com/1/SumitNalavade/${repo.name}`
    repo.url = repo.html_url;
    
    return repo;
}

export async function test() {
    
}


export async function getPinnedProjects() {
    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
      });
      
      const authLink = setContext((_, { headers }) => {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
          }
        }
      });
      
      const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      });

      const { data } = await client.query({
        query: gql`
          {
            user(login: "SumitNalavade") {
              pinnedItems(first: 6) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      name
                      id
                      url
                      description
                      primaryLanguage {
                        name
                        }
                    }
                  }
                }
              }
            }
          }
        `
      });
      
    const { user } = data;
    const pinnedItems = user.pinnedItems.edges.map((edge: any) => edge.node);

    const projects: IProject[] = pinnedItems.map((repo: any) => {
        return {
            name: repo.name,
            description: repo.description,
            url: repo.url,
            imagePath: `https://opengraph.githubassets.com/1/SumitNalavade/${repo.name}`,
            language: repo["primaryLanguage"]["name"]
        }
    });

    return projects;
}
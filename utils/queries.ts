import { GraphQLClient, gql } from "graphql-request";
import axios from "axios";

export const getPinnedRepositories = async () => {
  const graphQLClient = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
    },
  });

  const query = gql`
    {
      user(login: "SumitNalavade") {
        pinnedItems(first: 6) {
          edges {
            node {
              ... on Repository {
                name
                description
                url
                defaultBranchRef {
                  name
                }
                primaryLanguage {
                  name
                }
                nameWithOwner
              }
            }
          }
        }
      }
    }
  `;

  const data = JSON.parse(JSON.stringify(await graphQLClient.request(query)));

  return data.user.pinnedItems.edges.map((elm: any) => ({
    ...elm.node,
    imageUrl: `https://opengraph.githubassets.com/1/${elm.node.nameWithOwner}`,
    readmeUrl: `https://raw.githubusercontent.com/${elm.node.nameWithOwner}/${elm.node.defaultBranchRef.name}/README.md`,
  }))
};

import { GraphQLClient, gql } from "graphql-request";

export const getPinnedRepositories = async (url: string) => {
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
    },
  });

  const query = gql`
    {
      user(login: "${process.env.NEXT_PUBLIC_GITHUB_USERNAME}") {
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
                openGraphImageUrl
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
    readmeUrl: `https://raw.githubusercontent.com/${elm.node.nameWithOwner}/${elm.node.defaultBranchRef.name}/README.md`,
  }))
};
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { gql } from "@apollo/client";

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',  
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`
      }
    }
});
  

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export const GET_PINNED_REPOSITORIES = gql`
  query PinnedRepositories($username: String!) {
    user(login: $username) {
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
            }
          }
        }
      }
    }
  }
`;


export default client;
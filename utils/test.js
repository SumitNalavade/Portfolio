const axios = require("axios");

axios({
    url: "https://api.github.com/graphql",
    method: "POST",
    headers: {
        Authorization: `Bearer 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`,
        'Content-Type': 'application/json'
    },
    data: {
        query:  `{
            user(login: "SumitNalavade") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on RepositoryInfo {
                    name
                    description
                    url
                    createdAt
                    updatedAt
                  }
                }
              }
            }
          }`
    }
}).then((res) => console.log(res.data.data.user.pinnedItems)).catch((error) => console.log(error));

//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
export interface IProject {
    name: string
    description: string
    url: string
    primaryLanguage: {
        name: string
    }
    defaultBranchRef: {
        name: string
    }
    imageUrl: string
    readmeUrl: string
}

/*
{
  "name": "VS-Code-ReadMe-Editor",
  "description": "Create, Customize and Commit your project's ReadMe in VS Code with an integrated extension",
  "url": "https://github.com/SumitNalavade/VS-Code-ReadMe-Editor",
  "defaultBranchRef": {
    "name": "main"
  },
  "primaryLanguage": {
    "name": "TypeScript"
  },
  "imageUrl": "https://opengraph.githubassets.com/1/SumitNalavade/VS-Code-ReadMe-Editor",
  "readmeUrl": "https://raw.githubusercontent.com/SumitNalavade/VS-Code-ReadMe-Editor/main/README.md"
}
*/
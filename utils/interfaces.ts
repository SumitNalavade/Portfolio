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
    openGraphImageUrl: string
    readmeUrl: string
    readme: string
    nameWithOwner: String
}
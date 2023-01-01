export const SUCCESS_SEARCH = 'SUCCESS_SEARCH'
export const LOADING_SEARCH = 'LOADING_SEARCH'
export const ERROR_SEARCH = 'ERROR_SEARCH'

export interface ISearchUsers {
    search: string
}

export interface ISearch {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id?: string | null
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    name?: any | null
    company?: any | null
    blog?: any | null
    location?: any | null
    email?: any | null
    hireable?: any | null
    bio?: any | null
    twitter_username?: any | null
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string | any
    updated_at: string | any
}

export interface ISuccessSearch {
    type: typeof SUCCESS_SEARCH
    messageSuccessSearch: string
    payload: ISearch
}

export interface IErrorSearch {
    type: typeof ERROR_SEARCH
    messageErrorSearch: string
}

export interface ILoadingSearch {
    type: typeof LOADING_SEARCH
    loadingSearch: boolean
}
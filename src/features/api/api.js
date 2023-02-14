export const API_ROOT = 'https://www.reddit.com'
export const SUBREDDIT = '/r/memes'

export const getMemePosts = async () => {
    const response = await fetch(`${API_ROOT}${SUBREDDIT}.json`) 
    const json = await response.json()

    return json.data.children.map((post) => post.data)
}
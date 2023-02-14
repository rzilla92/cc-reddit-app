export const API_ROOT = 'https://www.reddit.com/r/memes.json'

export const getMemePosts = async () => {
    const response = await fetch(API_ROOT) 
    const json = await response.json()

    return json.data.children.map((post) => post.data)
}
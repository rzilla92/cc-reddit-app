import { createSlice } from '@reduxjs/toolkit';
import { getMemePosts } from '../features/api/api';

const initialState = {
    posts: [],
    error: false,
    isLoading: false
}

const redditSlice = createSlice({
    name: 'memePosts',
    initialState,
    reducers: {
        setPosts(state,action) {
            state.posts = action.payload
        },
        startGetPosts(state){
            state.isLoading = true
            state.error = false
        },
        getPostsSuccess(state, action) {
            state.isLoading = false
            state.posts = action.payload
        },
        getPostsFailed(state) {
            state.isLoading = false
            state.error = true
        }
    }
})

export const {
    setPosts,
    startGetPosts,
    getPostsSuccess,
    getPostsFailed
} = redditSlice.actions

export default redditSlice.reducer

//Thunk

export const fetchPosts = () => async (dispatch) => {
    try {
        dispatch(startGetPosts())
        const posts = await getMemePosts()
        dispatch(getPostsSuccess(postsWithMetadata))
    } catch (error) {
        dispatch(getPostsFailed)
    }
}

export const selectPosts = (state) => state.api.posts
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Post } from "../Post/Post";
import { fetchPosts, selectPosts } from "../../store/redditSlice";

import './Home.css'

const Home = () => {
    const reddit = useSelector((state) => state.reddit)
    const { isLoading, error } = reddit
    const posts = useSelector(selectPosts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <>
            {posts.map((post,index) => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
        </>
    )
}

export default Home
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import { post_fetching, post_fetch_error, post_fetch_success } from "../redux/actions/postActions";
import axios from "axios";
import { fetchPost } from "../redux/actions/postActions";

const Post = () => {
    const {loading, data, error} = useSelector(state => state);
    const dispatch = useDispatch();

    console.log("loading", loading);
    console.log("data", data);
    console.log("error", error);

    useEffect(() => {
        console.log("fetched called");
        // fetchPost();
        dispatch(fetchPost());
    }, []);

    // async function fetchPost() {
    //     try {
    //         dispatch(post_fetching());
    //         const response = await axios.get("https://gauravgitacc.github.io/postAppData/posts.json");
    //         dispatch(post_fetch_success(response.json));
    //     }
    //     catch(error) {
    //         dispatch(post_fetch_error(error.message));
    //     }
    // }

    return (
        <div>
            {
                data && data.map(item =>
                    <div key={item.id}>
                        <h1> {item.title} </h1>
                        <p> {item.body} </p>
                        <hr />
                    </div>
                )
            }
        </div>
    )
}


export default Post;
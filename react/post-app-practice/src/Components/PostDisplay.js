import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { postRequest } from "../redux/actions/PostActions";
import axios from "axios";


const PostDisplay = () => {
    const {loading, data, error} = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(loading);

    useEffect(() => {
        dispatch(postRequest());
        // dispatch(postRequestStart());
        // axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        // .then(response => dispatch(postSuccessData(response.data)))
        // .catch(err => dispatch(postFailureData(err)))
    }, []);

    return (
        <div>
            <h1> PostDisplay </h1>
            {loading === true? <h2> Loading...</h2> : <h2> {error} </h2>}
            {
                data.length > 0 && data.map(item => (
                    <div key={item.id}> 
                        <h1> {item.title} </h1>
                        <p> {item.body} </p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}


export default PostDisplay;
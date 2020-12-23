import React, {useState, useEffect} from 'react';
import axios from 'axios';  

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]); 

    useEffect(() => {
        async function fetchComments () {
            const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
            setComments(res.data); 
        }
        fetchComments(); 
    }, [postId, comments]); 

    const renderedComments = comments.map(comment => {
        return (
            <li key={comment.id}>{comment.content}</li>
        ); 
    }); 
    return (
    <div>
        <ul>
            {renderedComments}
        </ul>
    </div>
    ); 
}; 

export default CommentList; 
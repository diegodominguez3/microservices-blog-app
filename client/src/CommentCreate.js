import React, {useState} from 'react'; 
import axios from 'axios';

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState(''); 

    const onSumbit  = async (event) => {
        event.preventDefault(); 
         
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content: content
        }); 
        setContent(''); 
    };

    return (
        <div>
            <form onSubmit={onSumbit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input value={content} onChange={e => {setContent(e.target.value)}} className="form-control" />
                </div>
                <button className="btn btn-primary" 
                style={{marginTop: '10px'}}>Submit</button>
            </form>
        </div>
    ); 
}; 

export default CommentCreate; 
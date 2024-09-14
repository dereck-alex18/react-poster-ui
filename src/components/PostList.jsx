import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState, useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";

function PostList({ isModalOpen, onClose }){
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const url = 'http://127.0.0.1:8000/api/posts/';

    useEffect(() => {
        async function fetchPosts(){
            setIsFetching(true);
            const response = await fetch(url);
            const responseData = await response.json();
            setPosts(responseData);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    async function storePosts(newPost){
        
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        });
        setPosts((currentPosts) => [newPost, ...currentPosts]);
    }

    let modalContent =  
    <Modal onClose={onClose}>
        <NewPost  
        onCancel={ onClose }
        onStoringPosts={storePosts}
        />
    </Modal>;
    
    
    return(
        <>
            { isModalOpen && modalContent }
            {   posts.length > 0 && 
                <ul className = {classes.posts}>
                    {posts.map((post, index) => <Post key = { index } author = { post.author } body = { post.body } />)}
                </ul> 
            }
            {posts.length === 0 && !isFetching && 
                <div className={classes.emptyMessage}>
                    <h1>There are no posts yet.</h1>
                    <h2>Don't be shy and share your thoughts!</h2>
                </div>
            }

            {isFetching && 
                <div className={ classes.loading }>
                    <p>
                        Loading posts
                        <span className={ classes.pulseLoader }>
                            <PulseLoader size={5} color='#dadada' />
                        </span>
                    </p>
                </div>
            }
            
        </>
    );
}

export default PostList
import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState, useEffect } from 'react';

function PostList({ isModalOpen, onClose }){
    const [posts, setPosts] = useState([]);


    function storePosts(newPost){
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
            {posts.length === 0 && 
                <div className={classes.emptyMessage}>
                    <h1>There are no posts yet.</h1>
                    <h2>Don't be shy and share your thoughts!</h2>
                </div>
            }
            
        </>
    );
}

export default PostList
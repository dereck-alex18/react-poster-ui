import { MdMessage, MdPostAdd } from "react-icons/md";
import classes from './PostHeader.module.css';

function PostHeader({ onOpen }){
    return(
        <header className={classes.postHeader}>
            <nav>
                
                <h1>
                    <MdMessage />
                    React Poster
                </h1>

                
                <button onClick={ onOpen }>
                    <MdPostAdd />
                    New Post
                </button>
            </nav>
            
        </header>
    );
}

export default PostHeader;
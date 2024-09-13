import classes from './NewPost.module.css';
import { useState } from 'react';


function NewPost({ onCancel, onStoringPosts }){
    const[textContent, setTextContent] = useState('');
    const[authorName, setAuthorName] = useState('');
    const [charNumber, setCharNumber] = useState(0);

    function onTextContentChange(event){
        setTextContent(event.target.value);
        setCharNumber(event.target.value.length);
    }

    function onAuthorNameChange(event){
        setAuthorName(event.target.value);
        
    }

    function submitHandler(event){
        event.preventDefault();
        
        const post = {
            author: authorName,
            body: textContent,
        }
        onStoringPosts(post);
        onCancel();
    }
    
    return(
        <form className = {classes.newPost}>
            <label htmlFor="body">Text</label>
            <textarea name="body" required rows={3} maxLength={90} onChange={ onTextContentChange }></textarea>

            <p className={classes.charsLimit}>Chars Limit: { charNumber }/90</p>

            <label htmlFor="author">Author</label>
            <input type="text" name="author" onChange={ onAuthorNameChange }/>

            <div className = {classes.formButtons}>
                <button type='button' className = { classes.cancelButton } onClick={ onCancel }>Cancel</button>
                <button disabled={ !authorName || !textContent } className = { classes.submitButton } onClick={ submitHandler }>Submit</button>
            </div>
        </form>
    )
}

export default NewPost;
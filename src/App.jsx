import PostHeader from './components/PostHeader'; 
import PostList from './components/PostList';
import { useState } from 'react';

function App(){

    const [currentModalState, setModalState] = useState(false);
    
    function onOpen(){
        setModalState(true);      
    }

    function onClose(){
        setModalState(false);
    }
    
    return(
        <>
            <PostHeader onOpen={onOpen}/>
            <div className="main">
             <PostList isModalOpen={currentModalState} onClose={onClose}/>
            </div>
        </>  
    );
}

export default App;
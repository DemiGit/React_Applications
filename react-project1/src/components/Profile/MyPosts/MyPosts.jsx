import React from 'react';

import SinglePost from './SinglePost/SinglePost';

const MyPosts = (props) => {
    let areaRef = React.createRef();

    let changeAreaValue = () => {
        let areaValue = areaRef.current.value;
        props.changeAreaText(areaValue);
    }

    let addPost = () => {
        props.addPost();
    }

    return <div>
        <textarea ref={areaRef} onChange={changeAreaValue} value={props.areaText}></textarea>
        <button onClick={addPost}>Send</button>
        <div>
            {props.posts.map(p => {return <SinglePost post={p.post}/>})}
        </div>
    </div>
}

export default MyPosts;
import React from 'react';

const Post = ({post}) => {
    return <div>
        <div>{post}</div>
    </div>
}

const ProfilePosts = (props) => {
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
            {props.posts.map(p => {return <Post post={p.post}/>})}
        </div>
    </div>
}

export default ProfilePosts;
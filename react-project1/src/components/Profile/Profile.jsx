import React from 'react';
import {connect} from 'react-redux';

import MyPosts from './MyPosts/MyPosts';
import {changeAreaText , addPost} from './../../reducers/profile-reducer';

class Profile extends React.Component {
    render() {
        return <div>
            <MyPosts {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
        posts: state.profilePage.posts,
        areaText: state.profilePage.areaText
})

export default connect(mapStateToProps, {changeAreaText, addPost})(Profile);

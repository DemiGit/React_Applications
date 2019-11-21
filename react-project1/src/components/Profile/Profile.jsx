import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {withRouter} from 'react-router-dom';

import MyPosts from './MyPosts/MyPosts';
import {changeAreaText , addPost, setUserProfile} from './../../reducers/profile-reducer';
import ProfileUser from './ProfileUser/ProfileUser';


class Profile extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then( response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return <div>
            <ProfileUser profile = {this.props.profile} />
            <MyPosts {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
        posts: state.profilePage.posts,
        areaText: state.profilePage.areaText,
        profile: state.profilePage.profile
})

let withUrlDataProfile = withRouter(Profile);

export default connect(mapStateToProps, {changeAreaText, addPost, setUserProfile})(withUrlDataProfile);

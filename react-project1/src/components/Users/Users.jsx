import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';

import UserPage from './UsersPage/UserPage';
import {setUsers, setCurrentPage} from './../../reducers/users-reducer';


 class Users extends React.Component {

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?`).then( response => {
            this.props.setUsers(response.data.items);
        });
    }

    usersOnPage = (p) => {
        this.props.setCurrentPage(p);
    }

    render() {
        return <>
            <UserPage {...this.props} usersOnPage={this.usersOnPage}/>
        </>
    }
}

let mapStateToProps = (state) => ({users: state.usersPage.users})

export default connect(mapStateToProps, {setUsers, setCurrentPage})(Users);

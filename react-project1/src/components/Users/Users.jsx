import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';

import UsersPage from './UsersPage/UsersPage';
import {setUsers, setCurrentPage, follow, unfollow, setisFetching} from './../../reducers/users-reducer';
import Loader from './../../common/Loader/Loader';

 class Users extends React.Component {

    componentDidMount = () => {
        this.props.setisFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then( response => {
            this.props.setUsers(response.data.items);
            this.props.setisFetching(false);
        });
    }

    usersOnPage = (p) => {
        this.props.setisFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then( response => {
            this.props.setUsers(response.data.items);
            this.props.setisFetching(false);
        });
        
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader/> : <UsersPage {...this.props} usersOnPage={this.usersOnPage} users={this.props.users} />
            }
        </>
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount
})

export default connect(mapStateToProps, {setUsers, setCurrentPage, follow, unfollow, setisFetching})(Users);

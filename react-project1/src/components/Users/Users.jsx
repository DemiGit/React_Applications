import React from 'react';
import {connect} from 'react-redux';
import UsersPage from './UsersPage/UsersPage';
import {setUsers, setCurrentPage, follow, unfollow, setisFetching, setIsFollowing} from './../../reducers/users-reducer';
import Loader from './../../common/Loader/Loader';
import { getUsers } from '../../api/api';
import { followTo, unfollowTo } from './../../api/api';

 class Users extends React.Component {
    constructor(props){
        super(props);
        this.usersOnPage = this.usersOnPage.bind(this);
        this.followOn = this.followOn.bind(this);
        this.unfollowFrom = this.unfollowFrom.bind(this);
    }
    
    componentDidMount = () => {
        this.props.setisFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then( data => {
            this.props.setUsers(data.items);
            this.props.setisFetching(false);
        });
    }

    followOn = (u) => {
        followTo({...u}).then( response => {
                    
            if (response.data.resultCode === 0) {
                    this.props.follow(u.id);
            }
            })
    }

    unfollowFrom = (u) => {
        this.props.setIsFollowing(true);
        unfollowTo({...u}).then( response => {
        if (response.data.resultCode === 0) {
            this.props.unfollow(u.id);
        }
        this.props.setIsFollowing(false, u.id);
        })
    }

    usersOnPage = (p) => {
        this.props.setisFetching(true);
        this.props.setCurrentPage(p);
        getUsers(p, this.props.pageSize).then( data => {
            this.props.setUsers(data.items);
            this.props.setisFetching(false);
        });
        
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader/> : <UsersPage {...this.props} usersOnPage={this.usersOnPage}  setIsFollowing={this.props.setIsFollowing} followOn={this.followOn} unfollowFrom={this.unfollowFrom}/>}
        </>
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFollowing: state.usersPage.isFollowing
})

export default connect(mapStateToProps, {setUsers, setCurrentPage, follow, unfollow, setisFetching, getUsers, setIsFollowing})(Users);

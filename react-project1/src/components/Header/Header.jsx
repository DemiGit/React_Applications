import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';

import HeaderPage from './HeaderPage/HeaderPage';
import {setAuthUserData} from './../../reducers/auth-reducer';

class Header extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then( response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render() {
        return <HeaderPage {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(Header);
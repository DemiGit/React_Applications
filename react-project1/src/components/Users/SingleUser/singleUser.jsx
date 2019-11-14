import React from 'react';
import {NavLink} from 'react-router-dom';

const SingleUser = (props) => {
    return <div>
        <NavLink to={'/profile'}>
            <img src='#' alt="img"/>
        </NavLink>
        <div>
            {props.name}
        </div>
    </div>
}

export default SingleUser;
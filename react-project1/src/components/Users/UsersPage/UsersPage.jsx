import React from 'react';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

import styles from './userPageStyles.module.css';

const UsersPage = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div> 
        <div>
            {pages.map(p => <span className={props.currentPage === p && styles.selected }onClick={()=> {props.usersOnPage(p)}}>{p}</span>)}
        </div>

            {props.users.map(u => <div>
            <NavLink to={'/profile/'+u.id}>
                <img src='#' alt="img"/>
            </NavLink>
            <div>
                {u.name}
            </div>
            <div>
                {u.id}
            </div>
            <div>
                {u.followed ? <button onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "9812fb89-3244-433f-b711-807defb18548"
                        }
                    }).then( response => {
                        if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                        }
                    });
                    
                }}>Unfollow</button> 
                : <button onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "9812fb89-3244-433f-b711-807defb18548"
                        }
                    }).then( response => {
                        if (response.data.resultCode === 0) {
                            props.follow(u.id);
                        }
                    });
                    
                    }
                    
                    }>Follow</button> }
            </div>
        </div>)}
    </div>
}

export default UsersPage;
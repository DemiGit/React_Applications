import React from 'react';

import SingleUser from '../SingleUser/singleUser';


const UserPage = (props) => {
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return <div> 
        <div>
            {pages.map(p => <span onClick={()=> {props.usersOnPage(p)}}>{p}</span>)}
        </div>
        {props.users.map(u => <SingleUser key={u.id} name={u.name}/>)}
    </div>
    
}
export default UserPage;
import React from 'react';
import {Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';


const App = (props) => {
  return <div>
    <Navbar/>
    <Route path={'/profile'} render={() => <Profile {...props}/>}/>
    <Route path={'/users'} render={() => <Users/>}/>
  </div>
}

export default App;

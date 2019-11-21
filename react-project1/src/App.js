import React from 'react';
import {Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import Header from './components/Header/Header';

const App = (props) => {
  return <div>
    <Header />
    <Navbar/>
    <Route path={'/profile/:userId?'} render={() => <Profile />}/>
    <Route exact path={'/users'} render={() => <Users/>}/>
  </div>
}

export default App;

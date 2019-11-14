import {createStore, combineReducers} from 'redux'

import profileReducer from './../reducers/profile-reducer';
import usersReducer from './../reducers/users-reducer';

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        usersPage: usersReducer
    }
);

let store = createStore(reducers);

export default store;
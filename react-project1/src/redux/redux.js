import {createStore, combineReducers} from 'redux'

import {profileReducer} from './../reducers/profile-reducer';

let reducers = combineReducers(
    {
        profilePage: profileReducer
    }
);

let store = createStore(reducers);

export default store;
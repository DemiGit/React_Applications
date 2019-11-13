import {createStore, combineReducers} from 'redux'

import {profileReducer} from './../reducers/profile-reducer';

let reducers = combineReducers(
    {
        profileReducer
    }
);

let store = createStore(reducers);

export default store;
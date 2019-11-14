const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.onPage}
        }
        default:
            return state;
    }
}

export default usersReducer;

export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (onPage) => ({type: SET_CURRENT_PAGE, onPage})
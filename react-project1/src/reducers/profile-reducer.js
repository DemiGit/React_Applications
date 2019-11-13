const CHANGE_AREA_TEXT = 'CHANGE_AREA_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
    profile: null,
    posts: [],
    areaText: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_AREA_TEXT: {
            return {...state, areaText: action.areaValue }
        }
        case ADD_POST: {
            let newPost = {
                post: state.areaText
            }
            return {...state, posts: [...state.posts, newPost], areaText: '' }
        }
        default:
            return state;
    }
}

export const changeAreaText = (areaValue) => ({type: CHANGE_AREA_TEXT, areaValue  })
export const addPost = () => ({type: ADD_POST})
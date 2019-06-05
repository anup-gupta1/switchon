import { SET_CURRENT_USER, SET_USERS, SET_USER } from '../actions/types';


const initialState = {
    isAuthenticated: false,
    user: {},
    users:[]
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: action.payload.id ? true : false,
                user: action.payload
            };
      
        case SET_USERS:
        return{
            ...state,
            users:action.users
        }
        default:
            return state
    }
}

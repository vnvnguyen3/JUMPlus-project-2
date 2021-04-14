import { LOGIN, SIGNUP, UPDATE_USER } from '../actions/types';

const initialState = {
    users: [],
    user: {user: {pin: ""}}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
             return {
                 ...state,
                 user: action.payload
             };
        case SIGNUP:
            return {
                ...state,
                user: action.payload,
                users: [...state.users, action.payload]
            };
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.user.pin === state.user.user.pin){
                        return action.payload;
                    }
                    return user;
                }),
                user: action.payload,
            }
        default:
            return state;
    }
}
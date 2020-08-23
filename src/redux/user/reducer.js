import {LOGIN_USER_ERROR, LOGIN_USER_REQUESTING, LOGIN_USER_SUCCESS} from "./constants";

const initialState = {
    requesting: false,
    success: false,
    error: '',
    user: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUESTING:
            return{
                ...state,
                requesting: true
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                user: action.user
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default reducer;

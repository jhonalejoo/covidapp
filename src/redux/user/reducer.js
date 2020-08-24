import {
    GET_TOKEN,
    LOGIN_USER_ERROR,
    LOGIN_USER_REQUESTING,
    LOGIN_USER_SUCCESS,
    ME_ERROR,
    ME_REQUESTING,
    ME_SUCCESS, REGISTER_ERROR, REGISTER_REQUESTING, REGISTER_SUCCESS
} from "./constants";

const initialState = {
    requesting: false,
    success: false,
    error: '',
    token: null,
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
                token: action.token
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error
            };
        case ME_REQUESTING:
            return {
                ...state,
                requesting: true
            };
        case ME_SUCCESS:
            return {
                ...state,
                success: true,
                user: action.user
            };
        case ME_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error
            };
        case REGISTER_REQUESTING:
            return {
                ...state,
                requesting: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                success: true,
            };
        case REGISTER_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error
            };
        case GET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
}

export default reducer;

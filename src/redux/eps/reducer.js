import {GET_EPS_ERROR, GET_EPS_REQUESTING, GET_EPS_SUCCESS} from "./constant";

const initialState = {
    requesting: false,
    success: false,
    error: '',
    eps: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EPS_REQUESTING:
            return{
                ...state,
                requesting: true
            };
        case GET_EPS_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                eps: state.eps
            };
        case GET_EPS_ERROR:
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

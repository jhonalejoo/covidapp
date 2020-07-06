import {GET_DATA_COVID_ERROR, GET_DATA_COVID_REQUESTING, GET_DATA_COVID_SUCCESS} from "./constants";

const initialState = {
    requesting: false,
    success: false,
    error: '',
    data: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_COVID_REQUESTING:
            return{
                ...state,
                requesting: true
            };
        case GET_DATA_COVID_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: action.data
            };
        case GET_DATA_COVID_ERROR:
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

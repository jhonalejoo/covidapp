import {LOGIN_USER_ERROR, LOGIN_USER_REQUESTING, LOGIN_USER_SUCCESS} from "./constants";

export const loginUserRequesting = () => {
    type: LOGIN_USER_REQUESTING
};

export const loginUserSuccess = (token) => {
    type: LOGIN_USER_SUCCESS,
    token
};

export const loginUserError = (error) => {
    type: LOGIN_USER_ERROR,
    error
};

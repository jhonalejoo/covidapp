import {
    GET_TOKEN,
    LOGIN_USER_ERROR,
    LOGIN_USER_REQUESTING,
    LOGIN_USER_SUCCESS,
    ME_ERROR,
    ME_REQUESTING,
    ME_SUCCESS, REGISTER_ERROR, REGISTER_REQUESTING, REGISTER_SUCCESS
} from "./constants";

export const loginUserRequesting = (values) => ({
    type: LOGIN_USER_REQUESTING,
    values
});

export const loginUserSuccess = (token) => ({
    type: LOGIN_USER_SUCCESS,
    token
});

export const loginUserError = (error) => ({
    type: LOGIN_USER_ERROR,
    error
});

export const meRequesting = (token) => ({
    type: ME_REQUESTING,
    token
});

export const meSuccess = (user) => ({
    type: ME_SUCCESS,
    user
});

export const meError = (error) => ({
    type: ME_ERROR,
    error
});

export const registerRequesting = (values) => ({
    type: REGISTER_REQUESTING,
    values
});

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS
});

export const registerError = (error) => ({
    type: REGISTER_ERROR,
    error
});

export const getToken = (token) => ({
    type: GET_TOKEN,
    token
});


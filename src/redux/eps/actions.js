import {GET_EPS_ERROR, GET_EPS_REQUESTING, GET_EPS_SUCCESS} from "./constant";

export const getEpsRequesting = () => ({
    type: GET_EPS_REQUESTING
});

export const getEpsSuccess = (eps) => ({
    type: GET_EPS_SUCCESS,
    eps
});

export const getEpsError = (error) => ({
    type: GET_EPS_ERROR,
    error
});

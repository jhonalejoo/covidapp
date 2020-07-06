import {GET_DATA_COVID_REQUESTING, GET_DATA_COVID_SUCCESS, GET_DATA_COVID_ERROR} from "./constants";

export const getDataCovidRequesting = () => ({
    type: GET_DATA_COVID_REQUESTING
});

export const getDataCovidSuccess = (data) => ({
    type: GET_DATA_COVID_SUCCESS,
    data
});

export const getDataCovidError = (error) => ({
    type: GET_DATA_COVID_ERROR,
    error
});

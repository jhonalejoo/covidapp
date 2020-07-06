import {call, put, all, takeEvery} from 'redux-saga/effects';
import {getDataCovidError, getDataCovidSuccess} from "./actions";
import {GET_DATA_COVID_REQUESTING} from "./constants";

const URL = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';

const dataCovidAPI = () => {

    return fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
        },
        data: {
            "limit" : 5000,
            "app_token" : '20w1iezihvv4uhmaoxuzzcf1w'
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json, 'mmmm');
            throw json;
        }).catch((error) => {
            console.log(error, 'wwwww');
            throw error;
        })
};

function* dataCovidFlow() {
    try{
        const data = yield call(dataCovidAPI);
        yield put(getDataCovidSuccess(data));
    }catch (error) {
        yield put(getDataCovidError(error));
    }
}

function* dataCovidWatcher() {
    yield all([
        takeEvery(GET_DATA_COVID_REQUESTING, dataCovidFlow),
    ])
}

export default dataCovidWatcher;

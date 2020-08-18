import {call, put, all, takeEvery} from 'redux-saga/effects';
import {getDataCovidError, getDataCovidSuccess} from "./actions";
import {GET_DATA_COVID_REQUESTING} from "./constants";

const URL = 'http://api.covid19api.com/summary';

const dataCovidAPI = () => {

    return fetch(URL, {
        method: 'GET',
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            let data=result.hasOwnProperty('Countries') ?result.Countries.find((country => country.Country==='Colombia')) : {};
            return  data;
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

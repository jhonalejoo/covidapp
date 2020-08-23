import {call, put, all, takeEvery} from 'redux-saga/effects';
import {getDataCovidError, getDataCovidSuccess} from "./actions";
import {GET_DATA_COVID_REQUESTING} from "./constants";
import {ROUTE_ENDPOINT} from "../../utils/env";

const dataCovidAPI = () => {
    return fetch(`${ROUTE_ENDPOINT}covid/dataCovid`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
        }
    })
        .then(response => response.json())
        .then(json => {
            return  json;
        }).catch((error) => {
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

import {call, put, all, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../utils/env";
import {getEpsError, getEpsSuccess} from "./actions";
import {GET_EPS_REQUESTING} from "./constant";

const EPS_URL = `${ROUTE_ENDPOINT}eps`;

const getEpsAPI = () => {
    return fetch(EPS_URL, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
        },
    })
        .then(response => response.json())
        .then(json => {
            if(json.code === 200)
                return json.data.data;
        }).catch((error) => {
            throw error;
        })
};

function* epsFlow() {
    try{
        const eps = yield call(getEpsAPI);
        yield put(getEpsSuccess(eps));
    }catch (error) {
        yield put(getEpsError(error));
    }
}

function* epsWatcher() {
    yield all([
        takeEvery(GET_EPS_REQUESTING, epsFlow)
    ])
};

export default epsWatcher;

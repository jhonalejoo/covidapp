import {call, put, all, takeEvery} from 'redux-saga/effects';
import {loginUserError, loginUserSuccess} from "./actions";
import {LOGIN_USER_REQUESTING} from "./constants";
import {ROUTE_ENDPOINT} from "../../utils/env";

const LOGIN_URL = `${ROUTE_ENDPOINT}auth/login`;

const loginAPI = (values) => {
    let body = {
        'email': values.email,
        'password': values.password,
        'device': 'mobile',
    };
    return fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(json => {
            if (json.code === 422)
                throw json.data;
            if(json.code === 400)
                throw json.data;
            if(json.hasOwnProperty('access_token'))
                return json.access_token;
            throw ''
        }).catch((error) => {
            throw error;
        })
};

function* loginFlow(action) {
    try {
        const {values} = action;
        const token = yield call(loginAPI, values);
        yield put(loginUserSuccess(token));
      //  yield put(checkJWTRequesting(token));
    }catch (error) {
        yield put(loginUserError(error));
    }
}

function* userWatcher() {
    yield all([
        takeEvery(LOGIN_USER_REQUESTING, loginFlow),
    ])
}

export default userWatcher;

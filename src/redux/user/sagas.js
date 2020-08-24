import {call, put, all, takeEvery} from 'redux-saga/effects';
import {
    loginUserError, loginUserRequesting,
    loginUserSuccess,
    meError,
    meRequesting,
    meSuccess,
    registerError,
    registerSuccess
} from "./actions";
import {LOGIN_USER_REQUESTING, ME_REQUESTING, REGISTER_REQUESTING} from "./constants";
import {ROUTE_ENDPOINT} from "../../utils/env";
import {AsyncStorage} from 'react-native';
import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}



const LOGIN_URL = `${ROUTE_ENDPOINT}auth/login`;
const ME_URL = `${ROUTE_ENDPOINT}me`;
const CREATE_URL = `${ROUTE_ENDPOINT}users/user`;

const loginOk = (token) => {
    if (token != null) {
        AsyncStorage.setItem('@app:covidapp', token).then(response => {
            if (response !== undefined) {
                navigate('Profile');
            }
        });
    }
};

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
        yield put(meRequesting(token));
        yield call(loginOk, token);
    }catch (error) {
        yield put(loginUserError(error));
    }
}

const meAPI = (token) => {
    return fetch(ME_URL, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + token
        }
    })
        .then(response => response.json())
        .then(json => {
            if (json.code === 200)
                return json.data.data;
            if(json.code === 400)
                return json.data;
        }).catch((error) => {
            throw error;
        })
};

function* meFlow(action) {
    try {
        const {token} = action;
        const user = yield call(meAPI, token);
        yield put(meSuccess(user));
    }catch (error) {
        yield put(meError(error));
    }
}

const registerAPI = (values) => {
    let body = {
        'email': values.email,
        'password': values.password,
        'name': values.name,
        'phone': values.phone,
        'eps_id': values.eps,
        'covid_id': 3,
        'rol_id': 1,
    };
    return fetch(CREATE_URL, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json,'12');
        }).catch((error) => {
            throw error;
        })
};

function* registerFlow(action) {
    try {
        const {values} = action;
        yield call(registerAPI, values);
        yield put(registerSuccess());
        yield put(loginUserRequesting(values));
    }catch (error) {
        yield put(registerError(error));
    }
}

function* userWatcher() {
    yield all([
        takeEvery(LOGIN_USER_REQUESTING, loginFlow),
        takeEvery(ME_REQUESTING, meFlow),
        takeEvery(REGISTER_REQUESTING, registerFlow)
    ])
}

export default userWatcher;

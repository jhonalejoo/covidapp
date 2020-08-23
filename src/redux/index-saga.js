import {all, fork} from 'redux-saga/effects';
import dataCovidSagas from "./dataCovid/sagas";
import userSagas from "./user/sagas";
import epsSagas from "./eps/sagas";

export default function* IndexSagas() {
    yield all([
        fork(dataCovidSagas),
        fork(userSagas),
        fork(epsSagas)
    ])
}

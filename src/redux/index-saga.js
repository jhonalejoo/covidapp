import {all, fork} from 'redux-saga/effects';
import dataCovidSagas from "./dataCovid/sagas";

export default function* IndexSagas() {
    yield all([
        fork(dataCovidSagas)
    ])
}

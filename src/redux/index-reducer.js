import {combineReducers} from 'redux';
import dataCovid from  './dataCovid/reducer';

const IndexReducer = combineReducers( {
    dataCovid
});

export default IndexReducer

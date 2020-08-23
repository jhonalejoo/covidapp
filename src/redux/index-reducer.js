import {combineReducers} from 'redux';
import dataCovid from  './dataCovid/reducer';
import user from './user/reducer';
import eps from './eps/reducer';

const IndexReducer = combineReducers( {
    dataCovid,
    user,
    eps
});

export default IndexReducer

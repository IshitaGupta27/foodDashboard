import {combineReducers} from 'redux';
import {dishReducer} from './dishReducers';
import {filterReducer} from './filterReducer';

const reducer = combineReducers({
    allDish : dishReducer,
    filter: filterReducer
});

export default reducer;
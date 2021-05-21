import {combineReducers} from 'redux';
import {dishReducer} from './dishReducers';

const reducer = combineReducers({
    allDish : dishReducer,
});

export default reducer;
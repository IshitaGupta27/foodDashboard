import {ActionTypes} from '../constants/action-types';

const initialState = {
    keyword: null
}

export const filterReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SEARCH_DISH:
            return {
                keyword: payload.keyword
            }
        case ActionTypes.REMOVE_FILTER:
            return {
                keyword: null
            }
        default:
            return state;
    }
}
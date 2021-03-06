import {ActionTypes} from '../constants/action-types';

export const addDish = (dish) => {
    return {
        type : ActionTypes.ADD_DISH,
        payload : dish
    };
}

export const deleteDish = (dish) => {
    return {
        type : ActionTypes.DELETE_DISH,
        payload : dish
    };
}

export const editDish = (dish) => {
    return {
        type : ActionTypes.EDIT_DISH,
        payload : dish
    }
}

export const searchDish = (dish) => {
    return {
        type : ActionTypes.SEARCH_DISH,
        payload : dish
    };
}

export const removeFilter = () => {
    return {
        type: ActionTypes.REMOVE_FILTER
    }
}
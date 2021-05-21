import {ActionTypes} from '../constants/action-types';

const initialState = {
    dish : [
        {
            dishName : "Salad",
            proteins : 100,
            carbs : 100,
            fats : 100
        },
        {
            dishName : "Rice Bowl",
            proteins : 100,
            carbs : 100,
            fats : 100
        }
    ]
}

export const dishReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_DISH:
            return {
                dish: [...initialState.dish, payload]
            }
    
        default:
            return state;
    }
}
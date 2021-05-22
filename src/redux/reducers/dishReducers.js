import { v4 as uuidv4 } from 'uuid';
import {ActionTypes} from '../constants/action-types';

const initialState = {
    dish : [
        {
            id: uuidv4(),
            dishName : "Salad",
            proteins : 100,
            carbs : 100,
            fats : 100
        },
        {
            id: uuidv4(),
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
                dish: [...state.dish, payload]
            }

        case ActionTypes.EDIT_DISH:
            return {
                dish: [...state.dish.map(di => {
                    if(di.id === payload.id){
                        var newItem = Object.assign({},payload);
                        console.log("newitem--"+newItem)
                        return newItem;
                    } else {
                        return di;
                    }
                })]
            }
            
        default:
            return state;
    }
}
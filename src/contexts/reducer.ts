import { ApplicationState } from "./StateProvider";
import Product from "../models/Product";

export enum ActionType {
    ADD_TO_BASKET = 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'
}

export type Action = { type: ActionType.ADD_TO_BASKET, item: Product }
    | { type: ActionType.REMOVE_FROM_BASKET, id: number };

export const getBasketTotal = (basket: Product[]) =>
    basket.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state: ApplicationState, action: Action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case ActionType.REMOVE_FROM_BASKET:
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in the basket`)
            }
            return {
                ...state, basket: newBasket
            };
        default:
            return state;
    }
};

export default reducer;
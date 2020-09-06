import React, { createContext, useReducer, useContext } from 'react';
import { reducer, Action } from './reducer';
import Product from '../models/Product';

export interface ApplicationState {
    basket: Product[];
}

export const InitialState: ApplicationState = {
    basket: [{
        id: 1000,
        title: "Jack & Jones Jjesheridan Shirt L/S Noos Chemise en Jean Homme",
        image: "https://images-na.ssl-images-amazon.com/images/I/81g1EnZ1frL._AC_UX466_.jpg",
        price: 27.93,
        rating: 5
    }]
}

export interface IStateContext {
    state: ApplicationState;
    dispatch: React.Dispatch<Action>;
}

const StateContext = createContext({} as IStateContext);

export const StateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, InitialState);
    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValue = () => useContext(StateContext);

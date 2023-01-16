import { createContext, useReducer } from "react";

export const CustomItemContext = createContext();

export const CustomItemProvider = (props) => {

    const reducer = (state, action) => {
        switch (action.type) {
        case "ADD_TO_CUSTOMITEM":
            const tempstate = state.filter(
            (item) => action.payload.product.id === item.product.id
            );
    
            // if item is already in cart, increase quantity:
            if (tempstate.length > 0) {
            const tempstate = state.map((item) => {
                if (item.product.name === action.payload.product.name) {
                return { ...item, quantity: item.quantity + parseInt(action.payload.quantity) };
                } else {
                return item;
                }
            });
            return tempstate;
    
            } else {
            return [...state, action.payload];
            }
            
        case "INCREASE":
            const tempstate1 = state.map((item) => {
            if (item.product.name === action.payload.name) {
                return { ...item, quantity: item.quantity + 1 };
            } else {
                return item;
            }
            }
            );
            return tempstate1;
        case "DECREASE":
            const tempstate2 = state.map((item) => {
            if (item.product.name === action.payload.name) {
                return { ...item, quantity: item.quantity - 1 };
            } else {
                return item;
            }
            }
            );
            return tempstate2;
        case "REMOVE":
            const tempstate3 = state.filter(
            (item) => item.product.name !== action.payload.name
            );
                
            return tempstate3;
            
        default:
            return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, []);
    const info = { state, dispatch };

    return (
        <CustomItemContext.Provider value={{info}}>
            {props.children}
        </CustomItemContext.Provider>
    );
};

